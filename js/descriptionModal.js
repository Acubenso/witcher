const descriptionBtn = document.querySelector('#descriptionBtn');
const descriptionModal = document.querySelector('.description-modal');
const descriptionModalClose = document.querySelector('.descriptionModalClose');


descriptionBtn.onclick = function(){
	descriptionModal.style.display = 'block';
};

descriptionModalClose.onclick = function(){
	descriptionModal.style.display = 'none';
};	

// window.onclick = function(e){
// 	if(e.target == descriptionModal){
// 		descriptionModal.style.display = 'none';
// 	}
// }

document.addEventListener('keydown', function(event) {
  if(event.keyCode === 27){
  	descriptionModal.style.display = 'none';
  }
});
