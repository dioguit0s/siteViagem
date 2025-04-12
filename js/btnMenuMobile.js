
let btnMenuMobile = document.querySelector('#btnMenuMobile')
let linha1 = document.querySelector('.lineMenuMob1') 
let linha2 = document.querySelector('.lineMenuMob2')

btnMenuMobile.addEventListener("click", ()=>{
    linha1.classList.toggle('ativo1')
})

btnMenuMobile.addEventListener("click", ()=>{
    linha2.classList.toggle('ativo2')
})