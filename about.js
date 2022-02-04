console.log("hello world");

let form = document.querySelector('form#contact');

function handleSubmit(evt) {
evt.preventDefault();
// console.log('form submit');
alert("Your form has been submitted successfully")
}

form.addEventListener('submit', handleSubmit);

function picAlert() {
	alert("great job!")
}
let picture = document.querySelector("#pic")
picture.addEventListener("mouseover", picAlert)

