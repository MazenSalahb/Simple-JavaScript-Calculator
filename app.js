let btns = document.querySelectorAll('.num');
let display = document.getElementById("dis");
let ac = document.getElementById("ac");
let del = document.getElementById("del");
let opes = document.querySelectorAll(".ope");
let calc = document.getElementById("equ");

for (let btn of btns) {
    btn.addEventListener("click", function () {
        let number = this.dataset.num;
        if (number == "." && display.innerHTML.slice(-1) == ".") {

        } else {
            display.innerHTML = display.innerHTML + number
        }
    })
}

for (let ope of opes) {
    ope.addEventListener('click', function () {
        let operator = this.dataset.ope;

        if (display.innerHTML.slice(-1) != operator &&
            !["+", "/", "-", "*"].includes(display.innerHTML.slice(-1)) && display.innerHTML.slice(-1) != " ") {
            display.innerHTML = display.innerHTML + operator;
        }
    })
}

ac.addEventListener('click', function () {
    display.innerHTML = " ";
})

del.addEventListener('click', function () {
    display.innerHTML = display.innerHTML.slice(0, -1)
})

calc.addEventListener('click', function () {
    display.innerHTML = eval(display.innerHTML);
})