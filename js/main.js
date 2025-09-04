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
        function animation() {
            const figure = document.getElementById('figure');

            // Crear un style dinámico para el keyframes
            const style = document.createElement('style');
            style.innerHTML = `
                @keyframes girar {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
            `;
            document.head.appendChild(style);

            // Aplicar la animación al elemento
            figure.style.animation = "girar 2s linear infinite";
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

    function titulo (){
       let nuevotitulo = prompt("ingrese el nuevo titulo")
        texto = document.getElementById('mainTitle')
        texto.innerText = nuevotitulo
    }
    function parrafo (){
        let nuevoP = prompt("ingrese el nuevo parrafo")
        p = document.getElementById('mainParagraph')
        p.innerText = nuevoP
    }
    function agregarP (){
    const texto = prompt("Escribe el contenido del nuevo párrafo:");
        const nuevoP = document.createElement("p");
        nuevoP.innerText = texto;
        div=document.getElementById("extraParagraphs")
        div.appendChild(nuevoP);
    }

    function removeP(){
        const contenedor = document.getElementById("extraParagraphs");
       const ultimo =  contenedor.lastElementChild; 
       ultimo.remove()
    }
    function color () {
      let newC = prompt ("ingrese el nuevo color #")
        figure.style.background = newC
    }
    function elegir (){
        let figura = prompt ("elija entre (circulo,estrella o cuadrado)")
        switch (figura) {
            case "circulo":
                figure.style.borderRadius = "50%"
                break;
            case "estrella":
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
                break;
            case "cuadrado":
                figure.style.borderRadius = "0"; // cuadrado perfecto
                figure.style.clipPath = "none";
                break;
        }
    }

function cambiarImg() {
    let imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
    const img = document.getElementById("mainImage"); // tu <img>
    let actual = img.getAttribute("src"); // src actual
    let siguiente = imagenes[0]; // por defecto la primera

    imagenes.forEach((imagen, index) => {
        if (actual === imagen) { 
            // si no es la última imagen
            if (index < imagenes.length - 1) {
                siguiente = imagenes[index + 1];
            } else {
                // si es la última, volver a la primera
                siguiente = imagenes[0];
            }
        }
    });

    img.setAttribute("src", siguiente); // cambiar la imagen
}

function cambiarImgAtras() {
    let imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"];
    const img = document.getElementById("mainImage"); // tu <img>
    let actual = img.getAttribute("src"); // src actual
    let anterior = imagenes[imagenes.length - 1]; // por defecto la última imagen

    imagenes.forEach((imagen, index) => {
        if (actual === imagen) { 
            // si no es la primera imagen
            if (index > 0) {
                anterior = imagenes[index - 1];
            } else {
                // si es la primera, ir a la última
                anterior = imagenes[imagenes.length - 1];
            }
        }
    });

    img.setAttribute("src", anterior); // cambiar la imagen
    }

    function alternarImagen() {
        const img = document.getElementById("mainImage");
        img.classList.toggle("none")
    }
    function cambiarAlt() {
        newAlt = prompt("ingrese el nuevo alt")
        const img = document.getElementById('mainImage')
        img.setAttribute("alt", newAlt )
    }

    function enlace(){
        let enl = document.getElementById('mainLink')
        let newE = prompt("ingrese el nuevo enlace")
        enl.setAttribute("href", newE)
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
    document.getElementById('btnChangeTitle').addEventListener('click',titulo)
    document.getElementById('btnChangeParagraph').addEventListener('click',parrafo)
    document.getElementById('btnAddParagraph').addEventListener('click',agregarP)
    document.getElementById('btnRemoveParagraph').addEventListener('click',removeP)
    document.getElementById('btnHexColor').addEventListener('click',color)
    document.getElementById('btnChooseFigure').addEventListener('click',elegir)
    document.getElementById('btnChangeImageNext').addEventListener('click',cambiarImg)
    document.getElementById('btnChangeImagePrev').addEventListener('click',cambiarImgAtras)
    document.getElementById('btnToggleImage').addEventListener('click',alternarImagen)
    document.getElementById('btnChangeAlt').addEventListener('click',cambiarAlt)
    document.getElementById('btnChangeLink').addEventListener('click',enlace)














});