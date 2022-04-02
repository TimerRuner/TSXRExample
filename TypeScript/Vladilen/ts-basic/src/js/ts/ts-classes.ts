//! Типізація класів без інтерфейсу ======
class Typescript {
    version: string
    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

//! Особливості роботи з класами в TS ======

//? Скорочена ініціалізація полів в конструкторі
// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {} //поле model створиться самостійно
}

//? Модифікатори в класах
//? По замовчуванню всі модифікатори public

//?? public змінна-метод доступні в класі, класі-насліднику, екземплярі класу
//?? protected змінна-метод доступні в класі, класі-насліднику
//?? private змінна-метод доступні в класі

class Animal {
    protected voice: string = ""
    public color: string = "black"

    private go() {
        console.log("Go")
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()

//! Абстрактні класи ========
//? Абстракні класи це подоба інтерфейсу методів, які можуть чи повинні бути в класі

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render() {
        console.log("render")
    }
    info() {
        return "info"
    }
}
