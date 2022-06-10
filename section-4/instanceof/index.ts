// checando se um dado pertence a uma determinada classe

class User {
  name

  constructor(name: string) {
    this.name = name
  }

}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const jhon = new User('jhon')
const paul = new SuperUser('paul')

const userGreeting = (user: object) => {
  if(user instanceof SuperUser) {
    console.log(`olá senhor ${user.name}, deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
  console.log(`olá ${user.name}, deseja ver os dados do sistema?`);
  }
}

userGreeting(jhon)
userGreeting(paul)