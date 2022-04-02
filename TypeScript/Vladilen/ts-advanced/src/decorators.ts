//? Дикоратор призначений для декомпозиції - винесення логіки за межі описуваного об'єкта
function Log(constructor: Function) {
    console.log(constructor) //! отримаємо клас до якого віднесли дикоратор
}
function Log2(target: any, propName: string | Symbol) {
    console.log(target) //! отримаємо клас якому належить дана властивість
    console.log(propName) //! отримаємо назву поля, до якого використали дикоратор
}
function Log3(
    target: any,
    propName: string | Symbol,
    descriptor: TypedPropertyDescriptor<() => void>
) {
    console.log(target)
    console.log(propName)
    console.log(descriptor) //? Дискріптор для конфігурації
}

//? Даний декоратор відповідає класу component
@Log
class Component {
    @Log2
    name: string

    // @Log3
    get componentName() {
        return this.name
    }

    constructor(name: string) {
        this.name = name
    }

    @Log3
    logName(): void {
        console.log(`Component Name: ${this.name}`)
    }
}

//! ===============
type ValidatorType = "required" | "email"

interface ValidatorConifg {
    [props: string]: {
        [validateProps: string]: ValidatorType
    }
}

const validators: ValidatorConifg = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        ...validators[target.constructor.name],
        [propName]: "required",
    }
}
//? Можемо передавати поле, а можемо і ні
class Form {
    public email: string | void

    constructor(email?: string) {
        this.email = email
    }
}
const form = new Form()

function validate(obj: any): boolean {
    const objConfig = validators[obj.constructor.name]
    if (!objConfig) {
        return true
    }
    let isValid = true
    Object.keys(objConfig).forEach((key) => {
        if (objConfig[key] === "required") {
            isValid = isValid && !!obj[key]
        }
    })
    return isValid
}

if (validate(form)) {
    console.log("valid: ", form)
} else {
    console.log("Validation form")
}
