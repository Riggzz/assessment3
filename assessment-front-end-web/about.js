console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully');
}

let compliment = document.querySelector('img');
compliment.addEventListener('mouseover', () => {
	alert('you look great today')
})


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);