var num = document.getElementById('num')
var lista = document.getElementById('lista')
var display = document.getElementById('display')
var lnum = []

function adicionar() {
    if (num.value){
        lnum.push(Number(num.value));
        num.value = '';
        num.focus();
        atualizarLista();
        display.innerHTML = ''
    }
}

function finalizar() {
    if (lnum.length == 0) {
        window.alert('Adicione valores antes de finalizar!');
    }
    else{
        lnum.sort(function(a, b) {
            return a - b;
        });
        
        display.innerHTML = '';

        for (let pos in lnum) {
            display.innerHTML += `${lnum[pos]}<br>`;
        }
    }
}

function atualizarLista() {
    lista.innerHTML = '';
    lnum.sort(function(a, b){
        return a - b;
    });

    for (let pos in lnum){
        let item = document.createElement('option');
        item.text = `${lnum[pos]}`;
        lista.appendChild(item);
    }
}
