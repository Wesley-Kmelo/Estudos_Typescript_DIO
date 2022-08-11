"use strict";
var btn1 = document.getElementById('button');
var vl1 = document.getElementById('input1');
var vl2 = document.getElementById('input2');
function SomaOrConcat(n1, n2) {
    btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener('click', function () {
        if (typeof n1 === 'string' || typeof n2 === 'string') {
            return n1.toString() + n2.toString();
        }
        else {
            Number(n1.valueOf()) + Number(n2.valueOf());
        }
    });
}
function Soma(n1, n2) {
    return n1 + n2;
}
console.log(SomaOrConcat(vl1, vl2));
console.log(Soma(24, 32));
