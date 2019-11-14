'use strict';

const assert = require('assert');
const monkeyCount = require('../src/monkeyCount');

describe("monkeyCount", _ => {
    it('should be 5', () => {
        assert.deepEqual((monkeyCount(5)), [1, 2, 3, 4, 5]);
    });
    it('should be 3', () => {
        assert.deepEqual((monkeyCount(3)), [1, 2, 3]);
    });
    it('should be 9', () => {
        assert.deepEqual((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
    it('should be 10', () => {
        assert.deepEqual((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
    it('should be 20', () => {
        assert.deepEqual((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
    });
});
