/* =====================================================================
   G.R.E.S. ESTRELA DE PRATA — scripts do site
   Monta as páginas a partir de js/dados.js.
   Para mudar CONTEÚDO, edite js/dados.js (não precisa mexer aqui).
   ===================================================================== */
(function () {
  "use strict";

  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const pagina = document.body.dataset.pagina || "";

  /* ---------------- Ícones ---------------- */
  const ICONES = {
    casa: '<path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z"/>',
    calendario: '<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 10h18"/>',
    calendarioMais: '<rect x="3" y="4.5" width="18" height="17" rx="2"/><path d="M16 2.5v4M8 2.5v4M3 10h18M12 13v6M9 16h6"/>',
    pin: '<path d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    grade: '<rect x="3" y="3" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="3" width="7.5" height="7.5" rx="2"/><rect x="3" y="13.5" width="7.5" height="7.5" rx="2"/><rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2"/>',
    telefone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    whatsapp: '<path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 .8c-1-.4-1.9-1.3-2.3-2.3l.8-1-1-2-1.5 1"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    fechar: '<path d="M6 6l12 12M18 6 6 18"/>',
    seta: '<path d="m6 9 6 6 6-6"/>',
    direita: '<path d="m9 6 6 6-6 6"/>',
    escudo: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
    externo: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
    rota: '<path d="M3 11 21 3l-8 18-2-8z"/>',
    tambor: '<ellipse cx="12" cy="9" rx="8" ry="3"/><path d="M4 9v7c0 1.7 3.6 3 8 3s8-1.3 8-3V9"/><path d="M7 11.6v6.6M12 12v7M17 11.6v6.6M5 2l5 5M19 2l-5 5"/>',
    bandeira: '<path d="M5 22V3"/><path d="M5 4c3-2 6 2 9 0s4-1 5 0v9c-1-1-2-2-5 0s-6-2-9 0"/>',
    pessoas: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-6 6.5-6s6 2.5 6.5 6"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.3c2 .8 3.3 3 3.5 5.7"/>',
    brilho: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/>',
    musica: '<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  };

  function icone(nome, classe) {
    return (
      '<svg class="' + (classe || "icone") + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' +
      (ICONES[nome] || "") + "</svg>"
    );
  }

  // Estrela prateada facetada (mesmo desenho de img/estrela.svg)
  const FACES = [
    ["50,52 38.83,36.63 50,4", "#f4f6fa"], ["50,52 50,4 61.17,36.63", "#a9b2c2"],
    ["50,52 61.17,36.63 95.65,37.17", "#e6eaf1"], ["50,52 95.65,37.17 68.07,57.87", "#8e98aa"],
    ["50,52 68.07,57.87 78.21,90.83", "#cfd5df"], ["50,52 78.21,90.83 50,71", "#7f899c"],
    ["50,52 50,71 21.79,90.83", "#dfe4ec"], ["50,52 21.79,90.83 31.93,57.87", "#98a2b3"],
    ["50,52 31.93,57.87 4.35,37.17", "#f0f3f8"], ["50,52 4.35,37.17 38.83,36.63", "#b3bbc9"],
  ];
  function estrela(classe) {
    return (
      '<svg class="' + (classe || "") + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' +
      '<g stroke="#5d6779" stroke-width="1" stroke-linejoin="round">' +
      FACES.map((f) => '<polygon points="' + f[0] + '" fill="' + f[1] + '"/>').join("") +
      "</g></svg>"
    );
  }

  /* ---------------- Utilitários ---------------- */
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]
    );
  const pad = (n) => String(n).padStart(2, "0");
  const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  const MESES_LONGOS = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho",
    "agosto", "setembro", "outubro", "novembro", "dezembro"];
  const SEMANA = ["dom", "seg", "ter", "qua", "qui", "sex", "sáb"];
  const SEMANA_PLURAL = ["Domingos", "Segundas", "Terças", "Quartas", "Quintas", "Sextas", "Sábados"];

  function criarData(iso, hora) {
    const [a, m, d] = String(iso).split("-").map(Number);
    const [h, mi] = String(hora || "00:00").split(":").map(Number);
    return new Date(a, m - 1, d, h || 0, mi || 0);
  }
  const isoData = (d) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
  const horaTxt = (hhmm) => {
    const [h, m] = String(hhmm).split(":");
    return Number(h) + "h" + (m && m !== "00" ? m : "");
  };
  const faixa = (ini, fim) => horaTxt(ini) + (fim ? " às " + horaTxt(fim) : "");

  function numeroWhats(tel) {
    const n = String(tel || "").replace(/\D/g, "");
    if (n.length < 10) return "";
    return n.startsWith("55") && n.length > 11 ? n : "55" + n;
  }
  function linkWhats(tel, msg) {
    const n = numeroWhats(tel);
    return n ? "https://wa.me/" + n + (msg ? "?text=" + encodeURIComponent(msg) : "") : "";
  }
  const linkMapa = (q) => "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(q);
  const linkEmbed = (q) => "https://maps.google.com/maps?q=" + encodeURIComponent(q) + "&z=15&output=embed";

  const segmentos = () => Object.keys(SEGMENTOS).map((id) => Object.assign({ id: id }, SEGMENTOS[id]));
  const ehSegmento = (id) => Object.prototype.hasOwnProperty.call(SEGMENTOS, id);
  const local = (k) => (k && LOCAIS[k]) || null;
  const nomeLocal = (k) => (local(k) ? local(k).nome : k || "Local a definir");
  const temCadastro = (k) => !!(local(k) && local(k).cadastro);
  const linkCadastro = (k) => (temCadastro(k) && local(k).cadastro.link) || "ensaios.html#" + k;
  const instagramUser = () => String(ESCOLA.instagram || "").replace(/\/+$/, "").split("/").pop();

  /* ---------------- Agenda ---------------- */
  function montarAgenda() {
    const eventos = (AGENDA || []).map((e) => ({
      titulo: e.titulo,
      tipo: e.tipo || "evento",
      local: e.local,
      inicio: criarData(e.data, e.inicio),
      termino: e.fim ? criarData(e.data, e.fim) : null,
      hIni: e.inicio,
      hFim: e.fim,
    }));

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dias = (ESCOLA.semanasNaAgenda || 4) * 7;
    const pausas = ESCOLA.semEnsaio || [];

    segmentos().forEach((s) =>
      (s.ensaios || []).forEach((r) => {
        for (let i = 0; i < dias; i++) {
          const d = new Date(hoje);
          d.setDate(d.getDate() + i);
          if (d.getDay() !== r.dia || pausas.includes(isoData(d))) continue;
          eventos.push({
            titulo: s.curto || s.nome,
            tipo: "ensaio",
            segmento: s.id,
            local: r.local,
            inicio: criarData(isoData(d), r.inicio),
            termino: r.fim ? criarData(isoData(d), r.fim) : null,
            hIni: r.inicio,
            hFim: r.fim,
          });
        }
      })
    );
    const agora = new Date();
    return eventos
      .filter((e) => (e.termino || new Date(e.inicio.getTime() + 4 * 36e5)) > agora)
      .sort((a, b) => a.inicio - b.inicio);
  }

  function linkAgendaGoogle(ev) {
    const f = (d) => "" + d.getFullYear() + pad(d.getMonth() + 1) + pad(d.getDate()) + "T" + pad(d.getHours()) + pad(d.getMinutes()) + "00";
    const fim = ev.termino || new Date(ev.inicio.getTime() + 3 * 36e5);
    const l = local(ev.local);
    const titulo = (ev.tipo === "ensaio" ? "Ensaio " + ev.titulo : ev.titulo) + " · " + ESCOLA.nome;
    const p = new URLSearchParams({
      action: "TEMPLATE",
      text: titulo,
      dates: f(ev.inicio) + "/" + f(fim),
      ctz: "America/Sao_Paulo",
      location: l ? l.endereco : ev.local || "",
    });
    return "https://calendar.google.com/calendar/render?" + p.toString();
  }

  const ROTULO = { ensaio: "Ensaio", evento: "Evento", desfile: "Desfile" };

  function linhaEvento(ev) {
    const tipo = ROTULO[ev.tipo] ? ev.tipo : "evento";
    const cadeado = temCadastro(ev.local) ? icone("escudo", "icone icone--mini") : "";
    return (
      '<li class="linha">' +
      '<div class="data data--' + tipo + '"><b>' + pad(ev.inicio.getDate()) + "</b><span>" + MESES[ev.inicio.getMonth()] + "</span></div>" +
      '<div class="linha__txt"><strong>' + esc(ev.titulo) + "</strong>" +
      "<span>" + (tipo === "ensaio" ? "" : ROTULO[tipo] + " · ") + SEMANA[ev.inicio.getDay()] + " · " + faixa(ev.hIni, ev.hFim) + " · " +
      esc(nomeLocal(ev.local)) + " " + cadeado + "</span></div>" +
      '<a class="botao-icone" href="' + esc(linkAgendaGoogle(ev)) + '" target="_blank" rel="noopener" aria-label="Salvar na agenda do celular" title="Salvar na agenda">' +
      icone("calendarioMais") + "</a></li>"
    );
  }

  function listaEventos(evs, vazio) {
    return evs.length
      ? '<ul class="lista">' + evs.map(linhaEvento).join("") + "</ul>"
      : '<p class="vazio">' + (vazio || "Nada agendado por enquanto.") + "</p>";
  }

  /* ---------------- Pessoas ---------------- */
  function iniciais(nome) {
    if (!nome || /a definir/i.test(nome)) return "";
    const p = nome.trim().split(/\s+/).filter((x) => x.length > 2);
    return p.length ? (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : "")).toUpperCase() : "";
  }

  function linhaPessoa(rotulo, nome, tel) {
    const ini = iniciais(nome);
    const w = linkWhats(tel, "Olá! Vim pelo site da " + ESCOLA.nome + ".");
    return (
      '<li class="linha">' +
      '<div class="avatar">' + (ini ? esc(ini) : estrela()) + "</div>" +
      '<div class="linha__txt"><small>' + esc(rotulo) + "</small><strong>" + esc(nome || "A definir") + "</strong></div>" +
      (w
        ? '<a class="botao-icone botao-icone--verde" href="' + w + '" target="_blank" rel="noopener" aria-label="WhatsApp de ' + esc(nome) + '">' + icone("whatsapp") + "</a>"
        : '<span class="em-breve">em breve</span>') +
      "</li>"
    );
  }

  /* ---------------- Estrutura comum ---------------- */
  const MENU = [
    { id: "inicio", rotulo: "Início", href: "index.html", icone: "casa" },
    { id: "agenda", rotulo: "Agenda", href: "agenda.html", icone: "calendario" },
    { id: "ensaios", rotulo: "Ensaios", href: "ensaios.html", icone: "pin" },
    { id: "segmentos", rotulo: "Segmentos", href: "segmentos.html", icone: "grade" },
    { id: "contato", rotulo: "Contato", href: "contato.html", icone: "telefone" },
  ];
  const secao = ehSegmento(pagina) ? "segmentos" : pagina;
  const atual = (id) => (id === pagina ? ' aria-current="page"' : "");
  const ativo = (id) => (id === secao ? "ativo" : "");

  const marca = () =>
    '<a class="marca" href="index.html">' + estrela("marca__estrela") +
    '<span class="marca__texto"><small>' + esc(ESCOLA.sigla) + "</small><strong>" + esc(ESCOLA.nome) + "</strong></span></a>";

  function montarTopo() {
    const topo = $("#topo");
    if (!topo) return;
    const itens = MENU.map((m) => {
      if (m.id === "segmentos") {
        return (
          '<li class="submenu-pai ' + ativo(m.id) + '"><a href="' + m.href + '"' + atual(m.id) + ">" + m.rotulo +
          icone("seta", "icone icone--mini") + '</a><ul class="submenu">' +
          segmentos().map((s) => '<li><a href="' + s.pagina + '"' + atual(s.id) + ">" + icone(s.icone) + esc(s.nome) + "</a></li>").join("") +
          "</ul></li>"
        );
      }
      return '<li class="' + ativo(m.id) + '"><a href="' + m.href + '"' + atual(m.id) + ">" + m.rotulo + "</a></li>";
    }).join("");
    topo.innerHTML =
      '<div class="container topo__inner">' + marca() +
      '<nav class="menu-desktop" aria-label="Principal"><ul>' + itens + "</ul></nav>" +
      '<button class="btn-menu" type="button" aria-expanded="false" aria-controls="gaveta" aria-label="Abrir menu">' + icone("menu") + "</button></div>";
  }

  function montarGaveta() {
    const botao = $("#topo .btn-menu");
    if (!botao) return;
    const g = document.createElement("div");
    g.className = "gaveta";
    g.id = "gaveta";
    g.innerHTML =
      '<div class="gaveta__fundo" data-fechar></div>' +
      '<nav class="gaveta__painel" aria-label="Menu">' +
      '<div class="gaveta__topo">' + marca() +
      '<button class="btn-menu" type="button" data-fechar aria-label="Fechar menu">' + icone("fechar") + "</button></div>" +
      MENU.map((m) => {
        let h = '<a href="' + m.href + '" class="' + ativo(m.id) + '"' + atual(m.id) + ">" + icone(m.icone) + m.rotulo + "</a>";
        if (m.id === "segmentos") {
          h += '<div class="gaveta__sub">' + segmentos().map((s) =>
            '<a href="' + s.pagina + '" class="' + (s.id === pagina ? "ativo" : "") + '"' + atual(s.id) + ">" + esc(s.nome) + "</a>").join("") + "</div>";
        }
        return h;
      }).join("") +
      (ESCOLA.instagram ? '<a class="gaveta__insta" href="' + esc(ESCOLA.instagram) + '" target="_blank" rel="noopener">' + icone("instagram") + "@" + esc(instagramUser()) + "</a>" : "") +
      "</nav>";
    document.body.appendChild(g);

    const fecharBtn = $("button[data-fechar]", g);
    const abrir = () => {
      g.classList.add("aberta");
      botao.setAttribute("aria-expanded", "true");
      document.body.classList.add("sem-rolagem");
      fecharBtn.focus();
    };
    const fechar = () => {
      g.classList.remove("aberta");
      botao.setAttribute("aria-expanded", "false");
      document.body.classList.remove("sem-rolagem");
      botao.focus();
    };
    botao.addEventListener("click", abrir);
    g.addEventListener("click", (e) => {
      if (e.target.closest("[data-fechar]") || e.target.closest("a")) fechar();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && g.classList.contains("aberta")) fechar();
    });
  }

  function montarBarra() {
    const barra = $("#barra-inferior");
    if (!barra) return;
    barra.setAttribute("aria-label", "Atalhos");
    barra.innerHTML = "<ul>" + MENU.map((m) =>
      '<li><a href="' + m.href + '" class="' + ativo(m.id) + '"' + atual(m.id) + ">" + icone(m.icone) + "<span>" + m.rotulo + "</span></a></li>"
    ).join("") + "</ul>";
  }

  function montarRodape() {
    const rod = $("#rodape");
    if (!rod) return;
    rod.innerHTML =
      '<div class="container rodape__inner">' +
      '<span class="rodape__logo"><img src="img/logo-estandarte.jpg" alt="" width="645" height="799" loading="lazy"></span>' +
      "<strong>" + esc(ESCOLA.sigla + " " + ESCOLA.nome) + "</strong>" +
      "<span>" + esc(ESCOLA.cidade) + " · desde " + ESCOLA.fundacao.slice(0, 4) + "</span>" +
      (ESCOLA.instagram ? '<a class="rodape__insta" href="' + esc(ESCOLA.instagram) + '" target="_blank" rel="noopener">' + icone("instagram") + "@" + esc(instagramUser()) + "</a>" : "") +
      '<small>© ' + new Date().getFullYear() + " " + esc(ESCOLA.nomeCompleto) + "</small></div>";
  }

  function montarAviso() {
    const main = $("main");
    if (!main || !ESCOLA.aviso) return;
    const div = document.createElement("div");
    div.className = "aviso";
    div.textContent = ESCOLA.aviso;
    main.prepend(div);
  }

  /* ---------------- Peças reutilizáveis ---------------- */
  function tile(s) {
    return (
      '<a class="tile" href="' + s.pagina + '" style="--cor:' + esc(s.cor) + '">' +
      '<span class="tile__icone">' + icone(s.icone) + "</span>" +
      "<strong>" + esc(s.nome) + "</strong></a>"
    );
  }

  function botaoCadastro(k, classeExtra) {
    const l = local(k);
    if (!temCadastro(k)) return "";
    return l.cadastro.link
      ? '<a class="btn btn--ouro ' + (classeExtra || "") + '" href="' + esc(l.cadastro.link) + '" target="_blank" rel="noopener">' + icone("escudo") + "Fazer cadastro de acesso" + icone("externo", "icone icone--mini") + "</a>"
      : '<span class="btn btn--desativado ' + (classeExtra || "") + '">' + icone("escudo") + "Link do cadastro em breve</span>";
  }

  /* ---------------- Início ---------------- */
  function renderInicio() {
    const cont = $("#contagem");
    if (cont && ESCOLA.carnaval) {
      const alvo = criarData(ESCOLA.carnaval.data);
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      const dias = Math.round((alvo - hoje) / 864e5);
      if (dias > 0) cont.innerHTML = estrela() + "<span>Faltam <b>" + dias + " dia" + (dias > 1 ? "s" : "") + "</b> para o " + esc(ESCOLA.carnaval.titulo) + "</span>";
      else if (dias === 0) cont.innerHTML = estrela() + "<span><b>É hoje!</b> Bom desfile, Estrela!</span>";
      else cont.hidden = true;
    }
    const prox = $("#proximos");
    if (prox) prox.innerHTML = listaEventos(montarAgenda().slice(0, 3));
  }

  /* ---------------- Tiles de segmentos ---------------- */
  function renderTiles() {
    $$("[data-tiles]").forEach((el) => (el.innerHTML = segmentos().map(tile).join("")));
  }

  /* ---------------- Agenda ---------------- */
  function renderAgenda() {
    const alvo = $("#agenda");
    if (!alvo) return;
    const todos = montarAgenda();
    let filtro = "todos";

    const chips = $("#chips");
    const temEventos = todos.some((e) => e.tipo !== "ensaio");
    if (chips && temEventos) {
      chips.hidden = false;
      $$("[data-filtro]", chips).forEach((b) =>
        b.addEventListener("click", () => {
          filtro = b.dataset.filtro;
          $$("[data-filtro]", chips).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
          desenhar();
        })
      );
    }

    function desenhar() {
      const evs = todos.filter((e) =>
        filtro === "todos" || (filtro === "ensaio" ? e.tipo === "ensaio" : e.tipo !== "ensaio"));
      if (!evs.length) {
        alvo.innerHTML = '<p class="vazio">Nada agendado por enquanto.</p>';
        return;
      }
      const grupos = [];
      evs.forEach((e) => {
        const chave = e.inicio.getFullYear() * 12 + e.inicio.getMonth();
        let g = grupos[grupos.length - 1];
        if (!g || g.chave !== chave) grupos.push((g = { chave: chave, data: e.inicio, itens: [] }));
        g.itens.push(e);
      });
      alvo.innerHTML = grupos.map((g) =>
        '<h2 class="mes">' + MESES_LONGOS[g.data.getMonth()] + " <span>" + g.data.getFullYear() + "</span></h2>" + listaEventos(g.itens)
      ).join("");
    }
    desenhar();
  }

  /* ---------------- Ensaios / locais ---------------- */
  function renderLocais() {
    const alvo = $("#locais");
    if (!alvo) return;
    alvo.innerHTML = Object.keys(LOCAIS).map((k) => {
      const l = LOCAIS[k];
      const quem = [];
      segmentos().forEach((s) => (s.ensaios || []).forEach((r) => {
        if (r.local === k) quem.push({ s: s, r: r });
      }));
      quem.sort((a, b) => ((a.r.dia + 6) % 7) - ((b.r.dia + 6) % 7));

      const lista = quem.length
        ? '<ul class="lista lista--plana">' + quem.map((q) =>
            '<li><a class="linha" href="' + q.s.pagina + '">' +
            '<span class="ponto" style="--cor:' + esc(q.s.cor) + '">' + icone(q.s.icone) + "</span>" +
            '<span class="linha__txt"><strong>' + esc(q.s.nome) + "</strong><span>" +
            SEMANA_PLURAL[q.r.dia] + " · " + faixa(q.r.inicio, q.r.fim) + "</span></span>" +
            icone("direita", "icone seta-linha") + "</a></li>").join("") + "</ul>"
        : "";

      const cadastro = temCadastro(k)
        ? '<div class="cadastro"><h3>' + icone("escudo") + "Como entrar</h3><ol>" +
          (l.cadastro.passos || []).map((p) => "<li>" + esc(p) + "</li>").join("") + "</ol>" +
          botaoCadastro(k, "btn--largo") + "</div>"
        : "";

      const mapa = l.mapa
        ? '<div class="mapa"><iframe title="Mapa: ' + esc(l.nome) + '" src="' + linkEmbed(l.mapa) + '" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>' +
          '<a class="btn btn--claro btn--largo" href="' + linkMapa(l.mapa) + '" target="_blank" rel="noopener">' + icone("rota") + "Como chegar</a>"
        : "";

      return (
        '<article class="local" id="' + esc(k) + '">' +
        '<header class="local__topo"><div><h2>' + esc(l.nome) + "</h2>" +
        '<p class="local__end">' + icone("pin", "icone icone--mini") + esc(l.endereco) + "</p></div>" +
        (temCadastro(k) ? '<span class="selo">' + icone("escudo", "icone icone--mini") + "Cadastro</span>" : "") +
        "</header>" +
        (l.descricao ? '<p class="local__desc">' + esc(l.descricao) + "</p>" : "") +
        lista + cadastro + mapa +
        "</article>"
      );
    }).join("");
  }

  /* ---------------- Página de segmento ---------------- */
  function renderSegmento() {
    const alvo = $("#segmento");
    if (!alvo) return;
    const id = alvo.dataset.id;
    const s = SEGMENTOS[id];
    if (!s) return;

    const ensaios = (s.ensaios || []).map((r) =>
      '<li class="linha">' +
      '<span class="ponto" style="--cor:' + esc(s.cor) + '">' + icone("calendario") + "</span>" +
      '<span class="linha__txt"><strong>' + SEMANA_PLURAL[r.dia] + " · " + faixa(r.inicio, r.fim) + "</strong>" +
      '<span><a href="ensaios.html#' + esc(r.local) + '">' + esc(nomeLocal(r.local)) + "</a></span></span></li>"
    ).join("");
    const locaisComCadastro = Array.from(new Set((s.ensaios || []).map((r) => r.local))).filter(temCadastro);

    const alas = (s.lista || []).length
      ? '<h2 class="titulo-secao">Nossas alas</h2><ul class="lista">' +
        s.lista.map((a) => linhaPessoa(a.nome, a.responsavel, a.telefone)).join("") + "</ul>"
      : "";

    const proximos = montarAgenda().filter((e) => e.segmento === id).slice(0, 3);

    alvo.style.setProperty("--cor", s.cor);
    alvo.innerHTML =
      '<section class="cabeca cabeca--seg">' +
      '<div class="container container--estreito">' +
      '<a class="voltar" href="segmentos.html">' + icone("direita", "icone icone--mini icone--vira") + "Segmentos</a>" +
      '<span class="cabeca__icone">' + icone(s.icone) + "</span>" +
      "<h1>" + esc(s.nome) + "</h1>" +
      (s.resumo ? "<p>" + esc(s.resumo) + "</p>" : "") +
      "</div></section>" +
      '<div class="container container--estreito conteudo">' +
      '<h2 class="titulo-secao">Ensaios</h2>' +
      '<ul class="lista">' + (ensaios || '<li class="linha"><span class="linha__txt"><span>Horário a definir</span></span></li>') + "</ul>" +
      locaisComCadastro.map((k) => '<div class="aviso-cadastro">' + icone("escudo") + "<p>O ensaio no " + esc(nomeLocal(k)) + " exige cadastro prévio.</p>" + botaoCadastro(k, "btn--largo") + "</div>").join("") +
      '<h2 class="titulo-secao">Responsáveis</h2>' +
      '<ul class="lista">' + (s.responsaveis || []).map((p) => linhaPessoa(p.funcao, p.nome, p.telefone)).join("") + "</ul>" +
      alas +
      '<h2 class="titulo-secao">Próximas datas <a href="agenda.html">Agenda ' + icone("direita", "icone icone--mini") + "</a></h2>" +
      listaEventos(proximos, "Nenhum ensaio agendado.") +
      "</div>";
  }

  /* ---------------- Contato ---------------- */
  function renderContato() {
    const dir = $("#diretoria");
    if (dir) dir.innerHTML = '<ul class="lista">' + (DIRETORIA || []).map((p) => linhaPessoa(p.funcao, p.nome, p.telefone)).join("") + "</ul>";

    const seg = $("#por-segmento");
    if (seg) {
      seg.innerHTML = '<ul class="lista">' + segmentos().map((s) =>
        '<li><a class="linha" href="' + s.pagina + '">' +
        '<span class="ponto" style="--cor:' + esc(s.cor) + '">' + icone(s.icone) + "</span>" +
        '<span class="linha__txt"><strong>' + esc(s.nome) + "</strong><span>" +
        esc((s.responsaveis || []).map((p) => p.funcao).join(" · ")) + "</span></span>" +
        icone("direita", "icone seta-linha") + "</a></li>").join("") + "</ul>";
    }

    const w = linkWhats(ESCOLA.whatsapp, "Olá! Vim pelo site da " + ESCOLA.nome + ".");
    const zap = $("#whats-geral");
    if (zap && w) {
      zap.hidden = false;
      zap.href = w;
    }
  }

  /* ---------------- Preenchimentos simples ---------------- */
  function preencher() {
    $$("[data-icone]").forEach((el) => (el.innerHTML = icone(el.dataset.icone)));
    $$("[data-estrela]").forEach((el) => (el.innerHTML = estrela()));
    $$("[data-instagram]").forEach((a) => {
      if (!ESCOLA.instagram) return a.remove();
      a.href = ESCOLA.instagram;
      const u = $("[data-instagram-user]", a);
      if (u) u.textContent = "@" + instagramUser();
    });
  }

  /* ---------------- Proteção do conteúdo ----------------
     Bloqueia copiar, menu de contexto, arrastar e zoom, e cobre a tela
     de preto quando o site perde o foco (troca de app, ferramenta de
     recorte, impressão). Obs.: o print do sistema do celular não pode
     ser bloqueado por nenhum site. */
  function protegerConteudo() {
    const editavel = (el) => el && el.closest && el.closest("input, textarea, select");
    const bloquear = (e) => { if (!editavel(e.target)) e.preventDefault(); };
    ["copy", "cut", "contextmenu", "selectstart", "dragstart"].forEach((t) => document.addEventListener(t, bloquear));

    // Atalhos de teclado: copiar, recortar, selecionar tudo, salvar, imprimir, código-fonte, zoom
    document.addEventListener("keydown", (e) => {
      const k = (e.key || "").toLowerCase();
      if ((e.ctrlKey || e.metaKey) && ["c", "x", "a", "s", "p", "u", "+", "-", "=", "0"].includes(k)) e.preventDefault();
      if (k === "printscreen") ocultar();
    });
    document.addEventListener("keyup", (e) => {
      if ((e.key || "").toLowerCase() === "printscreen") {
        ocultar();
        if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText("").catch(() => {});
        setTimeout(mostrar, 1500);
      }
    });

    // Zoom: pinça (iPhone), dois dedos (Android) e Ctrl + roda do mouse
    ["gesturestart", "gesturechange", "gestureend"].forEach((t) => document.addEventListener(t, (e) => e.preventDefault()));
    document.addEventListener("touchmove", (e) => { if (e.touches && e.touches.length > 1) e.preventDefault(); }, { passive: false });
    document.addEventListener("wheel", (e) => { if (e.ctrlKey) e.preventDefault(); }, { passive: false });

    // Imagens não arrastáveis
    $$("img").forEach((img) => img.setAttribute("draggable", "false"));

    // Capa preta
    const capa = document.createElement("div");
    capa.className = "protecao";
    capa.setAttribute("aria-hidden", "true");
    document.body.appendChild(capa);
    function ocultar() { document.documentElement.classList.add("oculto"); }
    function mostrar() { document.documentElement.classList.remove("oculto"); }
    window.addEventListener("blur", () => {
      // tocar no mapa (iframe) também tira o foco da página: nesse caso não escurece
      setTimeout(() => {
        if (!(document.activeElement && document.activeElement.tagName === "IFRAME")) ocultar();
      }, 0);
    });
    window.addEventListener("focus", mostrar);
    document.addEventListener("visibilitychange", () => (document.hidden ? ocultar() : mostrar()));
    window.addEventListener("pagehide", ocultar);
    window.addEventListener("pageshow", mostrar);
    window.addEventListener("beforeprint", ocultar);
    window.addEventListener("afterprint", mostrar);
  }

  function iniciar() {
    protegerConteudo();
    montarTopo();
    montarGaveta();
    montarBarra();
    montarRodape();
    montarAviso();
    preencher();
    renderInicio();
    renderTiles();
    renderAgenda();
    renderLocais();
    renderSegmento();
    renderContato();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", iniciar);
  else iniciar();
})();
