'use strict';

class CalendarPage extends Component{

	constructor(options) {
		super();

		this.path = options.dataUrl;//   :/eventsPhotos
		this.today = new Date();
	}

	renderPage() {
		this._calendarPageActive();

		this._renderUpcomingEvent();
		this._renderOtherUpcomingEvents();

		this._renderCalendarTableBlock();
		this._renderCalendarTableNav();
		this._renderCalendarTableCells();
	}

	_calendarPageActive() {
		document.body.dataset.page = 'calendarPage';
		//history -> /news
	}

	_renderUpcomingEvent() {
		let ajax = ajaxService.loadJson(this.path + '/upcomingEvent/data/upcomingEvent.json')
					.then(function(item){this.__upcomingEventTemplate(item)}.bind(this));
	}

	_renderOtherUpcomingEvents() {
		let ajax = ajaxService.loadJson(this.path + '/otherUpcomingEvents/data/otherUpcomingEvents.json')
					.then(function(items){this.__otherUpcomingEventsTemplate(items)}.bind(this));
	}

	_renderCalendarTableBlock() {
		document.querySelector('[data-js-component-block="calendarTable"]').insertAdjacentHTML('beforeend',this.__calendarTableBlockTemplate());
	}

	_renderCalendarTableNav(){
		document.querySelector('.calendarTable_container_nav').insertAdjacentHTML('beforeend',this.__calendarTableNavTemplate());
	}

	_renderCalendarTableCells() {
		let ajax = ajaxService.loadJson(this.path + '/otherUpcomingEvents/data/otherUpcomingEvents.json')
					.then(function(item){this.__calendarTableCellsTemplate(item)}.bind(this));
	}

	fadeOut() {

	}

	fadeIn() {
		
	}

	__upcomingEventTemplate(upcomEvent) {
		upcomEvent = upcomEvent[0];
		let date = this.__dateParse(upcomEvent.date);
		let template = `	
				<article>
					<header>
						<h3>Ближайший праздник</h3>
					</header>
					<h4>`+ upcomEvent.name +`</h4>
					<div class="eventInfo">
						<p class="upcomingEvent-text">`+ upcomEvent.text +`</p>
						<div>
							<p class="eventDate">`+ date +`</p>
							<a href="" class="eventDetail">`+ upcomEvent.button +`</a>
						</div>
					</div>
				</article>`;

		document.querySelector('.upcomingEvent').insertAdjacentHTML('beforeend',template);
	}

	__otherUpcomingEventsTemplate(items) {

		for (var i = 0; i < items.length; i++) {

			var template = `
				<h3 class="subsectionName">События далее</h3>
				<figure>
					<div>
						<span class="otherEvents_BG"></span>
						<span class="otherEvents_text">
							<h4>Масленица</h4>
							<p>6 декабря</p>
						</span>
					</div>
				</figure>
				<figure>
					<div>
						<span class="otherEvents_BG"></span>
						<span class="otherEvents_text">
							<h4>День Купалы</h4>
							<p>25 декабря</p>
						</span>
					</div>
				</figure>
				<figure>
					<div>
						<span class="otherEvents_BG"></span>
						<span class="otherEvents_text">
							<h4>День Марии Богославны</h4>
							<p>4 января</p>
						</span>
					</div>
				</figure>
				<figure>
					<div>
						<span class="otherEvents_BG"></span>
						<span class="otherEvents_text">
							<h4>Праздник всех святых</h4>
							<p>8 января</p>
						</span>
					</div>
				</figure>
				<div class="otherEventsAll">
					<h4>Смотерть все праздники</h4>
					<a href="calendar.html">Перейти</a>
				</div>`;

			document.querySelector('.otherUpcomingEvents').insertAdjacentHTML('beforeend',template);
		}
	}

	__calendarTableBlockTemplate() {
		let template = `
			<section class="calendarTable_container">
				<header class="calendarTable_container_nav">

				</header>
				<div class="calendarTable_container_tableCells clearFix">

				</div>
			</section>`;

		return template;
	}

