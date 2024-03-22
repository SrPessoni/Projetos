// Peça ao usuário para digitar idades de 10 pessoas. Exiba quais são maiores (18 anos) e menores de idade.


var arrayIdade = []
function enviarIdade(){
    var idade = document.getElementById('idade')
    var lista = document.getElementById('lista')
    var resultado = document.getElementById('resultado')
        if(idade.value){
            if(arrayIdade.length < 10) {
                arrayIdade.push(Number(idade.value))
                let item = document.createElement('option')
                item.text = `${idade.value}`
                lista.appendChild(item)
                resultado.innerHTML = ''
            }
            else {
                window.alert('[ERRO] Limite de 10 números atingidos!')
            }
        }
    idade.value = ''
    idade.focus()
}
function mensagemFinal(){
    if(arrayIdade.length == 0){
        window.alert('[ERRO] Adicione um valor antes de finalizar!')
    }
    else{
        maiordeIdade = ''
        menordeIdade = ''

        for(let pos in arrayIdade){
            if(arrayIdade[pos] >= 18){
                maiordeIdade += `${arrayIdade[pos]} : Maior de Idade!<br>`
            }
            else {
                menordeIdade += `${arrayIdade[pos]} : Menor de Idade!<br>`
            }
        }
        resultado.innerHTML += `${menordeIdade}`
        resultado.innerHTML += `${maiordeIdade}`
    }
}