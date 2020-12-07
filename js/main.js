console.log("Hello");



const trailer = document.querySelector('.btn-play');

function playTrailer(){
	trailer.addEventListener('click', () => {
		let createVideoTag = document.createElemet('div');
		createVideoTag.innerHTML = "<video src="../video/trailer.mp4"></video>";	 
	});
	return createVideoTag; 
}	
