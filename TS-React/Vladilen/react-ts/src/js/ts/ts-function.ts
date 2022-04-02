import { unwatchFile } from "fs"

// ! Типізація функцій
function add(a: number, b: number): number {
    return a + b
}

function toUpperCase(str: string): string {
    return str.trim().toUpperCase()
}

//! Реалізація перегрузк для функції, повертаючої об'єкт
//? інтерфейси об'єктів, що повертаються
interface MyPosition {
    x: number | undefined
    y: number | undefined
}
interface MyPositionWithDefautl extends MyPosition {
    default: string
}

//? Реалізація перегрузки, якщо є
function position(): MyPosition
function position(a: number): MyPositionWithDefautl
function position(a: number, b: number): MyPosition

//? Реалізація самої функції
function position(a?: number, b?: number) {
    if (!a && !b) {
        return { x: undefined, y: undefined }
    }

    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() }
    }

    return {
        x: a,
        y: b,
    }
}
