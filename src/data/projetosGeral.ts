export interface ProjetosGeral {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: number[];
    saibaMais: string;
}

export const ProjetosGeral: ProjetosGeral[] = [
    {
        id: 1,
        titulo: 'Landing Page',
        descricao: 'Projeto de uma Langing Page responsiva de um formulário de inscrição para newsletter com mensagem de sucesso. Desafio proposto pela plataforma Frontend Mentor. ',
        imagem: '/imagens/projeto1.jpeg',
        categoria: [1, 2, 3], 
        saibaMais: 'https://n1nh4.github.io/Landing-page/',
        
    },
    {
        id: 2,
        titulo: 'Projeto Android',
        descricao: 'Meu primeiro site responsivel sobre curiosidades de tecnologias. Trabalhei com as principais funcionalidades do html e css para o Curso em Vídeo. ',
        imagem: '/imagens/projeto2.jpeg',
        categoria: [1, 2],
        saibaMais: 'https://n1nh4.github.io/projeto-android',
    },
    {
        id: 3,
        titulo: 'Cordel Parallax Scrolling',
        descricao: 'Site responsivel de Cordel Moderno escrito por Milton Duarte. Aqui aprendi a usar o efeito parallax scrolling pelo Curso em Vídeo.',
        imagem: '/imagens/projeto3.jpeg',
        categoria: [1, 2],
        saibaMais: 'https://n1nh4.github.io/desafio-cordel/',
    },
    {
        id: 4,
        titulo: 'Jogo Super Mario flip',
        descricao: 'Projeto autoral de um mini jogo com a temática do Super Mario World utilizando somente ferramentas classicas do frontend puro.',
        imagem: '/imagens/projeto4.jpeg',
        categoria: [1, 2, 3],
        saibaMais: 'https://n1nh4.github.io/jogo-mario/',
    },
    {
        id: 5,
        titulo: 'Portifólio',
        descricao: 'Projeto deste portifólio. Consiste as principais informações sobre mim e meus projetos. Usando framework e tecnologias do frontend, como React, Next, TailwindCSS e Typescript.',
        imagem: '/imagens/projeto5.jpeg',
        categoria: [4, 5, 6, 7],
        saibaMais: '',
    },
    {
        id: 6,
        titulo: 'Forms Processo Seletivo',
        descricao: 'Projeto de um formulário de inscrição para processo seletivo. Usando somente ferramentas classicas do frontend. ',
        imagem: '/imagens/projeto6.jpeg',
        categoria: [1, 2, 3],
        saibaMais: 'https://n1nh4.github.io/forms-edital/',
    },
    {
        id: 7,
        titulo: 'Maze Runner',
        descricao: 'Projeto em pyhton de um maze runner. O objetivo era programar algoritmos de busca para encontrar os 8 tesouros mais próximos.',
        imagem: '/imagens/projeto7.jpeg',
        categoria: [8],
        saibaMais: 'https://github.com/N1nh4/projeto-maze-hunter',
    },
    {
        id: 8,
        titulo: 'Modelo Redes socias',
        descricao: 'Modelo de redes sociais com links para as principais redes sociais. Desafio proposto pela plataforma Frontend Mentor.',
        imagem: '/imagens/projeto8.jpeg',
        categoria: [1, 2],
        saibaMais: 'https://n1nh4.github.io/Links-redes-sociais-/',
    },
    {
        id: 9,
        titulo: 'Compilador Proc',
        descricao: 'Projeto de um compilador em C da linguagem ficticia proc. Nele compoem um analisador Lexico, Sintatico e Semantico, tabela de simbolos e uma parte da geração de código. ',
        imagem: '/imagens/afd.png',
        categoria: [9],
        saibaMais: 'https://github.com/N1nh4/proc-compilador-versao-final',
    },
    {
        id: 10,
        titulo: 'Sistema de arquivos',
        descricao: 'Simulador funcional de um terminal Linux feito em Python. Ele replica a experiência de uso de um terminal real, executando comandos comuns de sistemas operacionais baseados em Linux.',
        imagem: '/imagens/sistemaArquivos.png',
        categoria: [8],
        saibaMais: 'https://github.com/N1nh4/projeto-terminal-linux',
    }

]

