"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//? Дикоратор призначений для декомпозиції - винесення логіки за межі описуваного об'єкта
function Log(constructor) {
    console.log(constructor); //! отримаємо клас до якого віднесли дикоратор
}
function Log2(target, propName) {
    console.log(target); //! отримаємо клас якому належить дана властивість
    console.log(propName); //! отримаємо назву поля, до якого використали дикоратор
}
function Log3(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log(descriptor); //? Дискріптор для конфігурації
}
//? Даний декоратор відповідає класу component
let Component = class Component {
    constructor(name) {
        this.name = name;
    }
    // @Log3
    get componentName() {
        return this.name;
    }
    logName() {
        console.log(`Component Name: ${this.name}`);
    }
};
__decorate([
    Log2
], Component.prototype, "name", void 0);
__decorate([
    Log3
], Component.prototype, "logName", null);
Component = __decorate([
    Log
], Component);
const validators = {};
function Required(target, propName) {
    validators[target.constructor.name] = Object.assign(Object.assign({}, validators[target.constructor.name]), { [propName]: "required" });
}
//? Можемо передавати поле, а можемо і ні
class Form {
    constructor(email) {
        this.email = email;
    }
}
const form = new Form();
function validate(obj) {
    const objConfig = validators[obj.constructor.name];
    if (!objConfig) {
        return true;
    }
    let isValid = true;
    Object.keys(objConfig).forEach((key) => {
        if (objConfig[key] === "required") {
            isValid = isValid && !!obj[key];
        }
    });
    return isValid;
}
if (validate(form)) {
    console.log("valid: ", form);
}
else {
    console.log("Validation form");
}
//# sourceMappingURL=decorators.js.map