if (document.readyState === "loading"){
    document.addEventListener("DOMContentLoaded", ready)
}
else {
    ready()
}

function ready(){
    document.querySelectorAll('.carrinhoItem').forEach((item) => {
        var precoElement = item.querySelector('.preco p');
        var contador = item.querySelector('.contador');
        var quantidadeElement = contador.querySelector('span');
        var quantidade = Number(quantidadeElement.innerText);
        var precoInicial = parseFloat(precoElement.innerText.replace('R$', '').replace(',', '.'));
    
        function atualizarPreco() {
            var novoPreco = (precoInicial * quantidade).toFixed(2).replace('.', ',');
            precoElement.innerText = `R$${novoPreco}`;
            atualizarTotalPagar();
        }
    
        contador.querySelector('.bx-plus').addEventListener('click', () => {
            quantidade = quantidade + 1;
            quantidadeElement.innerText = quantidade;
            atualizarPreco();
        });
    
        contador.querySelector('.bx-minus').addEventListener('click', () => {
            if (quantidade > 1) {
                quantidade = quantidade - 1;
                quantidadeElement.innerText = quantidade;
                atualizarPreco();
            }
        });
        atualizarPreco();
    });

    function atualizarTotalPagar() {
        var total = 0;
        document.querySelectorAll('.carrinhoItem').forEach((item) => {
            var precoElement = item.querySelector('.preco p');
            var preco = parseFloat(precoElement.innerText.replace('R$', '').replace(',', '.'));
            total += preco;
        });
        var totalPagarElement = document.querySelector('.totalPagar');
        totalPagarElement.innerText = `Pagar R$${total.toFixed(2).replace('.', ',')}`;
    }
    
    const botoesRemover = document.querySelectorAll(".removerItens");
    botoesRemover.forEach(botao => {
        botao.addEventListener("click", (event) => {
            event.target.closest(".carrinhoItem").remove();
            atualizarTotalPagar();
        });
    });
    atualizarTotalPagar();
}