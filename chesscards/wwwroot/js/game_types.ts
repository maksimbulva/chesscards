const BOARD_ROW_COUNT = 8
const BOARD_COLUMN_COUNT = 8

const BOARD_ROW_MAX = BOARD_ROW_COUNT - 1

enum Player {
    Black,
    White
}

enum Piece {
    Pawn,
    Knight,
    Bishop,
    Rook,
    Queen,
    King
}

class ColoredPiece {
    public piece: Piece
    public player: Player

    constructor(piece: Piece, player: Player) {
        this.piece = piece
        this.player = player
    }
}
