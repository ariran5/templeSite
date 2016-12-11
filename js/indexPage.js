'use strict';

class IndexPage extends Component{

	constructor(options) {
		super();
		this.NewsPage = options.NewsPage;
		this.EventsPhotosPage = options.EventsPhotosPage;
		this.TempleHas = options.TempleHas;
		this.Calendar = options.Calendar;
		// this.AboutFather = options.AboutFather;
		this.GoodDeeds = options.GoodDeeds;
		// this.Good = options.Goo;
	}


	renderPage() {
		this._indexPageActive();
		this._renderNews();
		this._renderLastEventPhotos();
		this._renderTempleHas();
		this._renderCalendar();
		// this._renderAboutFather();
		// this._renderGoodDeeds();
		// this._renderGood();
	}

	_indexPageActive() {
		document.body.dataset.page = 'IndexPage';
	}

	_renderNews() {
		this.NewsPage._renderNewsContainer();
		this.NewsPage._renderImportantNews();
		this.NewsPage._renderAllNews();
		this.NewsPage._renderAllNewsButton();
	}

	_renderLastEventPhotos() {
		this.EventsPhotosPage._renderEventsPhotosContainer();
		this.EventsPhotosPage._renderLastEventBlock();
		this.EventsPhotosPage._renderLastEventCollage();
		this.EventsPhotosPage._renderAllEventsBlock();
		this.EventsPhotosPage._renderAllEventsCollages();
	}

	_renderTempleHas() {
		this.TempleHas._renderImportantTempleHasContainer();
		this.TempleHas._renderImportantTempleHasBlocks();
		this.TempleHas._renderAllTempleHasNav();
		this.TempleHas._renderAllTempleHasInfo();
	}

	_renderCalendar() {
		this.Calendar._renderUpcomingEvent();
		this.Calendar._renderOtherUpcomingEvents();

		this.Calendar._renderCalendarTableBlock();
		this.Calendar._renderCalendarTableNav();
		this.Calendar._renderCalendarTableCells();
	}
	// __btnPageTransition(e) {
	// 	let elem = e.target;
	// 	let button = elem.closest('a');
	
	// 	if (!button.dataset.linkInfo) {
	// 		return;
	// 	}
		
	// 	e.preventDefault();
	
	// 	let page = button.dataset.linkInfo;
	// 	let url = '/temple/templates' + page +'.json';
	
	// 	ajaxService.loadJson(url);
	
	
	// }

	fadeOut() {

	}

	fadeIn() {

	}


}




