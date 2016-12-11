'use strict';

class TempleHasPage extends Component{

	constructor(options) {
		super();

		this.path = options.dataUrl;//   :/eventsPhotos
	}

	renderPage() {
		this._templeHasPageActive();

		this._renderImportantTempleHasContainer();
		this._renderImportantTempleHasBlocks();

		this._renderAllTempleHasNav();
		this._renderAllTempleHasInfo();
	}

	_eventsPhotosPageActive() {
		document.body.dataset.page = 'templeHasPage';
		//history -> /news
	}

	_renderImportantTempleHasContainer() {
		document.querySelector('[data-js-component="templeHas"]').insertAdjacentHTML('beforeend',this.__importantTempleHasTemplate());
	}

	_renderImportantTempleHasBlocks() {
		let ajax = ajaxService.loadJson(this.path + '/importantTempleHas/data/importantTempleHas.json')
					.then(function(items){this.__importantTempleHasBlocksTemplate(items)}.bind(this));
	}

	_renderAllTempleHasNav() {
		document.querySelector('[data-js-component="templeHas"]').insertAdjacentHTML('beforeend',this.__allTempleHasNavTemplate());
	}

	_renderAllTempleHasInfo() {
		let ajax = ajaxService.loadJson(this.path + '/allTempleHas/data/allTempleHas.json')
					.then(function(item){this.__allTempleHasInfoTemplate(item)}.bind(this));
	}

	fadeOut() {

	}

	fadeIn() {
		
	}

	__importantTempleHasTemplate() {
		let template = `	
	<div data-js-component-block="importantTempleHas" data-style-component="importantTempleHas">
		<div class="contentWidth clearFix">
			<h2 class="sectionName">При храме имеются</h2>
			<ul data-js-component-block="importantNewsContainer" class="clearFix">

			</ul>
		</div>
	</div>`;
		return template;
	}

	__importantTempleHasBlocksTemplate(items) {

		for (var i = 0; i < items.length; i++) {

			var template = `
				<li>
					<div class="templeHasImage" style="background: url(pages/templeHas/importantTempleHas/photos/`+ items[i].image +`) 
															no-repeat center center; background-size: cover;">
						<a data-button-link="`+ items[i].link +`"><h3>`+ items[i].name +`</h3></a>
					</div>
					<div class="templeHasText clearFix">
						<p>`+ items[i].text +`</p>
						<a data-button-link="`+ items[i].link +`">`+ items[i].button +`</a>
					</div>
				</li>`;

			document.querySelector('[data-js-component-block="importantNewsContainer"]').insertAdjacentHTML('beforeend',template);
		}
	}

	__allTempleHasNavTemplate() {
		let template = `
	<div data-js-component-block="allTempleHas" data-style-component="allTempleHas">
		<div data-style-component="goodDeeds" class="templeHas">
			<div class="contentWidth">
				<h2 class="subsectionName">О чем хочешь знать?</h2>
				<div class="deedsIcons">
					<figure>
						<div><img alt="" src="images/icons/littleTemple.svg"></div>
						<figcaption><span>Игунменский</span> дом</figcaption>
					</figure>
					<figure>
						<div><img alt="" src="images/icons/brownHouse.svg"></div>
						<figcaption><span>Панский</span> дом</figcaption>
					</figure>
					<figure>
						<div><img alt="" src="images/icons/wash.svg"></div>
						<figcaption><span>Построена</span> купель</figcaption>
					</figure>
					<figure>
						<div><img alt="" src="images/icons/school.svg"></div>
						<figcaption><span>Воскресная</span> школа</figcaption>
					</figure>
					<figure>
						<div><img alt="" src="images/icons/fire.svg"></div>
						<figcaption><span>Кательная для</span> домов</figcaption>
					</figure>
					<figure>
						<div><img alt="" src="images/icons/laundry.svg"></div>
						<figcaption><span>Банно-прачечный</span> дом</figcaption>
					</figure>
					<figure>
						<div><img alt="" src="images/icons/shelter.svg"></div>
						<figcaption><span>Дом для</span> сирот</figcaption>
					</figure>
				</div>
			</div>
		</div>
		<div data-js-component-block="aboutTempleDeed" data-style-component="aboutTempleDeed">

		</div>
	</div>`;
		return template;
	}
	__allTempleHasInfoTemplate(item) {

		for (var i = 0; i < item.length; i++) {
			var template = `
			<div class="contentWidth">
				<div class="row">
					<div class="images" style="background: url(pages/templeHas/allTempleHas/photos/`+ item[i].image1 +`) 
															no-repeat center center; background-size: cover;"></div>
					<div class="blockText">
						<div>
							<h2 class="sectionName">`+ item[i].name +`</h2>
							<p class="subsectionName">`+ item[i].type +`</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="images" style="background: url(pages/templeHas/allTempleHas/photos/`+ item[i].image2 +`) 
															no-repeat center center; background-size: cover;"></div>
					<div class="blockText">
						<div>
							<p>`+ item[i].text2 +`</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="images" style="background: url(pages/templeHas/allTempleHas/photos/`+ item[i].image3 +`) 
															no-repeat center center; background-size: cover;"></div>
					<div class="blockText">
						<div>
							`+ item[i].text3 +`
						</div>
					</div>
				</div>
				<div class="row">
					<div class="images" style="background: url(pages/templeHas/allTempleHas/photos/`+ item[i].image4 +`) 
															no-repeat center center; background-size: cover;"></div>
					<div class="blockText">
						<div>
							`+ item[i].text4 +`
						</div>
					</div>
				</div>
				<div class="row">
					<div class="images" style="background: url(pages/templeHas/allTempleHas/photos/`+ item[i].image5 +`) 
															no-repeat center center; background-size: cover;"></div>
					<div class="blockText">
						<div>
							`+ item[i].text5 +`
						</div>
					</div>
				</div>
			</div>`;
			document.querySelector('[data-js-component-block="aboutTempleDeed"]').insertAdjacentHTML('beforeend',template);
		}
	}
}





















