'use strict';

class NewsPage extends Component{

	constructor(options) {
		super();

		this.path = options.dataUrl;//   :/news
	}

	renderPage() {
		this._newsPageActive();
		this._renderNewsContainer();
		this._renderImportantNews();
		this._renderAllNews();
		this._renderMoreNewsButton();
	}

	_newsPageActive() {
		document.body.dataset.page = 'NewsPage';
		//history -> /news
	}

	_renderNewsContainer() {
		document.querySelector('[data-js-component="news"]').innerHTML = this.__newsContainerTemplate();
	}

	_renderImportantNews() {
		let ajax = ajaxService.loadJson(this.path + '/data/importantNews.json')
					.then(function(items){this.__importantNewsTemplate(items)}.bind(this));
	}

	_renderAllNews() {
		let ajax = ajaxService.loadJson(this.path + '/data/allNews.json')
					.then(function(items){this.__allNewsTemplate(items)}.bind(this));
	}

	_renderMoreNewsButton() {
		if (document.querySelector('[data-element="moreNews-button"]')) {
			return;
		}
				
		if (document.querySelector('[data-element="allNews-button"]')) {
			function modificateButton() {

			}
		} else {
			document.querySelector('.allNewsCTA').innerHTML = this.__moreNewsButtonTemplate();
		}
	}

	_renderAllNewsButton() {
		if (document.querySelector('[data-element="allNews-button"]')) {
			return;
		}

		if (document.querySelector('[data-element="moreNews-button"]')) {
			function modificateButton() {

			}
		} else {
			document.querySelector('.allNewsCTA').innerHTML = this.__allNewsButtonTemplate();
		}
	}

	fadeOut() {

	}

	fadeIn() {
		
	}

	__newsContainerTemplate() {
		let template = `	
		<div class="contentWidth">
			<h2 class="sectionName">Важные новости</h2>
			<div data-js-component-block="importantBlocks" data-style-component="importantNewsContainer" class="clearFix">
	
			</div>
			<div class="allNewsCTA">

			</div>
		</div>`;
		return template;
	}
	__importantNewsTemplate(items) {

		for (var i = 0; i < items.length; i++) {
			var template = `
				<article>
					<div><img src="images/icons/`+ items[i].icon +`"></div>
					<header>
						<h3>`+ items[i].name +`</h3>
					</header>
					<p>`+ items[i].text +`</p>
				</article>`;

			document.querySelector('[data-js-component-block="importantBlocks"]').insertAdjacentHTML('beforeend',template);
		}
	}
	__allNewsTemplate(items) {
		var allNewsContainer = `		
		<div data-js-component="allNews" data-style-component="allNews" class="contentWidth">
			<h2 class="sectionName">Все новости храма</h2>
			<div data-style-component="allNewsBlocks">
			</div>
		</div>`;
		document.querySelector('[data-js-component-block="importantBlocks"]').insertAdjacentHTML('afterend',allNewsContainer);

		for (var i = 0; i < items.length; i++) {
			var template = `
				<article>
					<div class="content">
						<h3>`+ items[i].name +`</h3>
						<time>`+ items[i].date +`</time>
						<p class="text">`+ items[i].text +`</p>
					</div>
					<div class="postImage"></div>
				</article>`;
			document.querySelector('[data-style-component="allNewsBlocks"]').insertAdjacentHTML('beforeend',template);
		}
	}
	__moreNewsButtonTemplate() {
		let template = `
			<a class="allNewsCTA-Button">Ещё</a>`;
	}
	__allNewsButtonTemplate() {
		let template = `
			<p>Все новости храма</p>
			<a class="allNewsCTA-Button">Читать</a>`;
		return template;
	}
}





















