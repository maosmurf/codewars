export enum State {
    ALIVE,
    DEAD,
}

export interface Cell {
    state: State;
    aliveNeighbours: number;
}

export class Rules {

    static nextState(cell: Cell): State {
        if (cell.aliveNeighbours == 3) {
            return State.ALIVE;
        }
        if (cell.aliveNeighbours == 2) {
            return cell.state;
        }
        return State.DEAD;
    }

}
