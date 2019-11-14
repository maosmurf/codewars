'use strict';

function monkeyCount(n) {
    return Array.from({length:n}, (_,i)=>i+1)
}

module.exports = monkeyCount;
