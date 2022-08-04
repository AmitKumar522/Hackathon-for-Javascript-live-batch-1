$(document).ready(function () {
    $(".customer-logos").slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });
  });
  const carouselSlideCompany2 = document.querySelector(".slides-company2");
const carouselImagesCompany2 = document.querySelectorAll(".slides-company2 img");

console.log(carouselImagesCompany2);
const prevBtnCompany2 = document.querySelector('#prevBtnCompany2');
const nextBtnCompany2 = document.querySelector('#nextBtnCompany2');

var companySize2 = carouselImagesCompany2[0].clientWidth;
// console.log(companySize2);
var companyCounter2 = 1;

carouselSlideCompany2.style.transform = `translateX(-${companyCounter2 * companySize2 +80}px)`;



nextBtnCompany2.addEventListener('click',() =>{
    if(companyCounter2 >= carouselImagesCompany2.length) return;
    carouselSlideCompany2.style.transition =  `transform 0.4s ease-in-out`;
    companySize2 = carouselImagesCompany2[companyCounter2].clientWidth;
    // console.log(counter+"next");
    companyCounter2++; 
    carouselSlideCompany2.style.transform = `translateX(${(-companyCounter2 * companySize2)-80}px)`;
})
prevBtnCompany2.addEventListener('click',() =>{
    if(companyCounter2 <= 0) return;
    carouselSlideCompany2.style.transition =  `transform 0.4s ease-in-out`;
    companySize2 = carouselImagesCompany2[companyCounter2].clientWidth;
    companyCounter2--;
    carouselSlideCompany2.style.transform = `translateX(${(-companyCounter2 * companySize2)-40}px)`;
})

carouselSlideCompany2.addEventListener('transitionend',()=>{
    if(carouselImagesCompany2[companyCounter2].id === 'lastCloneCompany2'){
        carouselSlideCompany2.style.transition =  `none`;
        companyCounter2 = carouselImagesCompany2.length - 2-1;
        carouselSlideCompany2.style.transform = `translateX(${-companyCounter2 * companySize2 + 80}px)`;
    }
    if(carouselImagesCompany2[companyCounter2+2].id === 'firstCloneCompany2'){
        carouselSlideCompany2.style.transition =  `none`;
        companyCounter2 = carouselImagesCompany2.length - companyCounter2 - 2 ;
        carouselSlideCompany2.style.transform = `translateX(${-companyCounter2 * companySize2}px)`;
    }
})

// setInterval(function(){
//     nextBtnCompany2.click();
//     },
// 3000);






// -------------------------



const carouselSlide4 = document.querySelector('.slideshow-container4');
const carouselImages4 = document.querySelectorAll('.teacher');

const prevBtn4 = document.querySelector('#prevBtn4');
const nextBtn4 = document.querySelector('#nextBtn4');


let counter4 = 1;

var size4 = carouselImages4[0].clientWidth; 

carouselSlide4.style.transform = `translateX(-${counter4 * size4 + 60}px)`;

// Button Listner

nextBtn4.addEventListener('click',() =>{
    if(counter4 >= carouselImages4.length-1) return;
    carouselSlide4.style.transition =  `transform 0.4s ease-in-out`;
    size4 = carouselImages4[counter4].clientWidth;
    // console.log(counter4+"next");
    counter4++; 
    carouselSlide4.style.transform = `translateX(${(-counter4 * size4)-120*(counter4-1)}px)`;
})
prevBtn4.addEventListener('click',() =>{
    if(counter4 <= 0) return;
    carouselSlide4.style.transition =  `transform 0.4s ease-in-out`;
    size4 = carouselImages4[counter4].clientWidth;
    counter4--;
    carouselSlide4.style.transform = `translateX(${(-counter4 * size4)-60}px)`;
})

carouselSlide4.addEventListener('transitionend',()=>{
    if(carouselImages4[counter4].id === 'lastClone4'){
        carouselSlide4.style.transition =  `none`;
        counter4 = carouselImages4.length - 2;
        carouselSlide4.style.transform = `translateX(${-counter4 * size4 -60}px)`;
    }
    if(carouselImages4[counter4+1].id === 'firstClone4'){
        carouselSlide4.style.transition =  `none`;
        counter4 = carouselImages4.length - counter4 - 2 +1;
        carouselSlide4.style.transform = `translateX(${-counter4 * size4 + 200}px)`;
    }
})

// setInterval(function(){
//     nextBtn4.click();
//     },
// 3000);





var dc = document.querySelector('#dc');
var se = document.querySelector('#se');
var st = document.querySelector('#st');
var k = 0;
var n = 0;
var m = 0;

setInterval(()=>{
    if(k < 400){
        k++;
        dc.innerHTML = k + "+";
    }
},1)

setInterval(()=>{
    if(m < 10000){
        m += 25;
        st.innerHTML = m + "+";
    }
},1)

setInterval(()=>{
    if (n < 400000){
        n += 1000;
        se.innerHTML = n + "+";
    }
},1)
  