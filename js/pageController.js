'use strict';


class pageController{

	constructor(options) {
		this.el = options.element;

		//this.el.addEventListener('click',__btnPageTransition);
		

		
		this.NewsPage = new NewsPage({
			dataUrl:'/pages/news'//,
		});

		this.EventsPhotosPage = new EventsPhotosPage({
			dataUrl:'/pages/eventsPhotos'
		});

		this.TempleHas = new TempleHasPage({
			dataUrl:'/pages/templeHas'
		});

		this.Calendar = new CalendarPage({
			dataUrl:'/pages/calendar'
		});

		// this.AboutFather = new AboutFatherPage({
		// 	dataUrl:'/pages/aboutFather'
		// });

		// this.GoodDeeds = new GoodDeedsPage({
		// 	dataUrl:'/pages/goodDeeds'
		// });

		// this.Good = new GoodPage({
		// 	dataUrl:'/pages/temple'
		// });

		this.IndexPage = new IndexPage({
			NewsPage: this.NewsPage,
			EventsPhotosPage: this.EventsPhotosPage,
			TempleHas: this.TempleHas,
			Calendar: this.Calendar//,
			// AboutFather: this.AboutFather,
			// GoodDeeds: this.GoodDeeds,
			// Good: this.Good
		});

		let historyAPI = true;
		if (historyAPI) {
			this.IndexPage.renderPage();
		}
	}

	__btnPageTransition(e) {
		let elem = e.target;
		let button = elem.closest('a');
	
		if (!button.dataset.linkInfo) {
			return;
		}
		
		e.preventDefault();
	
		let page = button.dataset.linkInfo;
		let url = '/temple/templates' + page +'.json';
	
		ajaxService.loadJson(url);
	
	
	}

}

new pageController({
	element: document.body
});


