/* =====================================================================
   DADOS DO SITE — G.R.E.S. ESTRELA DE PRATA
   ---------------------------------------------------------------------
   Este é o único arquivo que você precisa editar para mudar o conteúdo.

   Dicas rápidas:
   - Texto sempre entre aspas: "assim".
   - Telefone: "(12) 99123-4567". Vazio ("") = aparece "em breve".
   - Data: "AAAA-MM-DD"  (ex.: "2026-12-06")
   - Hora: "HH:MM"       (ex.: "20:00")
   - Dia da semana: 0 dom · 1 seg · 2 ter · 3 qua · 4 qui · 5 sex · 6 sáb
   ===================================================================== */

const ESCOLA = {
  sigla: "G.R.E.S.",
  nome: "Estrela de Prata",
  nomeCompleto: "Grêmio Recreativo Escola de Samba Estrela de Prata",
  fundacao: "2000-05-15",
  cidade: "São José dos Campos - SP",

  instagram: "https://www.instagram.com/estreladepratavilamaria/",
  whatsapp: "", // WhatsApp geral da escola (opcional)

  carnaval: { titulo: "Carnaval 2027", data: "2027-02-06" },

  semanasNaAgenda: 4, // quantas semanas de ensaios aparecem na agenda
  semEnsaio: ["2026-12-24", "2026-12-25", "2026-12-31", "2027-01-01"], // feriados/recessos

  // Faixa de aviso no topo. Apague o texto ("") quando os dados forem os reais.
  aviso: "Site em construção · horários provisórios",
};

/* ---------------------------------------------------------------------
   LOCAIS DE ENSAIO
   --------------------------------------------------------------------- */
const LOCAIS = {
  cta: {
    nome: "CTA",
    descricao: "A bateria ensaia dentro do DCTA. A entrada só é liberada com cadastro.",
    endereco: "Praça Marechal Eduardo Gomes, 50 - Vila das Acácias",
    mapa: "DCTA Praça Marechal Eduardo Gomes 50 São José dos Campos", // o que buscar no Google Maps
    cadastro: {
      link: "", // ← cole aqui o link do formulário do Teams
      passos: [
        "Preencha o formulário de cadastro antes do ensaio.",
        "Leve um documento com foto (RG ou CNH).",
        "Na portaria, informe que vai ao ensaio da Estrela de Prata.",
      ],
    },
  },

  quadra: {
    nome: "Quadra",
    descricao: "Ensaios das alas, passistas, casal e ala musical.",
    endereco: "Endereço a definir",
    mapa: "", // preencha com o endereço para o mapa aparecer
  },
};

/* ---------------------------------------------------------------------
   SEGMENTOS — cada um tem sua página
   ensaios: dia fixo da semana (entra sozinho na agenda)
   --------------------------------------------------------------------- */
const SEGMENTOS = {
  bateria: {
    nome: "Bateria",
    pagina: "bateria.html",
    icone: "tambor",
    cor: "#0f3290",
    resumo: "O coração da escola.",
    ensaios: [{ dia: 4, inicio: "20:00", fim: "22:30", local: "cta" }],
    responsaveis: [
      { funcao: "Mestre de Bateria", nome: "A definir", telefone: "" },
      { funcao: "Diretor(a) de Bateria", nome: "A definir", telefone: "" },
    ],
  },

  casal: {
    nome: "Mestre-sala e Porta-bandeira",
    curto: "Casal",
    pagina: "casal.html",
    icone: "bandeira",
    cor: "#b98a0c",
    resumo: "A guarda do nosso pavilhão.",
    ensaios: [{ dia: 2, inicio: "19:30", fim: "21:30", local: "quadra" }],
    responsaveis: [
      { funcao: "1º Mestre-sala", nome: "A definir", telefone: "" },
      { funcao: "1ª Porta-bandeira", nome: "A definir", telefone: "" },
    ],
  },

  alas: {
    nome: "Alas",
    pagina: "alas.html",
    icone: "pessoas",
    cor: "#0a6b35",
    resumo: "A comunidade na avenida.",
    ensaios: [{ dia: 6, inicio: "16:00", fim: "19:00", local: "quadra" }],
    responsaveis: [{ funcao: "Diretor(a) de Alas", nome: "A definir", telefone: "" }],
    // Lista das alas (só aparece na página de Alas)
    lista: [
      { nome: "Comissão de Frente", responsavel: "A definir", telefone: "" },
      { nome: "Ala das Baianas", responsavel: "A definir", telefone: "" },
      { nome: "Velha Guarda", responsavel: "A definir", telefone: "" },
      { nome: "Ala das Crianças", responsavel: "A definir", telefone: "" },
    ],
  },

  passistas: {
    nome: "Passistas",
    pagina: "passistas.html",
    icone: "brilho",
    cor: "#2457d6",
    resumo: "Samba no pé e brilho.",
    ensaios: [{ dia: 6, inicio: "14:00", fim: "16:00", local: "quadra" }],
    responsaveis: [
      { funcao: "Rainha de Bateria", nome: "A definir", telefone: "" },
      { funcao: "Coordenação de Passistas", nome: "A definir", telefone: "" },
    ],
  },

  musical: {
    nome: "Ala Musical",
    pagina: "ala-musical.html",
    icone: "musica",
    cor: "#55702a",
    resumo: "A voz do samba-enredo.",
    ensaios: [{ dia: 3, inicio: "20:00", fim: "22:00", local: "quadra" }],
    responsaveis: [
      { funcao: "Intérprete Oficial", nome: "A definir", telefone: "" },
      { funcao: "Diretor(a) Musical", nome: "A definir", telefone: "" },
    ],
  },
};

/* ---------------------------------------------------------------------
   AGENDA — eventos especiais (os ensaios semanais já entram sozinhos)
   tipo: "ensaio" | "evento" | "desfile"
   local: "cta", "quadra" ou um texto livre (ex.: "Passarela do samba")

   Exemplo (copie, tire as // e preencha):
   // { data: "2026-12-06", inicio: "12:00", fim: "18:00", titulo: "Feijoada da Estrela", tipo: "evento", local: "quadra" },
   --------------------------------------------------------------------- */
const AGENDA = [
];

/* ---------------------------------------------------------------------
   DIRETORIA — aparece na página de Contato
   --------------------------------------------------------------------- */
const DIRETORIA = [
  { funcao: "Presidente", nome: "A definir", telefone: "" },
  { funcao: "Vice-presidente", nome: "A definir", telefone: "" },
  { funcao: "Diretor(a) de Carnaval", nome: "A definir", telefone: "" },
];
