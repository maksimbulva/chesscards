class BoardSquare {
    public row: number
    public column: number

    constructor(row: number, column: number) {
        this.row = row
        this.column = column
    }
}

class PieceOnBoard {
    public coloredPiece: ColoredPiece
    public square: BoardSquare

    constructor(coloredPiece: ColoredPiece, square: BoardSquare) {
        this.coloredPiece = coloredPiece
        this.square = square
    }
}

class BoardState {
    public pieces: Array<PieceOnBoard>
}
