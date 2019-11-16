import {assert} from 'chai';
import {nextState} from "./gol";

describe("Game of Life Rules", function() {
    it("Dead cell should stay dead when under-populated", function() {
        const nextState = nextState(DEAD, UNDER_POPULATION);
        assert.equal(nextState, DEAD);
    });
});
