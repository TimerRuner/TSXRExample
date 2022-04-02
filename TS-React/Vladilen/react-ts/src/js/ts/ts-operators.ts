interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

const myName: PersonKeys = "name"
// const surname: PersonKeys = "surname"
//? виведе помилку, так як в дану змінну можна вносити лише строчні значення з вмістом, яке відповідає одному із ключів об'єкта

//! Виключення полів із списку при передачі типів
type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt"> // 'name' | 'email
type UserKeysNoMeta2 = Pick<User, "name" | "email"> // 'name' | 'email
