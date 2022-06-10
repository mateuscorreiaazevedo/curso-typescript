"use strict";
// semelhante ao void
// não retorna nada
// ex: retorno de erro
const err = (msg) => { throw new Error(msg); };
err('error!');
