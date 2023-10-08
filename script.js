const hamButton =  document.querySelector('.fa-bars');
const hamLinks =  document.querySelector('.nav-links');
hamLinks.classList.add('clicked');

hamButton.addEventListener('click', function(){
    hamLinks.classList.toggle('clicked')
})