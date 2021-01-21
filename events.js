let btnEl = document.getElementById("gomb")
let imgEl = document.getElementById("kep")
let picture = false

btnEl.addEventListener("click", function () {
    if (!picture) {
        imgEl.style.display="block"
        picture = true
    } else {
        imgEl.style.display="none"
        picture = false
    }
})