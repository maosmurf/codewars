import {assert} from 'chai';
import {NeighborState, nextState, State} from "./gol";

describe("Game of Life Rules", function () {

    [NeighborState.UNDER_POPULATION, NeighborState.OVER_CROWDING].forEach(n => {
        [State.ALIVE, State.DEAD].forEach(s => {
            it(s + " cell should stay dead when " + n, () => {
                const next = nextState(s, n);
                assert.equal(next, State.DEAD);
            });
        });
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
