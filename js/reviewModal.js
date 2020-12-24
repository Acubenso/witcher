const reviewBtn = document.querySelector('#reviewBtn');
const reviewModal = document.querySelector('#reviewModal');
const reviewModalClose = document.querySelector('.reviewModalClose');


reviewBtn.onclick = function() {
	reviewModal.style.display = 'block';
};


reviewModalClose.onclick = function() {
	reviewModal.style.display = 'none';
};

	
document.addEventListener('keydown', function(event) {
  if(event.keyCode === 27){
  	reviewModal.style.display = 'none';
  }
});	



window.onclick = function(e) {
	if(e.target == reviewModal) {
		reviewModal.style.display = 'none';
	}
}
