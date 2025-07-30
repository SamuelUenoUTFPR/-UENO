// Arquivo: produtos-db.js

const products = [
    // --- BEST SELLERS ---
    {
        id: 'jaqueta-duality',
        name: 'Jaqueta "Duality"',
        price: 'R$ 680',
        imageSrc: 'imagens/jaqueta.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/jaqueta.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Uma jaqueta bomber versátil com bordados intrincados nas costas, representando a dualidade entre a tradição e a modernidade. Feita com materiais reciclados de alta performance.'
    },
    {
        id: 'kimono-duality',
        name: 'Kimono "Duality" Preto',
        price: 'R$ 930',
        imageSrc: 'imagens/kimono.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/kimono.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Inspirado nos cortes clássicos japoneses, este kimono apresenta um design minimalista com um grafismo sutil nas costas. Perfeito para sobreposições, une conforto e estilo atemporal.'
    },
    {
        id: 'parka-future',
        name: 'Parka "Future" Preta',
        price: 'R$ 1.120',
        imageSrc: 'imagens/parka.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/parka.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Uma parka técnica desenhada para a vida urbana. Com tecido impermeável, múltiplos bolsos e um capuz ajustável, ela é a peça definitiva para proteção contra os elementos sem sacrificar a estética.'
    },
    {
        id: 'camisa-horizon',
        name: 'Camisa "Horizon" Azul',
        price: 'R$ 630',
        imageSrc: 'imagens/shirt.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/shirt.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Camisa de corte reto com um tom de azul profundo, confeccionada em linho orgânico. Leve e respirável, é ideal para ocasiões que pedem um toque de sofisticação casual.'
    },
    {
        id: 'calca-cargo-cutted',
        name: 'Calça Cargo "Cutted" Preta',
        price: 'R$ 890',
        imageSrc: 'imagens/cargo.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/cargo.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Releitura moderna da calça cargo, com um corte mais ajustado e detalhes funcionais. Seus bolsos estratégicos e tecido resistente a tornam uma peça prática e estilosa para o dia a dia.'
    },
    {
        id: 'calca-track-preta',
        name: 'Calça Track Preta',
        price: 'R$ 490',
        imageSrc: 'imagens/track.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/track.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Calça de moletom com um corte afunilado e design minimalista. Confortável e versátil, é perfeita tanto para momentos de lazer quanto para compor um look urbano.'
    },
    {
        id: 'shorts-cargo-drange',
        name: 'Shorts Cargo "D-range" Cinza',
        price: 'R$ 630',
        imageSrc: 'imagens/shorts.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/shorts.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Shorts cargo robusto com múltiplos bolsos e um acabamento cinza estonado. Ideal para atividades ao ar livre, combinando funcionalidade com um visual despojado.'
    },
    {
        id: 'moletom-yotd',
        name: 'Moletom Encapuzado "YOTD" Preto',
        price: 'R$ 710',
        imageSrc: 'imagens/sweat.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/sweat.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Moletom encorpado com capuz, feito de algodão orgânico. O design "Year of the Dragon" é sutilmente integrado na estampa, oferecendo conforto máximo e um estilo único.'
    },

    // --- 上野 FALL COLLECTION 25 ---
    {
        id: 'camiseta-fall25-gradiente',
        name: 'Camiseta "FALL 25" Lavagem Gradiente',
        price: 'R$ 316',
        imageSrc: 'imagens/fall1.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/fall1.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Camiseta com lavagem especial que cria um efeito gradiente único. Parte da coleção Fall 25, celebra a transição das estações com um design artístico e contemporâneo.'
    },
    {
        id: 'camisa-fall25-paneled',
        name: 'Camisa "FALL 25" Paneled',
        price: 'R$ 413',
        imageSrc: 'imagens/fall2.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/fall2.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Camisa de manga longa com painéis de diferentes texturas, criando um contraste visual sofisticado. Uma peça chave da coleção Fall 25, ideal para um look moderno.'
    },
    {
        id: 'calca-fall25-destacavel',
        name: 'Calça Cargo "FALL 25" Destacável',
        price: 'R$ 505',
        imageSrc: 'imagens/fall3.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/fall3.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Uma peça inovadora da coleção Fall 25. Esta calça cargo pode ser convertida em shorts através de zíperes discretos, oferecendo duas peças em uma com máxima versatilidade.'
    },

    // --- MODA MASCULINA ---
    {
        id: 'camisa-comic-branca',
        name: 'Camisa de Botão "Comic" Branca',
        price: 'R$ 450', // Adicionei um preço de exemplo
        imageSrc: 'imagens/male1.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/male1.webp',
            'imagens/male1.1.webp', // Imagem de exemplo
            'imagens/male1.2.webp',  // Imagem de exemplo
            'imagens/male1.3.webp'
        ],
        description: 'Camisa de botão com estampa sutil inspirada em painéis de mangá. Feita de linho 100% orgânico, é uma peça divertida e elegante.'
    },
    {
        id: 'camiseta-sakura-preta',
        name: 'Camiseta Bordada "Sakura Flowers" Preta',
        price: 'R$ 280', // Adicionei um preço de exemplo
        imageSrc: 'imagens/male2.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/male2.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Camiseta de algodão 100% orgânico com um delicado bordado de flores de cerejeira (sakura) no peito. Uma homenagem à beleza efêmera da natureza.'
    },
    {
        id: 'camiseta-nosaw-branca',
        name: 'Camiseta Preta "No Saw" White Wings',
        price: 'R$ 295', // Adicionei um preço de exemplo
        imageSrc: 'imagens/male3.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/male3.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Camiseta com uma estampa gráfica de asas nas costas e o texto "No Saw". Feita de algodão 100% orgânico, representa liberdade e expressão.'
    },

    // --- MODA FEMININA ---
    {
        id: 'jaqueta-king-prince',
        name: 'Jaqueta "King Prince" Tricotada',
        price: 'R$ 820', // Adicionei um preço de exemplo
        imageSrc: 'imagens/female1.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/female1.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Jaqueta de tricot com um padrão clássico e atemporal. Elegante e confortável, é a peça perfeita para adicionar uma camada de sofisticação a qualquer look.'
    },
    {
        id: 'camiseta-sprout-branca',
        name: 'Camiseta "I\'m a Sprout" Branca',
        price: 'R$ 250', // Adicionei um preço de exemplo
        imageSrc: 'imagens/female4.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/female4.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Uma camiseta leve e divertida com a estampa "I\'m a Sprout", celebrando o crescimento e novos começos. Feita de algodão macio e sustentável.'
    },
    {
        id: 'camisa-oversized-bjhg',
        name: 'Camisa Oversized BJHG Preta',
        price: 'R$ 380', // Adicionei um preço de exemplo
        imageSrc: 'imagens/female3.webp',
        galleryImages: [ // Galeria de imagens
            'imagens/female3.webp',
            'imagens/referencia1.jpg', // Imagem de exemplo
            'imagens/referencia2.jpg'  // Imagem de exemplo
        ],
        description: 'Camisa oversized com um caimento relaxado e moderno. A lavagem vintage confere um visual único e desgastado, perfeito para um estilo urbano e confortável.'
    }
];
