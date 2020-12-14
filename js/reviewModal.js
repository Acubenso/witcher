const modal = document.querySelector('#myModal');
const btn = document.querySelector('#myBtn');
const span = document.querySelector('.close');


btn.onclick = function() {
	modal.style.display = 'block';
}

span.onclick = function() {
	modal.style.display = 'none';
}

window.onclick = function() {
	if(event.target == modal) {
		modal.style.display = 'none';
	}
}