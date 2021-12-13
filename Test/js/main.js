let burger = document.querySelector('.burger');
let burger__item = document.querySelector('.burger__item');
let buttons = document.querySelector('.header__butons');
let logo = document.querySelector('.header__logo');
let progress = document.querySelector('.progress');

burger.addEventListener('click', function(){
    
    if(burger.classList.contains('burger')){
        // logo.classList.toggle('hide')
        progress.classList.toggle('hide')
        
        
    }


    // else{
    //     logo.classList.remove('hide')
    // }
    
    console.log('hello');
})