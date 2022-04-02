// class Person {
//     constructor(private name: string) {}
// }

// const person = new Person("VlaDik")

const btn: Element | null = document.querySelector(".btn")
console.log(btn)
if (btn) {
    btn.addEventListener("click", () => {
        console.log("Btn clicked")
    })
}
