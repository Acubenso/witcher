const reviewBtn = document.querySelector('#reviewBtn');
let reviewModal = document.querySelector('#reviewModal');
let reviewModalContent = document.querySelector('.reviewModal-content');
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


window.addEventListener('click', function(event) {
  if(event.target === reviewModal && event.target !== reviewModalContent){
  	reviewModal.style.display = 'none';
  }
});

