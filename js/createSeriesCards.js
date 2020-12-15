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
                    const seriesCloseJS = document.querySelector('.seriesClose');
                    console.log(modal);
                    console.log(iframe);

                    seriesWrapper.addEventListener('click', () => {
                        modal.style.display = 'block';
                        iframe.setAttribute('src', el.iframeSrc);
                    });


                    seriesCloseJS.onclick = function() {
                        modal.style.display = 'none';
                    }

                    window.onclick = function() {
                        if (event.target == modal) {
                            modal.style.display = 'none';
                        }
                    }


                    
                        this.baseContainer.appendChild(seriesWrapper);
                    });

                }
            }

            let createSeriesCards = new CreateSeriesCards('seriesContainer');