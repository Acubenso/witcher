const descriptionBtn = document.querySelector('#descriptionBtn');
const descriptionModal = document.querySelector('.description-modal');
const descriptionModalContent = document.querySelector('.descriptionModal-content');
const descriptionModalClose = document.querySelector('.descriptionModalClose');


descriptionBtn.onclick = function(){
	descriptionModal.style.display = 'block';
};

descriptionModalClose.onclick = function(){
	descriptionModal.style.display = 'none';
};	

window.addEventListener('click', function(event) {
  if(event.target === descriptionModal && event.target !== descriptionModalContent){
  	descriptionModal.style.display = 'none';
  }
});

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 27){
  	descriptionModal.style.display = 'none';
  }
});
