import {assert} from 'chai';
import {NeighborState, nextState, State} from "./gol";

describe("Game of Life Rules", function () {
    it("Dead cell should stay dead when under-populated", () => {
        const next = nextState(State.DEAD, NeighborState.UNDER_POPULATION);
        assert.equal(next, State.DEAD);
    });

    it("Alive cell should die when under-populated", () => {
        const next = nextState(State.ALIVE, NeighborState.UNDER_POPULATION);
        assert.equal(next, State.DEAD);
    });
    it("Alive cell should stay alive when surivor", () => {
        const next = nextState(State.ALIVE, NeighborState.SURVIVOR);
        assert.equal(next, State.ALIVE);
    });
});
