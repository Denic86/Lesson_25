// Custom Scripts
// Custom scripts
//Burger
let burger = document.querySelector('.header__burger');
let headerMenu = document.querySelector('.header__menu')
burger.addEventListener('click', openMenu);
function openMenu() {
	headerMenu.classList.toggle ("-active");
	burger.classList.toggle ("-active");
};
// slider_1
const swiper_1 = new Swiper('.slide-product__swiper', {

	// If we need pagination

	// Navigation arrows
	navigation: {
		nextEl: '.slide-product__button_next',
		prevEl: '.slide-product__button_prev',
	},
	slidesPerView: 1,
	// And if we need scrollbar

	//   // Responsive breakpoints
	//   breakpoints: {
	//   // when window width is >= 320px
	//   320: {
	//     slidesPerView: 3,
	//     spaceBetween: 20
	//   },
	//   // when window width is >= 480px
	//   480: {
	//     slidesPerView: 3,
	//     spaceBetween: 30
	//   },
	// }
}); 

// foooter
let spanClick = document.querySelectorAll('.body-footer__box .body-footer__span');
console.log(spanClick);
let list = document.querySelectorAll('.body-footer__box .body-footer__list');
console.log(list);
// spanClick.forEach((element) => {
// 	element.addEventListener("click", function () {
// 		element.nextElementSibling.classList.toggle('-active');
// 	});
// });
for (let i = 0; i < spanClick.length; i++) {
	spanClick[i].addEventListener("click", function() {
		list[i].classList.toggle('-active');
		console.log(i)
	});
};
