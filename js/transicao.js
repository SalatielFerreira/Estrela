/* =====================================================================
   Transição deslizante entre páginas
   A página nova "empurra" a anterior para o lado. O sentido segue a
   ordem do menu: indo para a direita (Início → Contato) a nova vem da
   direita; voltando, vem da esquerda.
   Carregado no <head> (sem defer) para definir o sentido antes de pintar.
   ===================================================================== */
(function () {
  "use strict";

  var ORDEM = {
    "": 0, "index.html": 0, "404.html": 0,
    "agenda.html": 1,
    "ensaios.html": 2,
    "segmentos.html": 3,
    "bateria.html": 3.5, "casal.html": 3.5, "alas.html": 3.5, "passistas.html": 3.5, "ala-musical.html": 3.5,
    "contato.html": 4,
  };

  function nomeDaPagina(url) {
    return new URL(url, location.href).pathname.split("/").pop();
  }
  function indice(nome) {
    return Object.prototype.hasOwnProperty.call(ORDEM, nome) ? ORDEM[nome] : 0;
  }

  var raiz = document.documentElement;
  var atual = nomeDaPagina(location.href);
  var anterior = null;
  try {
    anterior = sessionStorage.getItem("ep-pagina");
    sessionStorage.setItem("ep-pagina", atual);
  } catch (e) { /* navegação privada: segue sem direção */ }

  var sentido = "nenhuma";
  if (anterior !== null && anterior !== atual) {
    sentido = indice(atual) < indice(anterior) ? "voltar" : "avancar";
  }
  raiz.setAttribute("data-transicao", sentido);

  // Navegadores sem transição nativa entre páginas: usa animação simples
  if (!("onpagereveal" in window)) raiz.classList.add("transicao-simples");

  // Avisa a proteção de tela (main.js) que é uma troca de página interna,
  // para não escurecer a página que está saindo.
  document.addEventListener("click", function (e) {
    var a = e.target.closest && e.target.closest("a[href]");
    if (!a || a.target === "_blank" || a.origin !== location.origin || a.pathname === location.pathname) return;
    window.__epNavegando = true;
  });
  window.addEventListener("pageswap", function () { window.__epNavegando = true; });
  window.addEventListener("pageshow", function () { window.__epNavegando = false; });
})();
