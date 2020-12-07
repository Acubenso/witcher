// клас для створення карточок з серіями
class CreateSeriesCards {
	constructor(baseContainerId) {
		this.baseContainer = document.getElementById(baseContainerId);

		if (this.baseContainer == null) {
			console.error(`base container => ${this.baseContainer}`)
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

		let seriesWrapper = document.createElement('div');
		seriesWrapper.innerHTML = `
			<p>Серія #1</p>
			<p>Початок кінця</p>
			<iframe src="./video/season_1_series_1.mp4" width="164" height="113" scrolling="no" allow="autoplay; fullscreen"></iframe>
		`;

		this.baseContainer.appendChild(seriesWrapper);
	}
}

let createSeriesCards = new CreateSeriesCards('series-container');



// console.log("Hello");



// const trailer = document.querySelector('.btn-play');

// function playTrailer(){
// 	trailer.addEventListener('click', () => {
// 		let createVideoTag = document.createElemet('div');
// 		createVideoTag.innerHTML = "<video src="../video/trailer.mp4"></video>";	 
// 	});
// 	return createVideoTag; 
// }	
