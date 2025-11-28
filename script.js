let h1 = document.querySelector("h1");
let Increase = document.querySelector(".Increase");
let Decrease = document.querySelector(".Decrease");
let Reset = document.querySelector(".Reset");

let counter = 0;
let stop = 1

Increase.addEventListener("click", () => {
    counter++;
    h1.innerHTML = counter;
})

Decrease.addEventListener("click", () => {
    if (counter <= 0) {
        counter = 1
    }
    else {
        counter--
        h1.innerHTML = counter;
    }
})
Reset.addEventListener("click", () => {
    counter = 0
    h1.innerHTML = counter;
})