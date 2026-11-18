# G.R.E.S. Estrela de Prata — Site

Site do **Grêmio Recreativo Escola de Samba Estrela de Prata**, fundada em 15 de maio de 2000 em São José dos Campos - SP.

Site estático (HTML, CSS e JavaScript), publicado no **GitHub Pages** e pensado primeiro para o celular.

## Como mudar o conteúdo

Tudo fica em **um único arquivo: [`js/dados.js`](js/dados.js)**.

| Parte | O que muda |
|---|---|
| `ESCOLA` | Instagram, WhatsApp geral, data do Carnaval, feriados sem ensaio e a faixa de aviso |
| `LOCAIS` | Endereços e o **link do formulário de cadastro do CTA** (`cadastro.link`) |
| `SEGMENTOS` | Dia e horário dos ensaios, responsáveis e telefones |
| `AGENDA` | Eventos especiais. Os ensaios semanais entram sozinhos. |
| `DIRETORIA` | Presidente, vice etc. |

Depois de editar, faça commit e push: o GitHub Pages atualiza o site em 1 ou 2 minutos.

## Páginas

- `index.html`: início
- `agenda.html`: agenda
- `ensaios.html`: locais e cadastro do CTA
- `segmentos.html`: lista de segmentos
- `contato.html`: contatos
- `bateria.html`, `casal.html`, `alas.html`, `passistas.html`, `ala-musical.html`: uma página por segmento, montada a partir do `dados.js`

## Publicação (GitHub Pages)

Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main` e pasta `/ (root)`.
Endereço: https://salatielferreira.github.io/Estrela/
