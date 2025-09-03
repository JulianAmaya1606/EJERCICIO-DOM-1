    const figure = document.getElementById('figure')
    
    function circulo(){
 
           figure.style.borderRadius = "50%";
            figure.style.background = "red";
     }
     function estrella(){
     
            figure.style.clipPath = "polygon(\
                50% 0%,\
                61% 35%,\
                98% 35%,\
                68% 57%,\
                79% 91%,\
                50% 70%,\
                21% 91%,\
                32% 57%,\
                2% 35%,\
                39% 35%\
            )";

     }
     function gif (){

        figure.style.backgroundImage = "url('https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3b2lrbTgwbWFrMXNqY3JjeWRqZjIzZTh5d253b2o0bG90NTVic3B0dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zbyE0sDeW4z3W/giphy.gif')";
        figure.style.backgroundPosition = "center";
     }
    function animation(){
        const figure = document.getElementById('figure');
        figure.style.transition = "transform 1s ease";
        
        if (figure.style.transform === "rotate(360deg)") {
            figure.style.transform = "rotate(0deg)";
        } else {
            figure.style.transform = "rotate(360deg)";
        }

    }

    function arriba() {
        figure.style.transition = "transform 0.7s ease";
        figure.style.transform = "translateY(-150px)"; 
    }
    function abajo(){
        figure.style.transition = "transform 0.7s ease";
        figure.style.transform = "translateY(150px)";
    }
    function izquierda(){
        figure.style.transition = "transform 0.7s ease";
        figure.style.transform = "translatex(-150px)";
    }
        function derecha(){
        figure.style.transition = "transform 0.7s ease";
        figure.style.transform = "translatex(150px)";
    }




























document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnCircle').addEventListener('click',circulo)
    document.getElementById('btnStar').addEventListener('click',estrella)
    document.getElementById('btnGif').addEventListener('click',gif)
    document.getElementById('btnAnim').addEventListener('click',animation)
    document.getElementById('btnMoveUp').addEventListener('click',arriba)
    document.getElementById('btnMoveDown').addEventListener('click',abajo)
    document.getElementById('btnMoveLeft').addEventListener('click',izquierda)
    document.getElementById('btnMoveRight').addEventListener('click',derecha)








});