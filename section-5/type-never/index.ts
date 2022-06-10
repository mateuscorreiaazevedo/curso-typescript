// semelhante ao void
// não retorna nada
// ex: retorno de erro

const err = (msg: string): never => { throw new Error(msg) }


err('error!')