// const cars: string[] = ["Ford", "Audi"]
// const cars2: Array<string> = ["Ford", "Audi"]

// const promise = new Promise<number>((resolve) => {
//     setTimeout(() => {
//         resolve(42)
//     }, 2000)
// })

// promise.then((data) => {
//     console.log(data.toFixed())
// })

//?Без цих дженеріків, в змінній merge ми не можемо використовувати поля, так як отриманий об'єкт ніде не описаний, а так, ми кажемо, що функція поверне об'єкт, в якому є поля обох цих об'єктів
//?Використання дженеріків, дозволяє не описувати тип навмисно, а використовувати його відштовхуючись від уже створеного об'єкта
//?Також кожному дженеріку ми можемо вказати конкретний тип даних, до якого він відноситиметься
function mergeObject<T extends object, R extends object>(a: T, b: R): T & R {
    return Object.assign({}, a, b)
}

const merged = mergeObject({ name: "vadym" }, { age: 23 })
const merged2 = mergeObject({ model: "Audi" }, { year: 2022 })

//!============
function withCount<T extends any[] | string>(value: T) {
    return {
        value,
        count: `В цьому об'єкті ${value.length} символів`,
    }
}

console.log(withCount("aasdfasd"))
console.log(withCount(["aasdfasd", "asfdf", "sdfs"]))
// console.log(withCount(20)) // Error

//!============
//?Не кожен ключ є строкою і ми вказуємо, що R може бути усіх типів, як типи ключів в об'єкті T
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
    return obj[key]
}

const person = {
    name: "Vadym",
    age: 25,
}

console.log(getObjectValue(person, "name"))
console.log(getObjectValue(person, "age"))
// console.log(getObjectValue(person, "job")) // Error - job не присутній як ключ в даному об'єкті

//!=======
class Collection<T extends number | string | boolean> {
    // private _items: T[] = []

    constructor(private _items: T[] = []) {}

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter((i) => i != item)
    }

    get items(): T[] {
        return this._items
    }
}

const strings = new Collection<string>(["i", "am", "String"])
strings.add("the")
strings.remove("am")
console.log(strings.items)

//!=========
interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    //?Вказує, що даний об'єкт з таким інтерфейсом тимчасово пустий, і не потрібно виводити помилок
    const car: Partial<Car> = {}

    if (model.length > 3) {
        car.model = model
    }
    if (year > 2000) {
        car.year = year
    }

    return car as Car //? Щоб ts був впевнений, що ми повертаємо об'єкт саме того типу, який вказали
}

//!=========
//? ReadOnly не дозволяє мутувати тип даних із даною властивістю
const cars: Readonly<Array<string>> = ["Ford", "Audi"]

const ford: Readonly<Car> = {
    model: "Ford",
    year: 2020,
}
// ford.model = 'Ferrari' //Error
