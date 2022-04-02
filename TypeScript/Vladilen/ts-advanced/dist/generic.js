"use strict";
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
function mergeObject(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObject({ name: "vadym" }, { age: 23 });
const merged2 = mergeObject({ model: "Audi" }, { year: 2022 });
//!============
function withCount(value) {
    return {
        value,
        count: `В цьому об'єкті ${value.length} символів`,
    };
}
console.log(withCount("aasdfasd"));
console.log(withCount(["aasdfasd", "asfdf", "sdfs"]));
// console.log(withCount(20)) // Error
//!============
//?Не кожен ключ є строкою і ми вказуємо, що R може бути усіх типів, як типи ключів в об'єкті T
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Vadym",
    age: 25,
};
console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
// console.log(getObjectValue(person, "job")) // Error - job не присутній як ключ в даному об'єкті
//!=======
class Collection {
    // private _items: T[] = []
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((i) => i != item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collection(["i", "am", "String"]);
strings.add("the");
strings.remove("am");
console.log(strings.items);
function createAndValidateCar(model, year) {
    //?Вказує, що даний об'єкт з таким інтерфейсом тимчасово пустий, і не потрібно виводити помилок
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car; //? Щоб ts був впевнений, що ми повертаємо об'єкт саме того типу, який вказали
}
//!=========
//? ReadOnly не дозволяє мутувати тип даних із даною властивістю
const cars = ["Ford", "Audi"];
const ford = {
    model: "Ford",
    year: 2020,
};
// ford.model = 'Ferrari' //Error
//# sourceMappingURL=generic.js.map