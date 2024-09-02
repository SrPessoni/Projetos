function HoraDeComer() {
    var msg = window.document.getElementById('mensagem');
    var horaDisplay = window.document.getElementById('hora');
    var img = window.document.getElementById('imagem')
    var header = window.document.getElementById('cabeça')

    var data = new Date ();
    var hora = data.getHours();
    var min = data.getMinutes();
    var seg = data.getSeconds();
    horaDisplay.innerHTML= `Agora são ${hora} horas, ${min} minutos, ${seg} segundos`

    if (hora >= 0 && hora < 11) {
        header.innerHTML= "<h1>Hora do Café-da-Manhã</h1>"
        img.src = 'Cafe.png'
        msg.innerHTML = 'Recomendamos: Crepioca de Frango!'
        document.body.style.background = '#6ba5ec'
    }
    else if (hora >= 11 && hora < 15){
        header.innerHTML= '<h1>Hora do Almoço</h1>'
        img.src = 'Almoco.png'
        msg.innerHTML = 'Recomendamos: Frango Grelhado com Legumes!'
        document.body.style.background = '#eeb243'
    }
    else if (hora >= 15 && hora < 18){
        header.innerHTML= '<h1>Hora do Lanche</h1>'
        img.src = 'Lanche.png'
        msg.innerHTML = 'Recomendamos: Panqueca de Banana!'
        document.body.style.background = '#eb8a52'
    }
    else{
        header.innerHTML= '<h1>Hora da janta</h1>'
        img.src = 'Janta.png'
        msg.innerHTML = 'Recomendamos: Salmão ao Molho de Maracujá!'
        document.body.style.background = '#515154'
    };
};
setInterval(HoraDeComer, 1000);