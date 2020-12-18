const trailerBtnRight = document.querySelector('.btn-play-wrapp');

const trailerModalRight = document.querySelector('#seriesModal');
const trailerModalCloseRight = document.querySelector('.seriesModalClose');
let trailerIframeRight = document.querySelector('.series-iframe');


trailerBtnRight.onclick = function() {
    trailerIframe.setAttribute('src', 'https://www.youtube.com/embed/Y6gYaoBkFDs');
    trailerModalRight.style.display = 'block';
};


trailerModalCloseRight.onclick = function() {
    trailerModalRight.style.display = 'none';
};

document.addEventListener('keydown', function(event) {
    if (event.which === 27) {
        trailerModal.style.display = 'none';
    	trailerIframe.setAttribute('src', null);
    }
});

