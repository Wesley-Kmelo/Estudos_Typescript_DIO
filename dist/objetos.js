"use strict";
var pessoa = {
    nome: "Wesley",
    idade: 33,
    profissao: "Programador"
};
var pessoa2 = {
    nome: pessoa.nome,
    idade: pessoa.idade,
    profissao: pessoa.profissao
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Desenvolvedora"] = 0] = "Desenvolvedora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Cantora"] = 2] = "Cantora";
    Profissao[Profissao["Administrativa"] = 3] = "Administrativa";
})(Profissao || (Profissao = {}));
var Wesley = {
    nome: "Welsey Camelo",
    idade: 34
};
var est1 = {
    nome: "Thiago",
    idade: 25,
    materias: ["Matematica", "Portugues", 'Ciências Naturais'],
    profissao: Profissao.Desenvolvedora
};
function Listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log(" - ", item);
    }
}
Listar(est1.materias);
