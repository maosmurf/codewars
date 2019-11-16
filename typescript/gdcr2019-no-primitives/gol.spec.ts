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

    it("Alive cell should die when over-crowded", () => {
        const next = nextState(State.ALIVE, NeighborState.OVER_CROWDING);
        assert.equal(next, State.DEAD);
    });

    it("Alive cell should stay alive when surivor", () => {
        const next = nextState(State.ALIVE, NeighborState.SURVIVAL);
        assert.equal(next, State.ALIVE);
    });

    it("Dead cell should become alive when reproduction", () => {
        const next = nextState(State.DEAD, NeighborState.REPRODUCTION);
        assert.equal(next, State.ALIVE);
    });

});
