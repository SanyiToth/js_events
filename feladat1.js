//1
let btnEl = document.getElementById("gomb");

btnEl.addEventListener("click", function () {
    document.getElementById("gomb").innerHTML = "Hello world!";
})


//2
let spamEl = document.getElementById("proba")
spamEl.addEventListener("mouseover", function () {
    spamEl.innerHTML = "Mouseover span"
})

//3
count = 0
btnEl.addEventListener("click", function () {
    count += 1
    btnEl.innerHTML = count
})

//4
let picVisibility = false

let spamEl2 = document.getElementById("picture")
spamEl2.addEventListener("dblclick", function () {
    if (!picVisibility) {
        document.getElementById("kep").style.display = "flex"
        picVisibility = true
    } else {
        document.getElementById("kep").style.display = "none"
        picVisibility = false
    }
})
