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
				background: url('${el.image}') no-repeat;
				background-position: center;
			`;

			seriesWrapper.innerHTML = `
					<p class="series-count">Серія #${el.episode}</p>
					<p class="series-name">${el.seriesName}</p>
			`;

			// event click на карточку із серією
			seriesWrapper.addEventListener('click', () => {
				console.log(`click на серію #${el.episode} ${el.seriesName}, відкрити модалку і передати туди iframe з src="${el.iframeSrc}"`);
			});

			this.baseContainer.appendChild(seriesWrapper);
		});
		
		// <p>Серія #1</p>
		// <p>Початок кінця</p>
		// <img src="./img/card-image.jpg">

		// <p>Серія #2</p>
		// <p>Чотири знаки</p>
		// <img src="./img/card-image2x.jpg">

		// <p>Серія #3</p>
		// 			<p>Зняти маски</p>
		// 			<img src="./img/card-image3x.jpg">
	
		// <p>Серія #4</p>
		// 			<p>Розслідування</p>
		// 			<img src="./img/card-image4x.jpg">

	}
}

let createSeriesCards = new CreateSeriesCards('seriesContainer');




