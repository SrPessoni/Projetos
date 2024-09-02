document.addEventListener('DOMContentLoaded', ready);

function ready() {
    let total = 0;
    const carrinhoItems = document.querySelectorAll('.carrinhoItem');
    carrinhoItems.forEach(iniciarContador);

    function iniciarContador(item) {
        const contador = item.querySelector('.contador span');
        let quantidade = Number(contador.innerText);
        const precoElement = item.querySelector('.preco p');
        const precoInicial = parseFloat(precoElement.innerText.replace('R$', '').replace(',', '.'));

        function atualizarPreco() {
            const novoPreco = calcularPreco(precoInicial, quantidade);
            precoElement.innerText = `R$${novoPreco}`;
            atualizarTotalPagar();
        }

        item.querySelector('.bx-plus').addEventListener('click', () => {
            quantidade++;
            contador.innerText = quantidade;
            atualizarPreco();
        });

        item.querySelector('.bx-minus').addEventListener('click', () => {
            if (quantidade > 1) {
                quantidade--;
                contador.innerText = quantidade;
                atualizarPreco();
            }
        });

        atualizarPreco();
    }

    function finalizarCompra() {
        if (total === 0) {
            alert('[ERRO] Seu carrinho está vazio!');
        } else {
            alert(
                `
                    Obrigado pela sua compra!
                    Valor do pedido: R$${total.toFixed(2).replace('.', ',')}
                    Volte sempre :)
                `
            );
        }

        document.querySelector(".carrinho .listaCarrinhoItem").innerHTML = "";
        atualizarTotalPagar();
    }

    const totalPagarBotao = document.querySelector('.totalPagar');
    totalPagarBotao.addEventListener('click', finalizarCompra);

    function calcularPreco(precoInicial, quantidade) {
        return (precoInicial * quantidade).toFixed(2).replace('.', ',');
    }

    function atualizarTotalPagar() {
        total = Array.from(document.querySelectorAll('.carrinhoItem')).reduce((acc, item) => {
            const precoElement = item.querySelector('.preco p');
            const preco = parseFloat(precoElement.innerText.replace('R$', '').replace(',', '.'));
            return acc + preco;
        }, 0);

        const totalPagarBotao = document.querySelector('.totalPagar');

        if (total > 0) {
            totalPagarBotao.innerText = `Pagar R$${total.toFixed(2).replace('.', ',')}`;
            totalPagarBotao.style.display = 'block';
        } else {
            totalPagarBotao.style.display = 'none';
        }
    }

    function removerItens() {
        const botoesRemover = document.querySelectorAll('.removerItens');
        botoesRemover.forEach(botao => {
            botao.addEventListener('click', (event) => {
                const item = event.target.closest('.carrinhoItem');
                item.remove();
                atualizarTotalPagar();
            });
        });
    }

    const adicionarProduto = document.querySelectorAll('.adicionarCarrinho');
    adicionarProduto.forEach(produto => {
        produto.addEventListener('click', adicionarCarrinho);
    });

    function adicionarCarrinho(event) {
        const button = event.target;
        const produtoInfo = button.closest('.produto');
        const produtoImagem = produtoInfo.querySelector('.produtoImagem').src;
        const produtoNome = produtoInfo.querySelector('.produtoNome').innerText;
        const produtoPreco = parseFloat(produtoInfo.querySelector('.produtoPreco').innerText.replace('R$', '').replace(',', '.'));

        let existeProduto = false;
        const produtoCarrinhoNome = document.querySelectorAll('.produtoCarrinhoNome');

        produtoCarrinhoNome.forEach(produto => {
            if (produto.innerText === produtoNome) {
                existeProduto = true;
                const contador = produto.closest('.carrinhoItem').querySelector('.contador span');
                let quantidadeAtual = parseInt(contador.innerText);
                quantidadeAtual++;
                contador.innerText = quantidadeAtual;
                atualizarPrecoItem(produto.closest('.carrinhoItem'), quantidadeAtual, produtoPreco);
            }
        });

        if (!existeProduto) {
            const novoProduto = criarNovoProduto(produtoImagem, produtoNome, produtoPreco);
            const listaCarrinho = document.querySelector(".carrinho .listaCarrinhoItem");
            listaCarrinho.append(novoProduto);
            atualizarPrecoItem(novoProduto, 1, produtoPreco);
            atualizarTotalPagar();
        }
    }

    function criarNovoProduto(imagem, nome, preco) {
        const novoProduto = document.createElement('li');
        novoProduto.classList.add('carrinhoItem');
        novoProduto.innerHTML = `
            <div class="imagem">
                <img src="${imagem}" alt="${nome}">
            </div>
            <div class="info">
                <h4 class="produtoCarrinhoNome">${nome}</h4>
                <div class="detalhes">
                    <div class="tempo">
                        <i class="bx bxs-timer"></i>
                        <span>15 min</span>
                    </div>
                    <div class="status">
                        <i class="bx bxs-package"></i>
                        <span>Pronto</span>
                    </div>
                </div>
                <div class="preco">
                    <p class="produtoCarrinhoPreco">R$${preco.toFixed(2).replace('.', ',')}</p>
                    <div class="contador">
                        <i class='removerItens bx bxs-trash'></i>
                        <i class="bx bx-minus"></i>
                        <span>1</span> 
                        <i class="bx bx-plus"></i>
                    </div>
                </div>
            </div>
        `;

        adicionarContadoresEvento(novoProduto, preco);
        
        return novoProduto;
    }

    function adicionarContadoresEvento(produto, preco) {
        const contador = produto.querySelector('.contador span');

        produto.querySelector(".bx-plus").addEventListener('click', () => {
            let quantidade = parseInt(contador.innerText);
            quantidade++;
            contador.innerText = quantidade;
            atualizarPrecoItem(produto, quantidade, preco);
        });

        produto.querySelector(".bx-minus").addEventListener('click', () => {
            let quantidade = parseInt(contador.innerText);
            if (quantidade > 1) {
                quantidade--;
                contador.innerText = quantidade;
                atualizarPrecoItem(produto, quantidade, preco);
            }
        });


        produto.querySelector(".removerItens").addEventListener('click', () => {
            produto.remove();
            atualizarTotalPagar();
        });
    }

    function atualizarPrecoItem(produto, quantidade, precoInicial) {
        const precoElement = produto.querySelector('.preco p');
        const novoPreco = calcularPreco(precoInicial, quantidade);
        precoElement.innerText = `R$${novoPreco}`;
        atualizarTotalPagar();
    }
    
    removerItens();
}