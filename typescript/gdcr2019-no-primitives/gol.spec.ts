import {assert} from 'chai';
import {nextState, State} from "./gol";

describe("Game of Life Rules", function () {
    it("Dead cell should stay dead when under-populated", () => {
        let UNDER_POPULATION;
        const next = nextState(State.DEAD, UNDER_POPULATION);
        assert.equal(next, State.DEAD);
    });
    it("Alive cell should stay alive when surivor", () => {
        let SURVIVOR;
        const next = nextState(State.ALIVE, SURVIVOR);
        assert.equal(next, State.ALIVE);
    });
});
