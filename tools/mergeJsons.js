// one off file to merge these jsons

const o = require("../uberChords");
const o1 = require("../uberChords1");
const o2 = require("../uberChords2");
const o3 = require("../uberChords3");
const o4 = require("../uberChords4");
const o5 = require("../uberChords5");
const o6 = require("../uberChords6");
const o7 = require("../uberChords7");
const o8 = require("../uberChords8");
const o9 = require("../uberChords9");
const o10 = require("../uberChords10");
const o11 = require("../uberChords11");
const o12 = require("../uberChords12");
const o13 = require("../uberChords13");
const o14 = require("../uberChords14");
const o15 = require("../uberChords15");
const o16 = require("../uberChords16");
const o17 = require("../uberChords17");
const o18 = require("../uberChords18");
const o19 = require("../uberChords19");
const o20 = require("../uberChords20");
const o21 = require("../uberChords21");
const o22 = require("../uberChords22");
const o23 = require("../uberChords23");
const o24 = require("../uberChords24");
const o25 = require("../uberChords25");
const o26 = require("../uberChords26");
const o27 = require("../uberChords27");
const o28 = require("../uberChords28");
const o29 = require("../uberChords29");
const o30 = require("../uberChords30");
const o31 = require("../uberChords31");
const o32 = require("../uberChords32");
const o33 = require("../uberChords33");
const o34 = require("../uberChords34");
const o35 = require("../uberChords35");
const o36 = require("../uberChords36");


const { uniqBy } = require("lodash");
const flatten = arr => arr.reduce((a, v) => {
    v instanceof Array ? a.push(...flatten(v)) : a.push(v);
    return a;
}, [])
const fs = require('fs');
const b = [o, o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24, o22,
    o23,
    o24,
    o25,
    o26,
    o27,
    o28,
    o29,
    o30,
    o31,
    o32,
    o33,
    o34,
    o35,
    o36]
const uberChords = flatten(b)
const data = JSON.stringify(uberChords)
fs.writeFileSync("chordsWithFingers3.json", data)


