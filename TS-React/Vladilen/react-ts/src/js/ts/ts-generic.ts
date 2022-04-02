const arrayOfNumbers: Array<number> = [1, 2, 4, 5, 6]
const arrayOfStrings: Array<string> = ["Hello", "Vadymas"]

//? Дана функція динамічно підставлятиме тип масиву, відштовхуючись від його типу
function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)
