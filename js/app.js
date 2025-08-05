let valor_total = 0;


function adicionar() {
    let produto = document.getElementById('produto').value;
    let nome_produto = produto.split('-')[0];
    let valor_unitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;

    if (quantidade <= 0) {
        alert('Quantidade inválida!');
        return;
    }

    let subtotal = quantidade * valor_unitario;
    let produtos_carrinho = document.getElementById('lista-produtos');

    produtos_carrinho.innerHTML +=

    `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nome_produto} <span class="texto-azul">R$${subtotal}</span>
    </section>`;

    valor_total += subtotal;
    calcularTotal();
    document.getElementById('quantidade').value = 0;
   
}

function limpar() {
    valor_total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = 'R$ 0';}

function calcularTotal() {
    let campo_total = document.getElementById('valor-total');
    campo_total.textContent = `R$ ${valor_total}`;
}

