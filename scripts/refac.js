class Prato {
  constructor(nome, imagem, descricao, preco) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
  }

  getView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener(
      "click",
      () => {
        const selecionado = document.querySelector(".prato .selecionado");
        if (selecionado !== null) {
          selecionado.classList.remove("selecionado");
        }
        view.classList.add("selecionado");
        pratoSelecionado = {
          nome: this.nome,
          preco: this.preco,
        };
        verificarPedido();
      }
    );
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    return view;
  }
};

class Bebida {
  constructor(nome, imagem, descricao, preco) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
  }

  getView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener(
      "click",
      () => {
        const selecionado = document.querySelector(".bebida .selecionado");
        if (selecionado !== null) {
          selecionado.classList.remove("selecionado");
        }
        view.classList.add("selecionado");
        bebidaSelecionada = {
          nome: this.nome,
          preco: this.preco
        };
        verificarPedido();
      }
    );
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    return view;
  }
};

class Sobremesa {
  constructor(nome, imagem, descricao, preco) {
    this.nome = nome;
    this.imagem = imagem;
    this.descricao = descricao;
    this.preco = preco;
  }

  getView() {
    const view = document.createElement("div");
    view.classList.add("opcao");
    view.addEventListener(
      "click",
      () => {
        const selecionado = document.querySelector(".sobremesa .selecionado");
        if (selecionado !== null) {
          selecionado.classList.remove("selecionado");
        }
        view.classList.add("selecionado");
        sobremesaSelecionada = {
          nome: this.nome,
          preco: this.preco
        };
        verificarPedido();
      }
    );
    view.innerHTML = `
          <img src="${this.imagem}" />
          <div class="titulo">${this.nome}</div>
          <div class="descricao">${this.descricao}</div>
          <div class="fundo">
              <div class="preco">R$ ${this.preco.toFixed(2)}</div>
              <div class="check">
                  <ion-icon name="checkmark-circle"></ion-icon>
              </div>
          </div>
      `;
    return view;
  }
};

const pratos = [
  new Prato(
    "Estrombelete de Frango",
    "img/frango_yin_yang.png",
    "Um pouco de batata, um pouco de salada",
    14.9
  ),
  new Prato(
    "Asa de Boi",
    "img/frango_yin_yang.png",
    "Com molho shoyu",
    14.9
  ),
  new Prato(
    "Carne de Monstro",
    "img/frango_yin_yang.png",
    "Com batata assada e farofa",
    14.9
  )
];

const bebidas = [
  new Bebida(
    "Coquinha gelada",
    "img/coquinha_gelada.png",
    "Lata 350ml",
    4.9
  ),
  new Bebida(
    "Caldo de Cana",
    "img/coquinha_gelada.png",
    "Copo 600ml",
    4.9
  ),
  new Bebida(
    "Corote Gelado",
    "img/coquinha_gelada.png",
    "Garrafa 400ml",
    4.9
  )
];

const sobremesas = [
  new Sobremesa(
    "Pudim",
    "img/pudim.png",
    "Gosto de doce de leite",
    7.9
  ),
  new Sobremesa(
    "Flam",
    "img/pudim.png",
    "Gosto de chocolate",
    7.9
  ),
  new Sobremesa(
    "Brigadeiro",
    "img/pudim.png",
    "3 unidades",
    7.9
  )
];

let pratoSelecionado = null;
let bebidaSelecionada = null;
let sobremesaSelecionada = null;

const btnConfirmar = document.querySelector(".confirmar");
btnConfirmar.addEventListener(
  "click",
  () => enviarZap()
);
  
const btnCancelar = document.querySelector(".cancelar");
btnCancelar.addEventListener(
  "click",
  () => cancelarPedido()
);

const btnPedir = document.querySelector(".fazer-pedido");
btnPedir.addEventListener(
  "click",
  () => confirmarPedido()
);

function getPrecoTotal() {
  return (
    pratoSelecionado.preco +
    bebidaSelecionada.preco +
    sobremesaSelecionada.preco
  );
}

function confirmarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.remove("escondido");

  document.querySelector(".confirmar-pedido .prato .nome").innerHTML =
    pratoSelecionado.nome;
  document.querySelector(".confirmar-pedido .prato .preco").innerHTML =
    pratoSelecionado.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .bebida .nome").innerHTML =
    bebidaSelecionada.nome;
  document.querySelector(".confirmar-pedido .bebida .preco").innerHTML =
    bebidaSelecionada.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .sobremesa .nome").innerHTML =
    sobremesaSelecionada.nome;
  document.querySelector(".confirmar-pedido .sobremesa .preco").innerHTML =
    sobremesaSelecionada.preco.toFixed(2);

  document.querySelector(".confirmar-pedido .total .preco").innerHTML =
    getPrecoTotal().toFixed(2);
}

function cancelarPedido() {
  const modal = document.querySelector(".overlay");
  modal.classList.add("escondido");
}

function enviarZap() {
  const telefoneRestaurante = 553299999999;
  const encodedText = encodeURIComponent(
    `Olá, gostaria de fazer o pedido: \n- Prato: ${
      pratoSelecionado.nome
    } \n- Bebida: ${bebidaSelecionada.nome} \n- Sobremesa: ${
      sobremesaSelecionada.nome
    } \nTotal: R$ ${getPrecoTotal().toFixed(2)}`
  );

  const urlWhatsapp = `https://wa.me/${telefoneRestaurante}?text=${encodedText}`;
  window.open(urlWhatsapp);
}

function verificarPedido() {
  if (pratoSelecionado && bebidaSelecionada && sobremesaSelecionada) {
    btnPedir.classList.add("ativo");
    btnPedir.disabled = false;
    btnPedir.innerHTML = "Fazer pedido";
  }
}

const pratosContainer = document.querySelector(".opcoes.prato");
pratos.forEach((item) => pratosContainer.appendChild(item.getView()));

const bebidasContainer = document.querySelector(".opcoes.bebida");
bebidas.forEach((item) => bebidasContainer.appendChild(item.getView()));

const sobremesasContainer = document.querySelector(".opcoes.sobremesa");
sobremesas.forEach((item) => sobremesasContainer.appendChild(item.getView()));
