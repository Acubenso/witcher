const myModal = document.querySelector('#myModal');
const btn = document.querySelector('#myBtn');
const span = document.querySelector('.close');


btn.onclick = function() {
	myModal.style.display = 'block';
}

span.onclick = function() {
	myModal.style.display = 'none';
}

window.onclick = function() {
	if(event.target == myModal) {
		myModal.style.display = 'none';
	}
}