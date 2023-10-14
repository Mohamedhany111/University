let imgNav = document.getElementById('.imgNav');

window.onload=function(){
    imgNav.style.animation='imgNav 2s 2';
};




// Start  slide 
const slideImage= document.querySelectorAll('.slide');
const arrowRight=document.querySelector('.right-arrow');
const arrowLeft = document.querySelector('.left-arrow');
currentImage=0;


function reset(){
    for(let i =0; i<slideImage.length;i++){
        slideImage[i].style.display='none';
    }
}
function startSlide(){
    reset();
    slideImage[0].style.display='block';
}

function prevImage(){
    reset();
    slideImage[currentImage-1].style.display='block';
    currentImage--;
}
arrowLeft.addEventListener('click',function(){
    if(currentImage===0){
        currentImage = slideImage.length;   // 0 = 3 
    }
    prevImage();

})
startSlide()



function nextIamge(){
    reset();
    slideImage[currentImage+1].style.display='block';
    currentImage++;
}

arrowRight.addEventListener('click',function(){
    if(currentImage === slideImage.length-1){  
        currentImage = -1;
    }
    nextIamge();
})
// end slide
// start num of years

// let section2= document.querySelectorAll('.window');
// let num = document.querySelector('.num');

// function startCount(el){
//     let goal = el.dataset.goal;
//     let count = setInterval(() => {
//         el.textContent++;
//         if(el.textContent === goal){
//             clearInterval(count);
//         }
//     },17);
// }
// startCount(num)
// window.onscroll = function(){
//     if(window.scrollY >= section2.offsetTop){
//         startCount(num);
//     }
// }




// 
 

let img =document.querySelector('.img-home');

window.onload=function(){
    img.style.animation='home 2s infinite';
}
// 

const carsoul = document.querySelector('.carsoul');
let isDragging = false;



// 

let reactLogo =document.getElementById("photo2");


window.onload=function(){
    reactLogo.style.animation="reactLogo 2s infinite";
}


 