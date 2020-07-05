const BOARD_ROW_COUNT = 8
const BOARD_COLUMN_COUNT = 8

const BOARD_ROW_MAX = BOARD_ROW_COUNT - 1

const SQUARE_WIDTH = 50
const SQUARE_HEIGHT = 50

let canvas = <HTMLCanvasElement>document.getElementById("board")
let context = canvas.getContext("2d")

let lightSquareImage = createBoardSquareImage("./images/chessboard/fritz/light.png")
let darkSquareImage = createBoardSquareImage("./images/chessboard/fritz/dark.png")

function drawBoardSquares() {
    let isCurrentSquareDark: boolean = true
    for (let row = 0; row < BOARD_ROW_COUNT; ++row) {
        for (let column = 0; column < BOARD_COLUMN_COUNT; ++column) {
            let x = column * SQUARE_WIDTH
            let y = (BOARD_ROW_MAX - row) * SQUARE_HEIGHT
            let squareImage = isCurrentSquareDark ? darkSquareImage : lightSquareImage
            context.drawImage(squareImage, x, y, squareImage.width, squareImage.height)
            isCurrentSquareDark = !isCurrentSquareDark
        }
        isCurrentSquareDark = !isCurrentSquareDark
    }
}

function createBoardSquareImage(src: string): HTMLImageElement {
    let squareImage = new Image(SQUARE_WIDTH, SQUARE_HEIGHT)
    squareImage.src = src
    return squareImage
}
