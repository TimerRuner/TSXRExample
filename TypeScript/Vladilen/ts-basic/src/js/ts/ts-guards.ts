//! Guards споміжні конструкції для роботи із типами
function strip(x: string | number) {
    if (typeof x === "number") {
        return x.toFixed(2)
    }
    return x.trim()
}

//! Перевірка на приналежність об'єкта до конкретного класу
class MyResponse {
    header = "response header"
    result = "response result"
}
class MyError {
    header = "error header"
    message = "error message"
}

//? Завдяки instanceof ts знає з яким об'єктом ми працюємо і по якому класу визначати наявність полів
function handle(res: MyResponse | MyError) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result,
        }
    } else {
        return {
            info: res.header + res.message,
        }
    }
}

//?===================
type AlertType = "success" | "danger" | "warning"

//? З даним типом ми не зможемо передати строку іншого формату, відмінну від описаних
function setAlertType(type: AlertType) {
    //...
}
