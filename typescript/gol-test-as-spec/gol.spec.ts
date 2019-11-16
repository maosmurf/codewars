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
});
