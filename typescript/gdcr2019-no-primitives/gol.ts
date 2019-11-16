export enum State {
    ALIVE,
    DEAD
}

export enum NeighborState {
    SURVIVOR,
    UNDER_POPULATION,
    OVER_CROWDING
}

export function nextState(state: State, neighborState: NeighborState): State {
    if(neighborState == NeighborState.OVER_CROWDING) {
        return State.DEAD;
    }
    if(neighborState == NeighborState.UNDER_POPULATION) {
        return State.DEAD;
    }
    return state;
}