	__calendarTableNavTemplate() {
		let template = `
					<div class="prevMonth">
						<p>`+ this.__monthName(this.today.getMonth() - 1) +`</p>
						<div class="prevMonth-icon"></div>
					</div>
					<h3 class="month">`+ this.__monthName(this.today.getMonth()) +`</h3>
					<div class="nextMonth">
						<div class="nextMonth-icon"></div>
						<p>`+ this.__monthName(this.today.getMonth() + 1) +`</p>
					</div>`;
				return template;
	}
	__calendarTableCellsTemplate(item) {

		let firstDATEmonth = new Date(this.today.getFullYear(),this.today.getMonth(),1);
		let lastDATEmonth = new Date(this.today.getFullYear(),this.today.getMonth()+1,0);
		let firstDAYmonth = (firstDATEmonth.getDay() == 0) ? 7: firstDATEmonth.getDay();
		let lastDAYmonth = lastDATEmonth.getDay();
		let daysInMonth = lastDATEmonth.getDate();
		let firstDayCalendar = new Date(this.today.getFullYear(),this.today.getMonth(),2 - firstDAYmonth);
		let lastDayCalendar = new Date(this.today.getFullYear(),this.today.getMonth()+1,0 + (7 - lastDAYmonth));
		let daysInCalendar = (lastDayCalendar - firstDayCalendar)/1000/60/60/24;
		var a = 0;
		
		while(daysInCalendar >= 0) {
			daysInCalendar--;

			let generateDate = new Date(+firstDayCalendar + a);

			let blockStyle = (generateDate.getMonth() == this.today.getMonth()) ? '': 'ourMonth';

			var template = `
					<div class="tableBlock `+ blockStyle +`">
						<time>`+ generateDate.getDate() + ' ' + this.__monthName(generateDate.getMonth(),true).toLowerCase() +`</time>
						<h4>`+ '' +`</h4>
					</div>`;
		 	document.querySelector('.calendarTable_container_tableCells').insertAdjacentHTML('beforeend',template);

			a = a+1000*60*60*24;
		}
		for (var i = 0; i <= daysInCalendar; i++) {
			new Date(this.today)

		}
		// if (!item.name) item.name = '';
		// for (var i = 0; i < item.length; i++) {
		// 	var template = `
		// 			<div class="tableBlock">
		// 				<time>5 декабря</time>
		// 				<h4>`+ item.name +`</h4>
		// 			</div>`;
		// 	document.querySelector('[data-js-component-block="aboutTempleDeed"]').insertAdjacentHTML('beforeend',template);
		// }
	}

	__dateParse(date) {
		date = date.split('.');

		if (date[0] < 10) date[0] = +date[0] + []; // убираем 0 в цифрах 07

		date[1] = this.__monthName(date[1],true);
		var text = date[0] + ' ' + date[1];
		return text;
	}

	__monthName(monthNumber,allDate) {
		if (monthNumber > 11) {
			monthNumber = monthNumber % 12;
		} else 
		if (monthNumber < 0) {
			monthNumber = monthNumber % 12 + 12;
		}

		if (!allDate) {
			var month = [];
			month[0] = 'Январь';
			month[1] = 'Февраль';
			month[2] = 'Март';
			month[3] = 'Апрель';
			month[4] = 'Май';
			month[5] = 'Июнь';
			month[6] = 'Июль';
			month[7] = 'Август';
			month[8] = 'Сентябрь';
			month[9] = 'Октябрь';
			month[10] = 'Ноябрь';
			month[11] = 'Декабрь';
			return month[monthNumber];
		}



		var month = [];
		month[0] = 'Января';
		month[1] = 'Февраля';
		month[2] = 'Марта';
		month[3] = 'Апреля';
		month[4] = 'Мая';
		month[5] = 'Июня';
		month[6] = 'Июля';
		month[7] = 'Августа';
		month[8] = 'Сентября';
		month[9] = 'Октября';
		month[10] = 'Ноября';
		month[11] = 'Декабря';
		return month[monthNumber];
	}

}





















