interface Props {
  name: string,
  age: number,
  job?: string
}

const people = (props: Props) => {
  const { age, job, name } = props

  if(!job) {
    return `meu nome é ${name}, tenho ${age} anos de idade e não trabalho atualmente`
  }
  return `meu nome é ${name}, eu tenho ${age} anos e trabalho como ${job}`
}

console.log(people({name: 'Mateus', age: 23}));
console.log(people({name: 'Mateus', age: 23, job: 'desenvolvedor'}));

const formalGreeting = (name: string, greet?: string) => {
  const greeting = !!greet ? `Olá ${greet} ${name}, tudo bem?` : `Olá ${name}, tudo bem?`
  return greeting
}

console.log(formalGreeting('mateus'));
console.log(formalGreeting('Waldemar', 'Sr.'));
