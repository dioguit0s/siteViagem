
let btnMenuMobile = document.querySelector('#btnMenuMobile')
let linha1 = document.querySelector('.lineMenuMob1') 
let linha2 = document.querySelector('.lineMenuMob2')
let menuMobile = document.querySelector('#menuMobile')
let body = document.querySelector('body')

btnMenuMobile.addEventListener("click", ()=>{
    linha1.classList.toggle('ativo1')
    linha2.classList.toggle('ativo2')
    menuMobile.classList.toggle('abrir')
    body.classList.toggle('trava')
})