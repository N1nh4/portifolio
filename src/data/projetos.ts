export interface Projetos {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: number[];
    saibaMais: string;
    invertido?: boolean;
}

export const projetos: Projetos[] = [
    {
        id: 1,
        titulo: 'Projeto Organo',
        descricao: 'Projeto de página simples para inserir dados em um card para colaboradores de uma empressa ficticia. Meu primeiro projeto em React puro que realizei em um dos cursos da Alura.',
        imagem: '/imagens/projetoDestaque4.png',
        categoria: [4], 
        saibaMais: 'https://projeto-organo.vercel.app/',
        invertido: false,
        
    },
    {
        id: 2,
        titulo: 'Sistema de Troca',
        descricao: 'Projeto desenvolvido por alunos da Uneb para a disciplina de LP3. O projeto consiste em um sistema de trocas de produtos, onde o usuário pode cadastrar produtos para troca e visualizar produtos de outros usuários. Fui responsável pelo frontend do projeto. ',
        imagem: '/imagens/projetoDestaque2.png',
        categoria: [4, 3, 10],
        saibaMais: 'https://github.com/brugabi/Sistemas-de-Troca',
        invertido: true,
    },
    {
        id: 3,
        titulo: 'Catalogo de Filmes - Em desenvolvimento',
        descricao: 'Projeto web coordenado por estudantes da UNEB. Nossa iniciativa consiste no desenvolvimento de um site que será disponibilizado online, apresentando um catálogo abrangente de filmes de animação. Utilizando APIs, estamos criando uma plataforma dinâmica e interativa para os amantes de animações, proporcionando uma experiência única de descoberta de navegação por meio de nosso catálogo de filmes. Minha maior contribuição foi no backend do projeto.',
        imagem: '/imagens/projetoDestaque3.png',
        categoria: [8, 11],
        saibaMais: 'https://github.com/Skaylan/projeto-web-backend',
        invertido: false,
    },

]

