function testParseBoardState() {
    let gameStateData = {
        "boardState": {
            "pieces": "BBBB...................................................."
        }
    }
    parseBoardState(gameStateData)
}

function parseBoardState(gameStateData: any): BoardState {
    let parsedBoardState = new BoardState()
    parsedBoardState.pieces = parseBoardPieces(gameStateData.boardState.pieces)
    alert(parsedBoardState.pieces.length)
    return parsedBoardState
}

function parseBoardPieces(encodedPieces: string | null): Array<PieceOnBoard> {
    let decodedPieces = new Array<PieceOnBoard>()
    let i = 0
    for (let row = 0; row < BOARD_ROW_COUNT; ++row) {
        for (let column = 0; column < BOARD_COLUMN_COUNT; ++column) {
            let encodedPieceChar = encodedPieces.charAt(i)
            ++i
            let coloredPiece = decodeColoredPiece(encodedPieceChar)
            if (coloredPiece != null) {
                let currentBoardSquare = new BoardSquare(row, column)
                decodedPieces.push(new PieceOnBoard(coloredPiece, currentBoardSquare))
            }
        }
    }
    return decodedPieces
}

function decodeColoredPiece(encodedPieceChar: string): ColoredPiece | null {
    let piece = decodePieceType(encodedPieceChar)
    if (piece == null) {
        return null
    }
    let player = decodePlayer(encodedPieceChar)
    return new ColoredPiece(piece, player)
}

function decodePieceType(encodedPieceChar: string): Piece | null {
    switch (encodedPieceChar.toLowerCase()) {
        case "p":
            return Piece.Pawn
        case "n":
            return Piece.Knight
        case "b":
            return Piece.Bishop
        case "r":
            return Piece.Rook
        case "q":
            return Piece.Queen
        case "k":
            return Piece.King
        default:
            return null
    }
}

function decodePlayer(encodedPieceChar: string): Player {
    return encodedPieceChar == encodedPieceChar.toLowerCase() ? Player.Black : Player.White
}
