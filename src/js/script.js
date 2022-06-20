//SELECIONANDO A LISTA PARA ADICIONAR OS PRODUTOS
const produtosLista = document.querySelector(".produtosLista")
const listaProdutos = document.querySelector(".listaProdutos")
// 0) CRIAR UMA FUNÇÃO (cardProduto) => PRODUTO COMO PARAMETRO
function criarcardProduto(produto) {

  // 1) TAG HTML (LI)
  const tagLi = document.createElement("li")

  // 2) ADICIONAR UMA CLASSE NA TAG LI(cardProdutos)
  tagLi.classList.add("cardProduto")

  // 3) ALIMENTAR ESSA TAG COM OS OUTROS ELEMENTOS:
  // 4) ALIMENTAR COM INFORMAÇÕES DOS PRODUTOS
  tagLi.innerHTML = `
            <img src="${produto.image}" alt="${produto.nome}">
              <h3>${produto.nome}</h3>
              <p>${produto.preco}</p>
              <button type="button" id"${produto.id}">Adicionar</button>
`
  return tagLi
}


function listarProdutos(listaProdutos) {

  // 3) LOOP PARA RECUPERAR CADA PRODUTO
  for (let i = 0; i < listaProdutos.length; i++) {
    const produto = listaProdutos[i]
    // 4) PASSAR PARA FUNÇÃO/PARA CRIAR O CARD DE PRODUTO
    const cardMontado = criarcardProduto(produto)
    // 5) ADICIONAR ELEMENTO (LI) NA TELA => COMO FILHO DA TAG UL
    produtosLista.appendChild(cardMontado)
  }
}
listarProdutos(produtos);

//CARRINHO DE COMPRAS
let carrinho = []

//ADICIONANDO INTERCEPTADOR NA LISTA DE PRODUTOS
produtosLista.addEventListener("click", adicionarProdutoCarrinho)
function adicionarProdutoCarrinho(event){

  //IDENTIFICANDO ELEMENTO CLICADO
  const botao = event.target

  //VERIFICANDO SE É UM BOTÃO
  if (botao.tagName == "BUTTON"){
                    
    //RECUPERANDO ID => IDENTIFICADOR DO PRODUTO
    const idProduto = botao.id

    //PESQUISAR SE ESSE PRODUTO É EXISTENTE NA BASE
    const produtoFiltrado = produtos.find((produto)=> produto.id == idProduto)
    
    //ADICIONANDO PRODUTO NO CARRINHO
    carrinho.push(produtoFiltrado)

    //LISTAR NA TELA DOS PRODUTOS
    listarProdutosCarrinho()
  }
}

//LISTAR PRODUTOS DO CARRINHO
function listarProdutosCarrinho(){

  //PERCORRENDO PRODUTOS DO CARRINHO
 for(let i = 0; i<carrinho.length; i++){

  //RECUPERANDO CADA PRODUTO
  const produto = carrinho[i]

  //CRIAR O TEMPLATE
  const tagLi = document.createElement("li")
  tagLi.classList.add("cardProduto")
 
  tagLi.innerHTML = `
<!--NOME/FOTO PRODUTO-->
              <div class="infoNome">
                <img src="${produto.image}" alt="${produto.nome}" />
                <p>Combo Whopper</p>
              </div>
              <!--PREÇO PRODUTO-->
              <div class="infoPreco">
                <p>R$ 32.90</p>
                <button>
                <img src="./src/assets/lixo.png" alt="Lixo para remover produto">
               </button>
              </div>

  `
  listaProdutos.appendChild(tagLi)
  

 }
}



