"use strict";
// Resposta
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var saldoTotal = 0;
campoSaldo.innerHTML = saldoTotal.toString();
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        SomarValores(Number(soma.value));
    });
}
;
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        saldoTotal = 0;
        campoSaldo.innerHTML = saldoTotal.toString();
    });
}
function SomarValores(valor) {
    if (campoSaldo) {
        if (isNaN(valor)) {
            return (alert("O valor \"".concat(soma.value, "\" n\u00E3o \u00E9 um n\u00FAmero. Digite novamente")),
                soma.value = '',
                soma.focus(),
                saldoTotal = Number(campoSaldo.innerText));
        }
        saldoTotal += valor;
        soma.value = "";
        soma.focus();
        campoSaldo.innerHTML = saldoTotal.toString();
    }
}
