const getAllBtns = document.querySelector(".myFave")
getAllBtns.style.backgroundColor = "yellow";
getAllBtns.style.width = "60px";


const changePlaceBtn = document.querySelector("#place")
changePlaceBtn.style.backgroundColor = "yellow";
changePlaceBtn.style.width = "60px";


const changeRitualBtn = document.querySelector("#ritual")
changeRitualBtn.style.backgroundColor = "yellow"
changeRitualBtn.style.width = "60px"



function colorBtn() {
    alert("blue!")
}
let colorFav = document.querySelector("#color")
colorFav.addEventListener("click", colorBtn)

function placeBtn() {
    alert("on an adventure")
}
let placeFav = document.querySelector("#place")
placeFav.addEventListener("click", placeBtn)

function ritualBtn() {
    alert("eating")
}
let ritualFav = document.querySelector("#ritual")
ritualFav.addEventListener("click", ritualBtn)




// <button id="color">My Favorite Color</button>
// <button id="place">My Favorite Place</button>
// <button id="ritual">My Favorite Ritual</button>