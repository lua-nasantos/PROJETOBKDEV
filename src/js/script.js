//console.log(produtos)

const produtosLista = document.querySelector(".produtosLista")

// 0) CRIAR UMA FUNÇÃO (cardProduto) => PRODUTO COMO PARAMETRO
function criarcardProduto(produto) {
  // 1) TAG HTML (LI)
  const tagLi = document.createElement("li")

  // 2) ADICIONAR UMA CLASSE NA TAG LI(cardProdutos)
  tagLi.classList.add("cardProduto")

  // 3) ALIMENTAR ESSA TAG COM OS OUTROS ELEMENTOS:
  // 4) ALIMENTAR COM INFORMAÇÕES DOS PRODUTOS
  tagLi.innerHTML = `
            <img src="${produto.image}">
              <h3>${produto.nome}</h3>
              <p>${produto.preco}</p>
              <button type="button">Adicionar</button>
`
  // 5) ADICIONAR ELEMENTO (LI) NA TELA => COMO FILHO DA TAG UL
  produtosLista.appendChild(tagLi)
}




