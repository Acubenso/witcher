const descriptionBtn = document.querySelector('#descriptionBtn');
const descriptionModal = document.querySelector('.description-modal');
const descriptionModalClose = document.querySelector('.descriptionModalClose');

const dsct = document.querySelector('.descriptionModal-title');



descriptionBtn.onclick = function(){
	descriptionModal.style.display = 'block';
	console.log(dsct);
};


descriptionModalClose.onclick = function(){
	descriptionModal.style.display = 'none';
}


	
document.addEventListener('keydown', function(event) {
  if(event.which === 27){
  	descriptionModal.style.display = 'none';
  }
});	


window.onclick = function(e){
	if(e.target == descriptionModal){
		descriptionModal.style.display = 'none';
	}
}
