//! Дозволяють робити модульний код
///<reference path="formNamespace.ts" />

//? Огортаємо конструкцію в імпортований namespace із описанням типів
namespace IForm {
    class MyForm {
        private type: FormType = "inline"
        private state: FormState = "active"

        constructor(public email: string) {}

        getInfo(): FormInfo {
            return {
                type: this.type,
                state: this.state,
            }
        }
    }

    const myForm = new MyForm("vadym@gmail.com")
    console.log(myForm)
}
