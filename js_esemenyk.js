let btnEl = document.getElementById("gomb");
console.log(gomb)
/*btnEl.onclick = function () {
    console.log("Rákattintottam!")
    btnEl.onclick = null;
}*/

btnEl.addEventListener("click",greek)
btnEl.removeEventListener("click", greek)

btnEl.addEventListener("mouseenter",greek)
btnEl.removeEventListener("mouseenter", greek)


btnEl.addEventListener("mouseover",greek)
btnEl.removeEventListener("mouseover", greek)


function greek(){
    console.log("Rákattintottam");
}