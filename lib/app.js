// app.js
import * as math from "./math";

import * as circle from "./circle"

var c = new circle.Circle(10);
console.log(c.area());

console.log("2? = " + math.sum(math.pi, math.pi));

console.log([1,2,3].map(() =>  1 ));