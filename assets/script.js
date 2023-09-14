const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow= document.querySelector('.arrow_left');
const rightArrow= document.querySelector('.arrow_right');
const imgSlide= document.querySelector('.banner-img');
const nomBannerSlide= document.querySelector('.banner-text');
const dots= document.querySelector('.dot_selected');

let displaySlide= 0;


leftArrow.addEventListener("click", function() {

	if (displaySlide==0) {
		displaySlide=slides.length-1;
	}
	else {
		displaySlide--;
	}
	displayCaroussel(displaySlide);
})

rightArrow.addEventListener("click", function() {

	if (displaySlide==slides.length-1) {
		displaySlide=0;
	}
	else{
		displaySlide++;
	}
	displayCaroussel(displaySlide);
})

function displayCaroussel(displaySlide) {

	const element = slides[displaySlide];
	imgSlide.setAttribute("src" , "./assets/images/slideshow/"+ element.image);
	nomBannerSlide.innerHTML= element.tagLine;	
}


