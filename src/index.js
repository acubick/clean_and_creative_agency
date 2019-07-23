// import './styles.scss';
import './js/common.js';
// import './css/main.css';
import '../node_modules/slick-carousel/slick/slick.scss';
import '../node_modules/slick-carousel/slick/slick.js';
import './scss/main.scss';
// import './libs/bootstrap/bootstrap';

$( document ).ready( function () {
	
	
	var headerH = $( '.header' ).height(), scrollPos = $( window ).scrollTop(), navH = $( '.navigation' ).innerHeight();
	
	checkScroll( scrollPos, headerH );
	$( document ).on( 'scroll', onScroll );
	
	/* Fixed header when scroll
====================================*/
	
	
	$( window ).on( 'scroll resize', function () {
		
		// headerH   = headerH.height();
		scrollPos = $( this ).scrollTop();
		checkScroll( scrollPos, headerH );
		
	} );
	
	function checkScroll( scrollPos, headerH ) {
		if ( scrollPos > headerH ) {
			$( '.navigation' ).addClass( 'fixed' );
			
			$( '.header' ).css( {
				                    'paddingTop': navH
			                    } );
		}
		else {
			$( '.navigation' ).removeClass( 'fixed' );
			$( '.header' ).removeAttr( 'style' );
		}
	}
	
	// анимация перехода по id
	$( '#nav a' ).on( 'click', function ( event ) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();
		//забираем идентификатор блока с атрибута href
		let id      = $( this ).attr( 'href' ),
		    scrollPos = $( document ).scrollTop(),
		    lenth   = $( id ).offset().top - ( navH - 55),
		    distance = lenth - scrollPos,
		    time = 300,
		    count = Math.abs(distance / 1000);
		     
		//  console.log('lenth :', lenth );
		// console.log('scrollPos:', scrollPos);
		// console.log( 'distance / 1000: ', distance / 1000 );
		
		time *= parseInt(count);
		if(time < 500){
			time += 700;
		}
		
		// console.log( 'count: ', parseInt(count) );
		// console.log( 'time: ', time );
		//анимируем переход на расстояние - top за 1000 мс
		$( 'body,html' ).animate( { scrollTop: lenth }, time );
		$( '.nav-toggle, #nav' ).removeClass( 'active' );
	} );
	
	
	/* Slider */
	
	$( '.slider__slick' ).slick();
	
	
	/* Menu nav toggle burger*/
	
	$('#nav_toggle').on('click', function (event) {
		event.preventDefault();

		$(this).toggleClass('active');
		$('#nav').toggleClass('active');
	});
	
	
	// подсветка пункта меню, в зависимости от текущего местоположения на странице
	$( document ).on( 'scroll', onScroll );
	
	function onScroll( event ) {
		let scrollPos = $( document ).scrollTop();
		$( '#nav a' ).each( function () {
			let currLink = $( this ), refElement = $( currLink.attr( 'href' ) );
			if ( refElement.position().top <= (
				scrollPos + navH
			) && refElement.position().top + refElement.height() > (
				     scrollPos + navH
			     ) ) {
				$( '#nav ul li a' ).removeClass( 'active' );
				currLink.addClass( 'active' );
			}
			else {
				currLink.removeClass( 'active' );
			}
		} );
	}
} );
