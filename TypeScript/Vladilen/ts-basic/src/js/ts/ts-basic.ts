const message: string = "message"
const isLoading: boolean = false

const int: number = 3
const int1: number = 3.2
const int2: number = 3e10

const numberArray: number[] = [1, 2, 3, 4]
const numberArray2: Array<number> = [1, 3, 5, 6]

//! Масив змішаних типів
const contact: [string, number] = ["Vadym", 1234]

//!Any (відключення строгої типізації)
let variables: any = 43
//..
variables = "string variable"

//! Function
//? Funtion without return
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName("Sergio")

//?Never (коли функція повертає помилку і ніколи не закінчується, або коли вона постійно щось робить)
function throwError(message: string): never {
    throw new Error(message)
}

function infinite(): never {
    while (true) {}
}

//! Type (еліаси для типів) - змінні для опису типів
type Login = string
const login: Login = "admin"

//?Динамічні типи
type ID = string | number
const id1: ID = 123
const id2: ID = "234"

//! null || undefined
