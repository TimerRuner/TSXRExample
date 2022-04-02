"use strict";
//! Дозволяють робити модульний код
///<reference path="formNamespace.ts" />
//? Огортаємо конструкцію в імпортований namespace із описанням типів
var IForm;
(function (IForm) {
    class MyForm {
        constructor(email) {
            this.email = email;
            this.type = "inline";
            this.state = "active";
        }
        getInfo() {
            return {
                type: this.type,
                state: this.state,
            };
        }
    }
    const myForm = new MyForm("vadym@gmail.com");
    console.log(myForm);
})(IForm || (IForm = {}));
//# sourceMappingURL=namespaces.js.map