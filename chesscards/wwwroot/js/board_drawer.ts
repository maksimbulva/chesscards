const SQUARE_WIDTH = 50
const SQUARE_HEIGHT = 50

let canvas = <HTMLCanvasElement>document.getElementById("board")
let context = canvas.getContext("2d")

let lightSquareImage = createBoardSquareImage("./images/chessboard/fritz/light.png")
let darkSquareImage = createBoardSquareImage("./images/chessboard/fritz/dark.png")

class Vector2 {
    public x: number
    public y: number

    constructor(x: number, y: number) {
        this.x = x
        this.y = y
    }
}

class PieceImages {
    public pawnImage: HTMLImageElement
    public knightImage: HTMLImageElement
    public bishopImage: HTMLImageElement
    public rookImage: HTMLImageElement
    public queenImage: HTMLImageElement
    public kingImage: HTMLImageElement

    constructor(
        pawnImageSrc: string,
        knightImageSrc: string,
        bishopImageSrc: string,
        rookImageSrc: string,
        queenImageSrc: string,
        kingImageSrc: string
    ) {
        this.pawnImage = createPieceImage(pawnImageSrc)
        this.knightImage = createPieceImage(knightImageSrc)
        this.bishopImage = createPieceImage(bishopImageSrc)
        this.rookImage = createPieceImage(rookImageSrc)
        this.queenImage = createPieceImage(queenImageSrc)
        this.kingImage = createPieceImage(kingImageSrc)
    }
}

let whitePieceImages = new PieceImages(
    "./images/pieces/alpha/white_pawn.png",
    "./images/pieces/alpha/white_knight.png",
    "./images/pieces/alpha/white_bishop.png",
    "./images/pieces/alpha/white_rook.png",
    "./images/pieces/alpha/white_queen.png",
    "./images/pieces/alpha/white_king.png"
)

let blackPieceImages = new PieceImages(
    "./images/pieces/alpha/black_pawn.png",
    "./images/pieces/alpha/black_knight.png",
    "./images/pieces/alpha/black_bishop.png",
    "./images/pieces/alpha/black_rook.png",
    "./images/pieces/alpha/black_queen.png",
    "./images/pieces/alpha/black_king.png"
)

function drawBoardSquares() {
    let isCurrentSquareDark: boolean = true
    for (let row = 0; row < BOARD_ROW_COUNT; ++row) {
        for (let column = 0; column < BOARD_COLUMN_COUNT; ++column) {
            let topLeftCorner = getBoardSquareCoordinates(row, column)
            let squareImage = isCurrentSquareDark ? darkSquareImage : lightSquareImage
            context.drawImage(squareImage, topLeftCorner.x, topLeftCorner.y, squareImage.width, squareImage.height)
            isCurrentSquareDark = !isCurrentSquareDark
        }
        isCurrentSquareDark = !isCurrentSquareDark
    }
}

function drawPieces(pieces: Array<PieceOnBoard>) {
    for (let pieceOnBoard of pieces) {
        let topLeftCorner = getBoardSquareCoordinates(pieceOnBoard.square.row, pieceOnBoard.square.column)
        let image = getPieceImage(pieceOnBoard)
        context.drawImage(image, topLeftCorner.x, topLeftCorner.y, image.width, image.height)
    }
}

function drawBoard(boardState: BoardState) {
    drawBoardSquares()
    drawPieces(boardState.pieces)
}

function createBoardSquareImage(src: string): HTMLImageElement {
    let squareImage = new Image(SQUARE_WIDTH, SQUARE_HEIGHT)
    squareImage.src = src
    return squareImage
}

function createPieceImage(src: string): HTMLImageElement {
    let squareImage = new Image(SQUARE_WIDTH, SQUARE_HEIGHT)
    squareImage.src = src
    return squareImage
}

function getPieceImage(pieceOnBoard: PieceOnBoard): HTMLImageElement {
    let pieceImages = pieceOnBoard.coloredPiece.player == Player.White ? whitePieceImages : blackPieceImages
    switch (pieceOnBoard.coloredPiece.piece) {
        case Piece.Pawn:
            return pieceImages.pawnImage
        case Piece.Knight:
            return pieceImages.knightImage
        case Piece.Bishop:
            return pieceImages.bishopImage
        case Piece.Rook:
            return pieceImages.rookImage
        case Piece.Queen:
            return pieceImages.queenImage
        default:
            return pieceImages.kingImage
    }
}

function getBoardSquareCoordinates(row: number, column: number): Vector2 {
    return new Vector2(column * SQUARE_WIDTH, (BOARD_ROW_MAX - row) * SQUARE_HEIGHT)
}
