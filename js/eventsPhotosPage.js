'use strict';

class EventsPhotosPage extends Component{

	constructor(options) {
		super();

		this.path = options.dataUrl;//   :/eventsPhotos
	}

	renderPage() {
		this._eventsPhotosPageActive();
		this._renderEventsPhotosContainer();

		this._renderLastEventBlock();
		this._renderLastEventCollage();

		this._renderAllEventsBlock();
		this._renderAllEventsCollages();
	}

	_eventsPhotosPageActive() {
		document.body.dataset.page = 'eventsPhotoPage';
		//history -> /news
	}

	_renderEventsPhotosContainer() {
		document.querySelector('[data-js-component="eventsPhotos"]').innerHTML = this.__eventsPhotosTemplate();
	}

	_renderLastEventBlock() {
		document.querySelector('[data-js-component-block="lastEvent"]').innerHTML = this.__lastEventBlockTemplate();
	}

	_renderLastEventCollage() {
		let ajax = ajaxService.loadJson(this.path + '/lastEvent/data/lastEventCollage.json')
					.then(function(photos){this.__lastEventPhotosTemplate(photos)}.bind(this));
	}




	_renderAllEventsBlock() {
		document.querySelector('[data-js-component-block="allEvents"]').innerHTML = this.__allEventsBlockTemplate();
	}

	_renderAllEventsCollages() {
		let ajax = ajaxService.loadJson(this.path + '/allEvents/data/allEvents.json')
					.then(function(photos){this.__allEventsCollagesTemplate(photos)}.bind(this));
	}

	fadeOut() {

	}

	fadeIn() {
		
	}

	__eventsPhotosTemplate() {
		let template = `	
	<div data-js-component-container="eventsPhotos" class="contentWidth">
		<div data-js-component-block="lastEvent">

		</div>
		<div data-js-component-block="allEvents">
			
		</div>
	</div>`;
		return template;
	}

	__lastEventBlockTemplate() {
		let template = `
			<h2 class="sectionName">Прошедшое событие в фотографиях</h2>
			<div class="lastEventCollage clearFix">

			</div>`;
		return template;
	}
	__lastEventPhotosTemplate(photos) {

		for (var i = 0; i < photos.length; i++) {

			var template = `
				<div class="collagePhoto block`+ (i+1) +`" style="background: url(pages/eventsPhotos/lastEvent/data/photos/`+ photos[i].image +`) 
															no-repeat center center; background-size: cover;"></div>`;

			document.querySelector('.lastEventCollage').insertAdjacentHTML('beforeend',template);
		}

		var buttonAllPhotos = `<a class="otherEventsPhotos">Другие события</a>`;

		document.querySelector('.lastEventCollage').insertAdjacentHTML('beforeend',buttonAllPhotos);
	}

	__allEventsBlockTemplate() {
		let template = `
		<div data-js-component="allEventsPhotos" class="allEventsPhotos">
			<h2 class="sectionName">Предыдущие события</h2>

		</div>`;
		return template;
	}
	__allEventsCollagesTemplate(photos) {

		for (var i = 0; i < photos.length; i++) {
			var template = `
			<section class="previousEvent">
				<h3 class="subsectionName">`+ photos[i].name +`</h3>
				<div class="eventCollage">
					<div class="firstColumn">
						<div class="collagePhoto block1" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image1 +`) 
															no-repeat center center; background-size: cover;"></div>
						<div class="collagePhoto block2" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image2 +`) 
															no-repeat center center; background-size: cover;"></div>
						<div class="collagePhoto block3" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image3 +`) 
															no-repeat center center; background-size: cover;"></div>
						<div class="collagePhoto block4" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image4 +`) 
															no-repeat center center; background-size: cover;"></div>
					</div>
					<div class="divider"></div>
					<div class="secondColumn">
						<time>`+ photos[i].date +`</time>
						<div class="collagePhoto block1" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image5 +`) 
															no-repeat center center; background-size: cover;"></div>
						<div class="collagePhoto block2" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image6 +`) 
															no-repeat center center; background-size: cover;"></div>
						<div class="collagePhoto block3" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image7 +`) 
															no-repeat center center; background-size: cover;"></div>
						<div class="collagePhoto block4" style="background: url(pages/eventsPhotos/allEvents/data/photos/`+ photos[i].image8 +`) 
															no-repeat center center; background-size: cover;"></div>
					</div>
				</div>
				<!--<a class="allEventPhotos" href="">Все фото события</a>-->
			</section>`;
			document.querySelector('[data-js-component="allEventsPhotos"]').insertAdjacentHTML('beforeend',template);
		}
	}
}





















