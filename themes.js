const GAME_THEMES = [
    {
        theme: "Países mais populosos",
        items: [
            "Índia",
            "China",
            {name: "Estados Unidos", aliases: ["eua", "estados unidos da américa"], stopWords: []},
            "Indonésia",
            "Paquistão",
            "Nigéria",
            "Brasil",
            "Bangladesh",
            "Rússia",
            "Etiópia"
        ]
    },
    {
        theme: "Maiores países em área territorial",
        items: [
            "Rússia",
            "Canadá",
            "China",
            {name: "Estados Unidos", aliases: ["eua", "estados unidos da américa"], stopWords: []},
            "Brasil",
            "Austrália",
            "Índia",
            "Argentina",
            "Cazaquistão",
            "Argélia"
        ]
    },
    {
        theme: "Países mais visitados por turistas no mundo",
        items: [
            "França",
            "Espanha",
            {name: "Estados Unidos", aliases: ["eua", "estados unidos da américa"], stopWords: []},
            "Itália",
            "Turquia",
            "México",
            {name: "Reino Unido", aliases: ["uk"], stopWords: []},
            "Alemanha",
            "Grécia",
            "Áustria"
        ]
    },
    {
        theme: "Maiores ilhas do mundo",
        items: [
            "Groenlândia",
            "Nova Guiné",
            "Bornéu",
            "Madagascar",
            "Ilha de Baffin",
            "Sumatra",
            "Honshu",
            "Ilha Victoria",
            "Grã-Bretanha",
            { name: "Ilha Ellesmere", stopWords: ["ilha", "ilhas"] }
        ]
    },
    {
        theme: "Países que mais falam inglês (em número total de falantes, incluindo segunda língua)",
        items: [
            {name: "Estados Unidos", aliases: ["eua", "estados unidos da américa"], stopWords: []},
            "Índia",
            "Paquistão",
            "Nigéria",
            "Filipinas",
            {name: "Reino Unido", aliases: ["uk"], stopWords: []},
            "Alemanha",
            "Canadá",
            "Austrália",
            "Uganda"
        ]
    },
    {
        theme: "Cidades mais populosas do mundo",
        items: [
            "Tóquio",
            "Délhi",
            "Xangai",
            "Daca",
            "São Paulo",
            "Cairo",
            {name: "Cidade do México", aliases: ["cdmx", "mexico"], stopWords: ["cidade"]},
            {name: "Pequim", aliases: ["beijing"], stopWords: []},
            "Mumbai",
            "Osaka"
        ]
    },
    {
        theme: "Estados mais populosos do Brasil",
        items: [
            "São Paulo",
            "Minas Gerais",
            "Rio de Janeiro",
            "Bahia",
            "Paraná",
            "Rio Grande do Sul",
            "Pernambuco",
            "Ceará",
            "Pará",
            "Santa Catarina"
        ]
    },
    {
        theme: "Maiores estados brasileiros em extensão territorial",
        items: [
            "Amazonas",
            "Pará",
            "Mato Grosso",
            "Minas Gerais",
            "Bahia",
            "Mato Grosso do Sul",
            "Goiás",
            "Maranhão",
            "Rio Grande do Sul",
            "Tocantins"
        ]
    },
    {
        theme: "Cidades mais frias do Brasil",
        items: [
            "Urupema",
            "São Joaquim",
            "Urubici",
            "Bom Jardim da Serra",
            "General Carneiro",
            "Campos do Jordão",
            "São José dos Ausentes",
            "Monte Verde",            
            {name: "Palmas (PR)", aliases: ["palmas"], stopWords: ["(pr)"]},
            "Maria da Fé"
        ]
    },
    {
        theme: "Cidades mais quentes do Brasil",
        items: [
            "Teresina",            
            {name: "Palmas (TO)", aliases: ["palmas"], stopWords: ["(to)"]},
            "Cuiabá",
            "Boa Vista",
            "Picos",
            "Bom Jesus",
            "Oeiras",
            "Mossoró",
            "Araçuaí",
            "Corumbá"
        ]
    },
    {
        theme: "Times brasileiros com mais títulos do Campeonato Brasileiro",
        items: [
            "Palmeiras",
            "Santos",
            "Flamengo",
            "Corinthians",
            "São Paulo",
            "Cruzeiro",
            "Fluminense",
            "Vasco da Gama",
            {name: "Vasco da Gama", aliases: ["vasco"], stopWords: ["gama"]},
            "Internacional",
            "Atlético Mineiro"
        ]
    },
    {
        theme: "Filmes com maior bilheteria da história",
        items: [
            "Avatar",            
            {name: "Vingadores: Ultimato", aliases: ["ultimato"], stopWords: ["vingadores:"]},
            {name: "Avatar: O Caminho da Água", aliases: ["caminho agua"], stopWords: ["avatar:"]},
            "Titanic",
            {name: "Star Wars: O Despertar da Força", aliases: ["despertar força"], stopWords: ["star wars:"]},
            {name: "Vingadores: Guerra Infinita", aliases: ["guerra infinita"], stopWords: ["vingadores:"]},
            {name: "Homem-Aranha: Sem Volta Para Casa", aliases: ["volta casa", "sem volta para casa"], stopWords: ["homem-aranha:"]},
            {name: "Divertida Mente 2", aliases: [], stopWords: ["2"]},            
            "Jurassic World",
            {name: "O Rei Leão (2019)", aliases: [], stopWords: ["(2019)"]}
        ]
    },
    {
        theme: "Músicas mais ouvidas da história no Spotify Global (até 2025)",
        items: [
            {name: "Blinding Lights - The Weeknd", aliases: ["blinding lights"], stopWords: []},
            {name: "Shape of You - Ed Sheeran", aliases: ["shape you"], stopWords: ["of"]},
            {name: "Someone You Loved - Lewis Capaldi", aliases: ["someone you loved"], stopWords: []},            
            {name: "Starboy - The Weeknd", aliases: ["starboy"], stopWords: []},            
            {name: "As It Was - Harry Styles", aliases: ["was"], stopWords: []},            
            {name: "Sunflower - Post Malone & Swae Lee", aliases: ["sunflower"], stopWords: []},
            {name: "Sweater Weather - The Neighbourhood", aliases: ["sweater weather"], stopWords: []},
            {name: "One Dance - Drake", aliases: ["one dance"], stopWords: []},            
            {name: "Stay - The Kid LAROI & Justin Bieber", aliases: ["stay"], stopWords: []},            
            {name: "Believer - Imagine Dragons", aliases: ["believer"], stopWords: []}
        ]
    },
    {
        theme: "Artistas com mais prêmios Grammy na história",
        items: [
            "Beyoncé",
            "Georg Solti",
            "Quincy Jones",
            "Alison Krauss",
            "Chick Corea",
            "Pierre Boulez",
            "Vladimir Horowitz",
            "Stevie Wonder",
            "John Williams",
            "Kanye West"
        ]
    },
    {
        theme: "Jogos (videogames) mais vendidos de todos os tempos",
        items: [
            "Minecraft",            
            {name: "Grand Theft Auto V", aliases: ["gta"], stopWords: ["V"]},
            "Tetris",
            "Wii Sports",            
            {name: "PUBG: Battlegrounds", aliases: ["pubg"], stopWords: ["V"]},
            {name: "Mario Kart 8", aliases: [""], stopWords: ["8"]},
            {name: "Red Dead Redemption 2", aliases: [""], stopWords: ["2"]},            
            {name: "Super Mario Bros.", aliases: [], stopWords: ["bros."]},
            "Overwatch",            
            {name: "The Witcher 3: Wild Hunt", aliases: ["witcher"], stopWords: ["3:", "the"]}
        ]
    },
    {
        theme: "Séries mais assistidas",
        items: [            
            {name: "Round 6", aliases: [""], stopWords: ["6"]},
            "Wandinha",
            "Stranger Things",
            {name: "La Casa de Papel", aliases: [""], stopWords: ["la", "de"]},
            "Bridgerton",            
            {name: "Dahmer: Um Canibal Americano", aliases: [""], stopWords: ["um", "dahmer:"]},
            "O Gambito da Rainha",            
            {name: "The Witcher", aliases: [""], stopWords: ["the"]},
            "Lupin",
            "O Agente Noturno"
        ]
    },
    {
        theme: "Seleções com mais participações na Copa do Mundo",
        items: [
            "Brasil",
            "Alemanha",
            "Itália",
            "Argentina",
            "México",
            "Espanha",
            "Inglaterra",
            "França",
            "Bélgica",
            "Uruguai"
        ]
    },
    {
        theme: "Países com mais medalhas na história das Olimpíadas",
        items: [
            {name: "Estados Unidos", aliases: ["eua", "estados unidos da américa"], stopWords: []},            
            {name: "União Soviética", aliases: ["urss"], stopWords: []}, //Isso acontece porque o Comitê Olímpico Internacional (COI) não soma as medalhas da União Soviética com as da Rússia atual, tratando cada bandeira como um código olímpico separado. (fonte:wikipedia)            
            {name: "Reino Unido", aliases: ["uk"], stopWords: []},
            "China",
            "França",
            "Alemanha",
            "Itália",
            "Hungria",
            "Japão",
            "Austrália"
        ]
    },
    {
        theme: "Atletas mais bem pagos do mundo",
        items: [
            "Cristiano Ronaldo",
            "Jon Rahm",
            "Lionel Messi",
            "LeBron James",
            "Giannis Antetokounmpo",
            "Kylian Mbappé",
            "Neymar",
            "Karim Benzema",
            "Stephen Curry",
            "Lamar Jackson"
        ]
    },
    {
        theme: "Redes de fast-food com mais lojas no mundo",
        items: [
            "Mixue Ice Cream & Tea",
            "McDonald's",
            "Subway",
            "Starbucks",
            "KFC",
            "Burger King",            
            {name: "Domino's Pizza", aliases: ["domino", "dominu", "dominus", "dominos"], stopWords: ["pizza"]},
            {name: "Pizza Hut", aliases: ["hunt"], stopWords: ["pizza"]},
            "Dunkin'",            
            {name: "Hunt Brothers Pizza", aliases: ["brothers"], stopWords: ["pizza"]}
        ]
    },
    {
        theme: "Marcas mais valiosas do mundo",
        items: [
            "Apple",
            "Microsoft",
            "Google",
            "Amazon",
            "NVIDIA",
            "Samsung",
            "Walmart",
            "Facebook",            
            {name: "Coca-Cola", aliases: ["coca", "coca cola", "cola"], stopWords: []},
            "Tesla"
        ]
    },
    {
        theme: "Alimentos mais consumidos no mundo",
        items: [
            "Arroz",
            "Trigo",
            "Milho",
            "Batata",            
            {name: "Carne de frango", aliases: ["galinha", "galo"], stopWords: ["carne"]},            
            {name: "Carne suína", aliases: ["porco"], stopWords: ["carne"]},
            "Tomate",
            "Cebola",
            "Banana",
            "Soja"
        ]
    },
    {
        theme: "Raças de cachorro mais populares no Brasil",
        items: [            
            {name: "Vira-lata (SRD)", aliases: ["srd", "caramelo", "vira lata", "viralata"], stopWords: []},
            "Shih Tzu",            
            {name: "Yorkshire Terrier", aliases: [], stopWords: ["terrier"]},
            "Poodle",
            "Lhasa Apso",            
            {name: "Buldogue Francês", aliases: [], stopWords: ["francês"]},
            "Pinscher",            
            {name: "Golden Retriever", aliases: [], stopWords: ["retriever"]},            
            {name: "Labrador Retriever", aliases: [], stopWords: ["retriever"]},
            {name: "Spitz Alemão (Lulu da Pomerânia)", aliases: ["lulu", "lulu da pomerania", "pomerania", "spitz"], stopWords: ["alemão"]}            
        ]
    },
    {
        theme: "Sobrenomes mais comuns no Brasil",
        items: [
            "Silva",
            "Santos",
            "Oliveira",
            "Souza",
            "Rodrigues",
            "Ferreira",
            "Alves",
            "Pereira",
            "Lima",
            "Gomes"
        ]
    },
    {
        theme: "Frutas mais consumidas no mundo",
        items: [
            "Banana",
            "Melancia",
            "Maçã",
            "Laranja",
            "Uva",
            "Manga",
            "Abacaxi",
            "Mamão",
            "Pera",
            "Morango"
        ]
    },
    {
        theme: "Sabores de pizza mais pedidos no Brasil",
        items: [
            "Calabresa",
            "Mussarela",
            "Marguerita",
            {name: "Frango com Catupiry", aliases: ["frango", "galinha"], stopWords: []},
            "Portuguesa",            
            {name: "Quatro Queijos", aliases: ["queijo"], stopWords: [""]},
            "Napolitana",
            "Pepperoni",
            "Brigadeiro",
            "Atum"
        ]
    },
    {
        theme: "Maiores países produtores de chocolate",
        items: [
            {name: "Estados Unidos", aliases: ["eua", "estados unidos da américa"], stopWords: []},
            "Alemanha",
            "Suíça",
            "Bélgica",
            "Itália",
            {name: "Reino Unido", aliases: ["uk"], stopWords: []},
            "França",
            "Brasil",            
            {name: "Países Baixos (Holanda)", aliases: ["holanda", "paises baixos"], stopWords: []},
            "Rússia"
        ]
    },
    {
        theme: "Sites mais acessados do mundo",
        items: [
            "Google",
            "YouTube",
            "Facebook",
            "Instagram",            
            {name: "X (Twitter)", aliases: ["x", "twitter", "tuiter"], stopWords: []},
            "Wikipedia",            
            {name: "WhatsApp", aliases: ["wpp", "zap", "whats", "zap zap", "zapzap"], stopWords: []},
            "Reddit",            
            {name: "Yahoo!", aliases: ["yahoo"], stopWords: []},
            "Amazon"
        ]
    },
    {
        theme: "Pessoas mais seguidas no Instagram",
        items: [
            "Cristiano Ronaldo",
            "Lionel Messi",
            "Selena Gomez",
            "Kylie Jenner",            
            {name: "Dwayne Johnson (The Rock)", aliases: ["rock", "dwayne johnson", "dwayne"], stopWords: ["the"]},
            "Ariana Grande",
            "Kim Kardashian",
            "Beyoncé",
            "Khloé Kardashian",
            "Justin Bieber"
        ]
    },
    {
        theme: "Aplicativos mais baixados da história",
        items: [
            "TikTok",
            "Facebook",
            "WhatsApp",
            {name: "WhatsApp", aliases: ["wpp", "whats", "zap", "zapzap", "zap zap"], stopWords: []},
            "Instagram",            
            {name: "Messenger (Facebook)", aliases: ["messenger"], stopWords: ["(Facebook)"]},
            "Snapchat",
            "Telegram",
            "Subway Surfers",
            "Spotify",
            "YouTube"
        ]
    },
    {
        theme: "Canais do YouTube com mais inscritos no Brasil",
        items: [
            "KondZilla",
            "Felipe Neto",            
            {name: "whindersson Nunes", aliases: ["winderson"], stopWords: ["nunes"]},            
            {name: "Você Sabia?", aliases: ["voce sabia"], stopWords: []},
            "Luccas Neto",            
            {name: "Maria Clara & JP", aliases: ["maria clara", "jp"], stopWords: []},
            "GR6 Explode",
            "RezendeEvil",
            {name: "RezendeEvil", aliases: ["rezende evil", "rezende"], stopWords: []},
            "Renato Garcia",
            "Galinha Pintadinha"
        ]
    },
    {
        theme: "Animais terrestres mais rápidos do mundo",
        items: [            
            {name: "Guepardo (Chita)", aliases: ["guepardo", "chita"], stopWords: []},            
            {name: "Antílope-americano", aliases: ["antilope"], stopWords: []},            
            {name: "Cabra-de-leque (Springbok)", aliases: ["cabra"], stopWords: []},            
            {name: "Gnu", aliases: ["guinu"], stopWords: []},
            "Leão",            
            {name: "Gazela-de-grant", aliases: ["gazela"], stopWords: []},            
            {name: "Lebre-europeia", aliases: ["lebre"], stopWords: []},            
            {name: "Cavalo Quarto de Milha", aliases: ["cavalo"], stopWords: []},            
            {name: "Galgo Inglês", aliases: ["galgo"], stopWords: []},            
            {name: "Canguru-vermelho", aliases: ["canguru"], stopWords: []},
        ]
    },
    {
        theme: "Animais que mais matam humanos no mundo",
        items: [                      
            {name: "Mosquito", aliases: ["muriçoca", "borrachudo", "pernilongo", "carapanã"], stopWords: []},
            {name: "Serpente (Cobra)", aliases: ["serpente", "cobra"], stopWords: []},
            "Cachorro",
            "Barbeiro",
            "Escorpião",
            "Crocodilo",
            "Hipopótamo",
            "Elefante",
            "Leão",
            "Tubarão"
        ]
    },
    {
        theme: "Animais mais letais para humanos (maior probabilidade de morte em um encontro fatal)",
        items: [                        
            {name: "Vespa-do-mar (Água-viva-caixa)", aliases: ["vespa", "vespa do mar"], stopWords: []},
            {name: "Mamba-negra", aliases: ["mamba"], stopWords: []},            
            {name: "Polvo-de-anéis-azuis", aliases: ["polvo"], stopWords: []},            
            {name: "Taipan-do-interior", aliases: ["taipan"], stopWords: []},            
            {name: "Caramujo-cone (Conus)", aliases: ["caramujo", "caramujo cone"], stopWords: []},            
            {name: "Aranha-armadeira (ou Funil-de-teia)", aliases: ["aranha", "aranha armadeira"], stopWords: []},            
            {name: "Escorpião-amarelo-da-Palestina", aliases: ["escorpiao", "escorpiao amarelo"], stopWords: []},            
            {name: "Sapo-dourado-venenoso", aliases: ["sapo", "sapo dourado"], stopWords: []},            
            {name: "Crocodilo-de-água-salgada", aliases: ["crocodilo", "cocrodilo de agua salgada"], stopWords: []},            
            {name: "Urso-polar", aliases: ["urso", "urso polar"], stopWords: []}
        ]
    },    
    {
        theme: "Animais com maior expectativa de vida",
        items: [            
            {name:"Esponja-de-vidro", aliases: ["esponja", "esponja de vidro"], stopWords: []},            
            {name: "Amêijoa-da-islândia", aliases: ["Amêijoa", "Amêijoa da islândia"], stopWords: []},            
            {name: "Tubarão-da-groenlândia", aliases: ["tubarão", "Tubarão da groenlândia"], stopWords: []},            
            {name: "Baleia-da-Groenlândia (Baleia-boreal)", aliases: ["Baleia", "Baleia da Groenlândia", "Baleia boreal"], stopWords: []},            
            {name: "Tartaruga-gigante-de-aldabra", aliases: ["Tartaruga", "Tartaruga gigante"], stopWords: []},            
            {name: "Ouriço-do-mar-vermelho", aliases: ["Ouriço", "Ouriço do mar", "Ouriço do mar vermelho"], stopWords: []},            
            {name: "Tuatara", aliases: [], stopWords: []},            
            {name: "Enguia-europeia", aliases: ["Enguia", "Enguia europeia"], stopWords: []},            
            {name: "Elefante-africano", aliases: ["Elefante", "Elefante africano"], stopWords: []},            
            {name: "Arara-azul", aliases: ["Arara azul", "Arara"], stopWords: []}
        ]
    },
    {
        theme: "Nomes de cachorros ou gatos mais comuns no Brasil",
        items: [
            "Mel",
            "Luna",
            "Amora",
            "Thor",
            "Nina",
            "Luke",
            "Belinha",
            "Max",
            "Bob",
            "Simba"
        ]
    },
    {
        theme: "Nomes próprios mais comuns no Brasil (segundo o Censo do IBGE)",
        items: [
            "Maria",
            "José",
            "Ana",
            "João",
            "Antônio",
            "Francisco",
            "Carlos",
            "Paulo",
            "Pedro",
            "Lucas"
        ]
    },
    {
        theme: "Fobias (medos) mais comuns entre as pessoas",
        items: [            
            {name: "Aracnofobia (Aranhas)", aliases: ["aranha", "aracnofobia"], stopWords: ["medo"]},
            {name: "Ofidiofobia (Cobras)", aliases: ["Ofidiofobia", "Cobra"], stopWords: ["medo"]},
            {name: "Acrofobia (Altura)", aliases: ["Acrofobia", "Altura"], stopWords: ["medo"]},
            {name: "Aerofobia (Voar de avião)", aliases: ["Aerofobia", "Voar", "Voar de avião"], stopWords: ["medo"]},
            {name: "Claustrofobia (Lugares fechados)", aliases: ["Claustrofobia", "Lugar fechado", "fechado", "Lugares fechados", "espaço fechado", "confinado", "confinamento"], stopWords: ["medo"]},
            {name: "Agorafobia (Multidões ou espaços abertos)", aliases: ["agorafobia", "multidoes", "espacos abertos", "lugaeres abertos", "aberto"], stopWords: ["medo"]},
            {name: "Cinofobia (Cães)", aliases: ["cinofobia", "cães", "cachorro", "cão"], stopWords: ["medo"]},
            {name: "Astrafobia (Trovões e relâmpagos)", aliases: ["astrafobia", "trovões", "relâmpagos", "tempestade"], stopWords: ["medo"]},
            {name: "Tripofobia (Padrões de buracos)", aliases: ["tripofobia", "buracos", "padrão de buraco", "padrões de buracos"], stopWords: ["medo"]},
            {name: "Glossofobia (Falar em público)", aliases: ["glossofobia", "falar", "falar em publico", "discurssar", "discurso"], stopWords: ["medo"]}
        ]
    },
    {
        theme: "Carros mais vendidos no Brasil em 2025",
        items: [            
            {name: "Fiat Strada", aliases: [], stopWords: ["Fiat"]},            
            {name: "Volkswagen Polo", aliases: [], stopWords: ["Volkswagen"]},            
            {name: "Chevrolet Onix", aliases: [], stopWords: ["Chevrolet"]},            
            {name: "Hyundai HB20", aliases: [], stopWords: ["Hyundai"]},            
            {name: "Fiat Argo", aliases: [], stopWords: ["Fiat"]},            
            {name: "Volkswagen T-Cross", aliases: [], stopWords: ["Volkswagen"]},            
            {name: "Fiat Mobi", aliases: [], stopWords: ["Fiat"]},            
            {name: "Hyundai Creta", aliases: [], stopWords: ["Hyundai"]},            
            {name: "Chevrolet Tracker", aliases: [], stopWords: ["Chevrolet"]},            
            {name: "Nissan Kicks", aliases: [], stopWords: ["Nissan"]}
        ]
    },
    {
        theme: "Idiomas mais falados no mundo",
        items: [
            "Inglês",
            "Mandarim",
            "Hindi",
            "Espanhol",
            "Francês",
            "Árabe",
            "Bengali",
            "Português",
            "Russo",
            "Urdu"
        ]
    },
    {
        theme: "Profissões mais comuns no Brasil",
        items: [            
            {name: "Vendedor do comércio", aliases: ["Vendedor"], stopWords: []},            
            {name: "Faxineiro / Auxiliar de limpeza", aliases: ["Faxineiro", "limpeza", "zelador"], stopWords: ["auxiliar"]},
            {name: "Auxiliar de escritório / Administrativo", aliases: ["escritório", "adm", "admin", "administrativo", "recursos humanos", "rh"], stopWords: ["auxiliar"]},            
            {name: "Motorista", aliases: [], stopWords: []},
            {name: "Pedreiro", aliases: [], stopWords: []},            
            {name: "Cozinheiro / Auxiliar de cozinha", aliases: ["chef", "cozinheiro", "cozinha"], stopWords: ["auxiliar"]},            
            {name: "Agricultor / Trabalhador rural", aliases: ["agricultor", "rural", "campo"], stopWords: ["trabalhador"]},
            {name: "Professor", aliases: [], stopWords: []},            
            {name: "Operador de caixa", aliases: ["atendente", "atendimento"], stopWords: []},            
            {name: "Segurança / Vigilante", aliases: ["segurança", "vigilante", "vigia"], stopWords: []}
        ]
    }
];