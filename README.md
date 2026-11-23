# 📊 Census — O Jogo dos Rankings

> **Desafie seu conhecimento e a intuição dos seus amigos descobrindo o que está no topo das listas mais populares e inusitadas!**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Web Audio API](https://img.shields.io/badge/Web_Audio_API-000000?style=for-the-badge&logo=webrtc&logoColor=white)
![License MIT](https://img.shields.io/badge/Licen%C3%A7a-MIT-green?style=for-the-badge)

---

## 🎯 Sobre o Jogo

O **Census** é um jogo web interativo de *trivia*, adivinhação e *party game* inspirado em dinâmicas populares de rankings (*"É Top?"* / *"Top 10"*). O objetivo principal é adivinhar os itens que compõem o **Top 10** ou **Top 5** de diversas categorias temáticas — que variam de dados geográficos e cultura pop a curiosidades e conhecimentos gerais.

Criado especialmente para ser jogado em grupo em momentos descontraídos — como viagens, na mesa do bar/restaurante aguardando o pedido, ou no aquecimento da *game night* com a galera —, o jogo combina lógica de correspondência inteligente (*fuzzy search*) com animações fluidas e sintetização sonora nativa no navegador.

---

## 🎮 Como Jogar

O jogo adapta-se perfeitamente tanto ao modo **solo** (desafio individual) quanto ao modo **grupo / party game**:

### 🎲 Regras do Modo em Grupo (Desafio & Contestação)
1. **Configuração da Rodada:** Escolha a quantidade de itens (**Top 10** ou **Top 5**) e selecione um tema da lista (ou clique em **Sorteie um Tema** para surpresa).
2. **Turnos de Palpites:** Dois ou mais jogadores, um a um, dizem em voz alta seu palpite sobre o tema da rodada.
3. **Mecânica de Contestação:**
   - A qualquer momento, se um jogador duvidar do palpite de outro, ele pode **contestar**.
      - Nesse momento então, o palpite é enviado na tela:
         - ❌ **Não está no Top (Palpite Errado):** O jogador que deu o palpite errado é **eliminado** da rodada.
         - ✅ **Está na lista (Palpite Certo):** O item é revelado no ranking com efeito visual/sonoro e o jogador que **contestou** é quem é **eliminado**.
   - Se ninguem **contestou** a rodada apenas segue para o próximo jogador (sem a necessidade de verificar na lista).
4. **Vitória:** A partida continua até restar apenas um jogador (o grande campeão da rodada), ou até que todos os itens da lista sejam totalmente revelados!

### ⌨️ Usabilidade & Atalhos de Teclado
- **Tecla `Enter`:** Envia o palpite no campo de busca. Caso surja o modal de erro (*"não está na lista"*), pressionar `Enter` novamente fecha o aviso instantaneamente e devolve o cursor ao campo de texto para o próximo palpite.
- **Tecla `Esc`:** Fecha telas de ajuda e modais abertos.
- **Botão 👁️ (Testar o palpite):** Verifica se o palpite pertence a lista.
- **Botão 👀 (Revelar Tudo):** Revela o gabarito completo da lista.
- **Botão ❔ (Ajuda):** Abre as instruções rápidas na tela inicial.
- **Botão 🏠 (Home):** Abre a janela de configurações.

---

## 🧠 Algoritmos & Recursos Inteligentes

* **Comparação Flexível (Fuzzy Matching):** Utiliza o algoritmo de **Distância de Levenshtein** (~78% de similaridade) para aceitar respostas com pequenos erros de digitação ou variações ortográficas.
* **Respostas Múltiplas / Aliases:** Suporte a sinônimos e siglas por item (ex.: digitar `"EUA"` ou `"Estados Unidos da América"` valida e revela o item oficial `"Estados Unidos"` na tela).
* **Filtro Dinâmico de StopWords:** Remove artigos e preposições genéricas, além de permitir `stopWords` personalizadas por item (ex.: no item `"Ilha Ellesmere"`, a palavra `"Ilha"` pode ser desconsiderada, aceitando diretamente `"Ellesmere"`).
* **Sintetizador Sonoro Nativo (Web Audio API):** Feedback sonoro para acertos e erros gerado via código (osciladores senoidais e triangulares), sem necessidade de carregar arquivos MP3 externos.
* **Efeitos Visuais:** Animação de confetes em Canvas nativo ao completar 100% da lista.

---

## 📁 Categorias & Temas

O jogo conta com um acervo dinâmico de temas divididos entre conhecimento geral e entretenimento:

* 🌍 **Geografia & Mundo:** Países mais populosos, maiores ilhas do mundo, capitais, maiores extensões territoriais.
* 🎬 **Cinema & Cultura Pop:** Filmes de maior bilheteria, artistas mais ouvidos, franquias de mídia.
* ⚽ **Esportes & Lazer:** Maiores campeões de torneios, esportes mais praticados.
* 🍔 **Gastronomia & Estilo de Vida:** Alimentos mais consumidos, marcas valiosas.
* 💡 **Curiosidades Diversas:** Dados estatísticos fascinantes e rankings surpreendentes.

---

## 🚀 Tecnologias Utilizadas

O projeto é desenvolvido puramente em **Vanilla JavaScript** (Front-end sem frameworks externos), garantindo performance extrema e carregamento instantâneo:

- **HTML5:** Estrutura semântica e acessível (`aria-label`, suporte a leitores de tela e navegação por teclado).
- **CSS3:** Layout responsivo, suporte a *Dark Mode*, variáveis CSS e animações fluidas.
- **JavaScript (ES6+):** Manipulação de DOM, algoritmos de busca fuzzy (Levenshtein), gerenciamento de estado e manipulação de eventos.
- **Web Audio API:** Síntese de efeitos sonoros diretamente via código JS.
- **HTML5 Canvas API:** Renderização da animação de celebração com confetes.
- **PWA Ready (`site.webmanifest`):** Configurado para instalação como aplicativo web no celular ou desktop.

---

## 🛠️ Como Executar Localmente

Como a aplicação é 100% *client-side*, não é necessário instalar dependências do Node.js ou configurar banco de dados.

### Passos:
1. **Clone o repositório:**   
2. **Acesse a pasta do projeto:**
3. **Abra o jogo no navegador:**
   - **Direto no navegador:** Dê um duplo clique no arquivo `index.html`, ou
   - **Via VS Code:** Utilize a extensão **Live Server** no VS Code para rodar um servidor local em `http://127.0.0.1:5500`.
   - **Via PowerShell (Python):**
     ```powershell
     cd "c:\census"
     python -m http.server 8000
     ```
     *(e acessar `http://localhost:8000` no navegador)*
---

## 📂 Estrutura de Pastas

```text
census/
├── index.html            # Interface principal do jogo e estrutura dos modais
├── main.css              # Estilização completa, temas de cores e layout responsivo
├── main.js               # Lógica do jogo, controle de modais, áudio e verificação de palpites
├── themes.js             # Base de dados dos temas (gabaritos, aliases e stopWords)
├── site.webmanifest      # Manifesto de configuração PWA
├── favicon.svg           # Ícone do projeto
├── favicon-32x32.png     # Ícone do projeto
├── favicon-180x180.png   # Ícone do projeto
├── favicon-512x512.png   # Ícone do projeto
└── README.md             # Documentação do repositório
```

---

## 🤝 Contribuição

Contribuições são super bem-vindas! Se você tem ideias para **novos temas**, sugestões de **aliases** ou melhorias no algoritmo:

1. Faça um **Fork** do repositório.
2. Crie uma branch para a sua feature: `git checkout -b feature/novo-tema`.
3. Edite ou adicione novos temas no arquivo `themes.js`.
4. Abra um **Pull Request** explicando as adições realizadas.

---

## 📜 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

<p center="align">
  Feito com ❤️ para animar viagens, encontros e <i>game nights</i>!
</p>