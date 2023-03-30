var header = document.getElementById('header')
var foto = document.getElementById('foto__img')
var titulo = document.getElementById('titulo')
var mainBarra = document.querySelector('.main-barra')

var header = document.getElementById('header')
var headerDivImg = document.querySelector('.header__div-img')
var titulo = document.getElementById('titulo')
var nav1 = document.querySelector('.nav1')
var nav2 = document.querySelector('.nav2')
var nav3 = document.querySelector('.nav3')

window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>10){
        header.style.backgroundColor = 'rgb(254, 242, 190)'
        headerDivImg.style.height= '50px'
        titulo.style.fontSize= '30px'
        nav1.style.fontSize= '15px'
        nav2.style.fontSize= '15px'
        nav3.style.fontSize= '15px'
    }else{
        header.style.backgroundColor = 'rgba(254,247,214,255)'
        headerDivImg.style.height= '80px'
        titulo.style.fontSize= '40px'
        nav1.style.fontSize= '20px'
        nav2.style.fontSize= '20px'
        nav3.style.fontSize= '20px'
    }
})

var experiencia1 = document.getElementById('experiencia1')
var educacion1 = document.getElementById('educacion1')
var experiencia2 = document.getElementById('experiencia2')
var experiencia3 = document.getElementById('experiencia3')
var educacion2 = document.getElementById('educacion2')


window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>160){
        experiencia1.style.transform= "translateX(0px)"
        educacion1.style.transform= "translateX(0px)"
        experiencia2.style.transform= "translateX(0px)"
        educacion2.style.transform= "translateX(0px)"
        experiencia3.style.transform= "translateX(0px)"

    
}})


