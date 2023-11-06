// Método Simples: Usando innerHTML para adicionar conteúdo
const tituloSimples = document.getElementById('titulo');
tituloSimples.innerHTML = 'Produtos à Venda';

// Método Complexo: Criando elementos individualmente
const produtoContainer = document.getElementById('produto-container');

const produto = document.createElement('div');
produto.classList.add('produto');

const nomeProduto = document.createElement('h2');
nomeProduto.textContent = 'Produto A';

const descricaoProduto = document.createElement('p');
descricaoProduto.textContent = 'Este é um ótimo produto para atender às suas necessidades.';

const precoProduto = document.createElement('p');
precoProduto.textContent = 'Preço: R$ 100,00';

const imagemProduto = document.createElement('img');
imagemProduto.src = 'imagem_produto.jpg';
imagemProduto.alt = 'Produto A';

produto.appendChild(nomeProduto);
produto.appendChild(descricaoProduto);
produto.appendChild(precoProduto);
produto.appendChild(imagemProduto);

produtoContainer.appendChild(produto);
