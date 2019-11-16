import {assert} from 'chai';
import {Cell, Rules, State} from "./gol";

describe("Game of life", function () {
    it("Dead cell with under-population stays dead", function () {
        let cell: Cell = {
            state: State.DEAD,
            aliveNeighbours: 0
        };
        let nextState = Rules.nextState(cell);
        assert.equal(nextState, State.DEAD);
    });

    it("Dead cell with three neighbors becomes alive", function () {
        let cell: Cell = {
            state: State.DEAD,
            aliveNeighbours: 3
        };
        let nextState = Rules.nextState(cell);
        assert.equal(nextState, State.ALIVE);
    });

    it("Alive cell with two neighbors stays alive", function () {
        let cell: Cell = {
            state: State.ALIVE,
            aliveNeighbours: 2
        };
        let nextState = Rules.nextState(cell);
        assert.equal(nextState, State.ALIVE);
    });
    it("Dead cell with two neighbors stays dead", function () {
        let cell: Cell = {
            state: State.DEAD,
            aliveNeighbours: 2
        };
        let nextState = Rules.nextState(cell);
        assert.equal(nextState, State.DEAD);
    });
});
