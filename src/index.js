// import './styles.scss';
import './js/common.js';
// import './css/main.css';
import './scss/main.scss';
// import './libs/bootstrap/bootstrap';

$(document).ready(function() {
	// анимация перехода по id
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),
		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});	

});

