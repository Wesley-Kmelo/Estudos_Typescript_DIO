"use strict";
var btn = document.getElementById('button');
var vlr1 = document.getElementById('input1');
var vlr2 = document.getElementById('input2');
function addNumbers(n1, n2) {
    return n1 + n2;
}
var dev = true;
if (btn) {
    if (vlr1 && vlr2) {
        btn.addEventListener('click', function () {
            console.log(addNumbers(Number(vlr1.value), Number(vlr2.value)));
        });
    }
}
