"use strict";
// Como podemos melhorar o esse código usando TS? 
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedor"] = 0] = "Desenvolvedor";
    Profissao[Profissao["Padeiro"] = 1] = "Padeiro";
    Profissao[Profissao["T\u00E9cnico"] = 2] = "T\u00E9cnico";
    Profissao[Profissao["Instalador"] = 3] = "Instalador";
    Profissao[Profissao["Atriz"] = 4] = "Atriz";
})(Profissao || (Profissao = {}));
var pessoa1 = {
    nome: "Maria",
    idade: 29,
    profissao: Profissao.Atriz
};
var pessoa2 = {
    nome: "Roberto",
    idade: 19,
    profissao: Profissao.Padeiro
};
var pessoa3 = {
    nome: "Laura",
    idade: 32,
    profissao: Profissao.Atriz
};
var pessoa4 = {
    nome: "Carlos",
    idade: 19,
    profissao: Profissao.Padeiro
};
