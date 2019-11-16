import {assert} from 'chai';
import {Cell, Rules, State} from "./gol";

describe("Game of life rules", function () {
    [
        [State.DEAD, 0, State.DEAD],
        [State.DEAD, 1, State.DEAD],
        [State.DEAD, 2, State.DEAD],
        [State.DEAD, 3, State.ALIVE],
        [State.DEAD, 4, State.DEAD],
        [State.DEAD, 5, State.DEAD],
        [State.DEAD, 6, State.DEAD],
        [State.DEAD, 7, State.DEAD],
        [State.DEAD, 8, State.DEAD],
        [State.ALIVE, 0, State.DEAD],
        [State.ALIVE, 1, State.DEAD],
        [State.ALIVE, 2, State.ALIVE],
        [State.ALIVE, 3, State.ALIVE],
        [State.ALIVE, 4, State.DEAD],
        [State.ALIVE, 5, State.DEAD],
        [State.ALIVE, 6, State.DEAD],
        [State.ALIVE, 7, State.DEAD],
        [State.ALIVE, 8, State.DEAD],

    ].forEach(([s, n, ex]) => {
        it(s + " with " + n + " neighbours should be " + ex, function () {
            let cell: Cell = {
                state: s,
                aliveNeighbours: () => n
            };
            let nextState = Rules.nextState(cell);
            assert.equal(nextState, ex);
        });
    });
});

describe("Game of life cell neighbours", function () {
 it("With 0 neighbours return 0", function () {
     assert.equal(Rules.getAliveNeighbours({x: 0, y: 0 }, []), 0);
 })
    it("With 1 neighbours return 1", function () {
        assert.equal(Rules.getAliveNeighbours({x: 0, y: 0 }, [{x: 1, y: 1 }]), 1);
    })
    it("With 0 neighbours but other living cell return 0", function () {
        assert.equal(Rules.getAliveNeighbours({x: 0, y: 0 }, [{x: 2, y: 2 }]), 0);
    })
})
