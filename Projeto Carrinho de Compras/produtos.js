document.addEventListener("DOMContentLoaded", () => {
    const botoesAdicionar = document.querySelectorAll(".adicionarCarrinho");

    botoesAdicionar.forEach(botao => {
        botao.addEventListener("click", (event) => {
            const produto = event.target.dataset.produto;
            const preco = event.target.dataset.preco;

            adicionarAoCarrinho(produto, preco);
        });
    });
});

function adicionarAoCarrinho(produto, preco) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    carrinho.push({ produto, preco });
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    alert(`${produto} adicionado ao carrinho!`);
}
