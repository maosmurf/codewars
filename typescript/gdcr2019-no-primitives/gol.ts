export enum State {
    ALIVE,
    DEAD
}

export enum NeighborState {
    UNDER_POPULATION,
    SURVIVAL,
    REPRODUCTION,
    OVER_CROWDING
}

export function nextState(state: State, neighborState: NeighborState): State {
    if(neighborState == NeighborState.REPRODUCTION) {
        return State.ALIVE;
    }
    if(neighborState == NeighborState.OVER_CROWDING) {
        return State.DEAD;
    }
    if(neighborState == NeighborState.UNDER_POPULATION) {
        return State.DEAD;
    }
    return state;
}
