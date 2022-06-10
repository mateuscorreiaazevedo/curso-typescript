"use strict";
// Non-null Assertion Operator
// às vezes o typescript pode evidenciar um erro, baseado em um valor que no ->
// -> momento do código ainda não está disponível
const p = document.getElementById('some-p');
console.log(p?.innerText);
