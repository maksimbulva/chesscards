const WHITE_PIECES_BACKRANK = 0
const BLACK_PIECES_BACKRANK = 7

const WHITE_PAWNS_ROW = 1
const BLACK_PAWNS_ROW = 6

let currentBoardState = getInitialBoardState()

function getInitialBoardState(): BoardState {
    let initialBoardState = new BoardState()

    let backrankPiecesOrder: Piece[] = [
        Piece.Rook,
        Piece.Knight,
        Piece.Bishop,
        Piece.Queen,
        Piece.King,
        Piece.Bishop,
        Piece.Knight,
        Piece.Rook
    ]

    initialBoardState.pieces = new Array<PieceOnBoard>()
    for (let column = 0; column < backrankPiecesOrder.length; ++column) {
        let piece = backrankPiecesOrder[column]
        initialBoardState.pieces.push(
            new PieceOnBoard(new ColoredPiece(piece, Player.White), new BoardSquare(WHITE_PIECES_BACKRANK, column))
        )
        initialBoardState.pieces.push(
            new PieceOnBoard(new ColoredPiece(piece, Player.Black), new BoardSquare(BLACK_PIECES_BACKRANK, column))
        )
        initialBoardState.pieces.push(
            new PieceOnBoard(new ColoredPiece(Piece.Pawn, Player.White), new BoardSquare(WHITE_PAWNS_ROW, column))
        )
        initialBoardState.pieces.push(
            new PieceOnBoard(new ColoredPiece(Piece.Pawn, Player.Black), new BoardSquare(BLACK_PAWNS_ROW, column))
        )
    }
    return initialBoardState
}
