let btn = document.querySelector('.burger')
let div = document.querySelector('.burger div')
btn.addEventListener('click', function(){
    div.classList.toggle('active')
})