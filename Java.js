
const hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');
var contador = 1;

hideText_btn.addEventListener('click', toggleText);

function toggleText() {
    hideText.classList.toggle('show');
}

function cambio(){
  hideText_btn.classList.toggle("mostrar")
    if(hideText_btn.classList.contains("mostrar")){
    hideText_btn.innerHTML= "MOSTRAR MENOS"
}else{
        hideText_btn.innerHTML= "MOSTRAR MÁS"
    }
}


hideText_btn.addEventListener("click", cambio,true)

var header = document.getElementById('header')
var headerDivImg = document.querySelector('.header__div-img')
var titulo = document.getElementById('titulo')
var nav1 = document.querySelector('.nav1')
var nav2 = document.querySelector('.nav2')
var nav3 = document.querySelector('.nav3')

if(screen.width>479){
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
    }})
}else if(screen.width<480){
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
        }}


var datosBoton = document.getElementById('hideText_btn')


if (screen.width>479) {
window.addEventListener('scroll', ()=>{
    var scroll = window.scrollY
    if(scroll>850){ 
        datosBoton.style.filter = "opacity(100%)"
    }else{
        datosBoton.style.filter = "opacity(0%)"

    }
}

)
}else if(screen.width<479){
    var scroll2 = window.scrollY
    if(scroll2>500){ 
        datosBoton.style.filter = "opacity(100%)"
    }else{
        datosBoton.style.filter = "opacity(0%)"

    }
    
}




