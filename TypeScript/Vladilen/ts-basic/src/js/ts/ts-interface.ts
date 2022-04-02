//! Типізація об'єктів
interface Rect {
    readonly id: string //? дане поле не змінюється
    color?: string //? дане поле не обов'язкове
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: "123",
    color: "sfs", //? Не обов'язкове, на відміну від інших полів
    size: {
        width: 10,
        height: 10,
    },
}

const rect2: Rect = {
    id: "123",
    size: {
        width: 120,
        height: 20,
    },
}
rect2.color = "black"
// rect2.id = "34" //Error  тому що поле описане як readonly

//? Способи типізації об'єктів інтерфейсом
const rect3 = {} as Rect
const rect4 = <Rect>{}

//!Наслідування Інтерфейсів ===========
interface RectWithArea extends Rect {
    getArea: () => number
}

const rect5: RectWithArea = {
    id: "2323",
    size: {
        width: 120,
        height: 20,
    },
    getArea(): number {
        return this.size.width * this.size.height
    },
}

//! Інтерфейс для класів

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time = new Date()
    setTime(date) {
        this.time = date
        console.log(this.time)
    }
}

//? Загальний опис класу (так як ми не завжди можемо описати ключі і значення, якщо вони динамічні)
interface Styles {
    [key: string]: string //Даний запис відносить до усіх стрінгових ключів в об'єкті
}

const css: Styles = {
    border: "1px solid red",
    marginTop: "2px",
    borderRadius: "5px",
}
