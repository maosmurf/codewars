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
        return cell.aliveNeighbours == 3 || cell.aliveNeighbours == 2 ? State.ALIVE : State.DEAD;
    }

}
