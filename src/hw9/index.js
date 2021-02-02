/* eslint-disable no-alert */

import { rootsOfTheQuadraticEquation } from "./task3.js";

const a = +prompt("enter a");
const b = +prompt("enter b");
const c = +prompt("enter c");

const d1 = rootsOfTheQuadraticEquation(a, b, c);
alert(d1);
