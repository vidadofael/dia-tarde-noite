
function carregar() {
    var mensagem = window.document.getElementById("msg");
    var imagem = window.document.getElementById("img");

    var data = new Date();
    // var hora = data.getHours();
    var hora = 19

    mensagem.innerHTML = `Agora são ${hora} horas`;

    if (hora >= 0 && hora < 12) {
        imagem.src = './assets/manha.png'
        document.body.style.background = "#DED7CF"
        document.body.style.transition = "all 0.5s ease-in-out"
        
    }else if (hora >=12 && hora <= 18) {
        imagem.src = './assets/tarde.png'
        document.body.style.background = "#B3C2C1"
        document.body.style.transition = "all 0.5s ease-in-out"

    }else {
        imagem.src = './assets/noite.png'
        document.body.style.background = "#3F3E35"
        document.body.style.transition = "all 0.5s ease-in-out"

    }
}



 