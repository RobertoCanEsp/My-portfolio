
var slider = document.getElementById("sliderContainer"), cards = slider.getElementsByTagName("dd");
var firstCarrouselIndex = 1;

let TimeCarrousel = setTimeout(NextCoverCard, 10000);

slider.appendChild(cards.item(0).cloneNode(true));
slider.addEventListener('transitionend', () => {
    if(firstCarrouselIndex == cards.length){
        slider.style.transitionDuration = "0s"; 
        NextCoverCard();
        setTimeout(() => { slider.style.transitionDuration = "0.4s"; }, 0.1);          
    }
}); 



    //* funciones
function ChangeTheme(){ //TODO: cambiar tema/apariencia de la pagina
    document.getElementById("Real_body").classList.toggle("dark");
    document.getElementById("dark_mode").classList.toggle("active");
    document.getElementById("light_mode").classList.toggle("active");
}

function NextCoverCard(){//TODO: cambia a la siguiente tarjeta del carrousel o en su defecto te regresa a la primera
    clearTimeout(TimeCarrousel);
    
    if(firstCarrouselIndex == cards.length){  
        slider.style.marginLeft= "0vw"; 
        firstCarrouselIndex = 1; 
    }else{
        slider.style.marginLeft= "-" + firstCarrouselIndex + "00" + "vw";
        firstCarrouselIndex++;
    }
    TimeCarrousel = setTimeout(NextCoverCard, 10000);
}