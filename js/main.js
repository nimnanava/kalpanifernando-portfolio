

// header Scroll
 const menuIcon = document.querySelector('#menu-icon');
 const navbar = document.querySelector('.navbar1');
 const navbg = document.querySelector('.nav-bg');

  menuIcon.addEventListener('click' , ()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active')
  });



// count java


// faq 

let li = document.querySelectorAll(".faq-text li");
for (var i = 0 ; i < li.length; i++){
  li[i].addEventListener("click" , (e)=>{
    let clickedLi;
    if(e.target.classList.contains("question-arrow")){
    clickedLi = e.target.parentElement;
  
    }else{
      clickedLi = e.target.parentElement.parentElement;
      
    }
    clickedLi.classList.toggle("showAnswer")
  });
}

// type js

var typed = new Typed('.auto-type', {
  strings: [ "Let's Get Cooking....!" , 'Delicious Marketing'],
  typeSpeed: 130,
  backSpeed: 30,
  // loop:true,
});



//  scrool
AOS.init();

// popup display

function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('active');
 
  var popup = document.getElementById('popup');
  popup.classList.toggle('active');
}





  

  

