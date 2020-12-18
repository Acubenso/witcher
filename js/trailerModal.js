const trailerBtn = document.querySelector('#trailerBtn');
const trailerModal = document.querySelector('#seriesModal');
const trailerModalClose = document.querySelector('.seriesModalClose');
let trailerIframe = document.querySelector('.series-iframe');


trailerBtn.onclick = function() {
    trailerIframe.setAttribute('src', 'https://www.youtube.com/embed/Y6gYaoBkFDs');
    trailerModal.style.display = 'block';
};


trailerModalClose.onclick = function() {
    trailerModal.style.display = 'none';
};


// document.addEventListener('keydown', function(event) {
//     if (event.which === 27) {
//         trailerModal.style.display = 'none';
//     }
// });