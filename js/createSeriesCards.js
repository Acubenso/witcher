// клас для створення карточок з серіями
class CreateSeriesCards {
    constructor(baseContainerId) {
        this.baseContainer = document.getElementById(baseContainerId);

        if (this.baseContainer == null) {
            console.error(`base container => ${this.baseContainer}`);
        } else {
            // якщо контейнер знайдено, то ми його чистимо перед тим, як заповнити даними
            while (this.baseContainer.firstChild) {
                this.baseContainer.removeChild(this.baseContainer.firstChild);
            }
        }

        this.init();
    }

    init() {
        this.renderCards();
    }

    renderCards() {
        console.log('seriesData => ', seriesData);
        //обробляємо отримані дані і рендеримо карточки серій
        seriesData.forEach(el => {
            let seriesWrapper = document.createElement('div');

            seriesWrapper.classList.add('series-wrapper');
            seriesWrapper.style.cssText = `
                background: url('${el.image}')no-repeat;
                background-position: center;
            `;

            seriesWrapper.innerHTML = `
                <p class="series-count">Серія#${el.episode}</p>
                <p class="series-name">${el.seriesName}</p>
            `;

            let modal = document.querySelector('#seriesModal');
            let iframe = document.querySelector('.series-iframe');
            const seriesModalClose = document.querySelector('.seriesModalClose');


            seriesWrapper.addEventListener('click', () => {
                iframe.setAttribute('src', el.iframeSrc);
                modal.style.display = 'block';
            });


            seriesModalClose.onclick = function() {
                if (modal.style.display = 'none') {
                    iframe.setAttribute('src', null);
                }
            }

            window.onclick = function() {
                if (event.target == modal) {
                    if (modal.style.display = 'none') {
                        iframe.setAttribute('src', null);
                    }
                }

            }

            // document.addEventListener('keydown', function(event) {
            //     if (event.which === 27) {
            //         modal.style.display = 'none';
            //         iframe.setAttribute('src', null);
            //     }
            // });

            this.baseContainer.appendChild(seriesWrapper);
        });

    }
}

let createSeriesCards = new CreateSeriesCards('seriesContainer');




// ================ Change header background color during skrolling window ======
let quantity = document.querySelector('.quantity');
let headerSkroll = document.querySelector('.header');
let scrollQuantity = window.scrollY;

window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY >= 100) {
        headerSkroll.style.backgroundColor = '#141218';
    } else {
        headerSkroll.style.backgroundColor = '';
    }
});


let scrollToTop = document.querySelector('.legal');

scrollToTop.addEventListener('click', (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 1,
      behavior: 'smooth',
    })
});


