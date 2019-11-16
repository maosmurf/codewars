

type Neighbours = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
type States = { [kez in Neighbours]: number }
type Coordinate = { x: number, y: number }
export const State = {"DEAD" : 0, "ALIVE" : 1}


const deadStates: States = {
    0: State.DEAD,
    1: State.DEAD,
    2: State.DEAD,
    3: State.ALIVE,
    4: State.DEAD,
    5: State.DEAD,
    6: State.DEAD,
    7: State.DEAD,
    8: State.DEAD,
}

const aliveStates: States = {
    0: State.DEAD,
    1: State.DEAD,
    2: State.ALIVE,
    3: State.ALIVE,
    4: State.DEAD,
    5: State.DEAD,
    6: State.DEAD,
    7: State.DEAD,
    8: State.DEAD,
}

export type Cell = {
    state : number
    aliveNeighbours: () => number
}


const neighbourOffset = [
    [1,1],
    [-1,-1],
    [-1,0],
    [0,-1],
    [0,1],
    [1,0],
]

export const Rules = {
    nextState: function(cell: Cell) {
        if (cell.state === State.ALIVE) {
            return aliveStates[cell.aliveNeighbours()]
        } else {
            return deadStates[cell.aliveNeighbours()]
        }
    },
    getAliveNeighbours: function(coordinate: Coordinate, coordinatesOfLivingCells: Coordinate[]) {
        return coordinatesOfLivingCells.filter(c =>
            !(c.x == coordinate.x && c.y == coordinate.y)
        ).length
    }
}
