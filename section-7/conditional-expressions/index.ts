// tipo por condição

interface A {

}
interface B extends A {

}

type myType = B extends A ? number : string

const someVar: myType = 5

// Template Literals Type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
// const testing2: CustomType = 'some text 2'

type a = 'testee'
type b = 'union'

type c = `${a}` | `${b}`

const abc: c = "testee"