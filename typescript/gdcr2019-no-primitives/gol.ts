export enum State {
    ALIVE,
    DEAD
}

export enum NeighborState {
    SURVIVOR,
    UNDER_POPULATION
}

export function nextState(state: State, neighborState: NeighborState): State {
    if(neighborState == NeighborState.UNDER_POPULATION) {
        return State.DEAD;
    }
    return state;
}
