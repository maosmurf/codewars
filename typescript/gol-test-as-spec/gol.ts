export enum State {
    DEAD,
}

export interface Cell {
    state: State;
    aliveNeighbours: number;
}

export class Rules {

    static nextState(cell: Cell): State {

        return State.DEAD;
    }
}
