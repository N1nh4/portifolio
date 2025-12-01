export interface Projetos {
  id: number;
  titulo: string;
  descricao: string;
  imagem: string[];
  categoria: number[];
  saibaMais: string;
  invertido?: boolean;
}

export const projetos: Projetos[] = [
  {
    id: 1,
    titulo: "Upa Agora",
    descricao:
      "Desenvolvi um Sistema Web para monitoramento colaborativo da lotação de unidades de saúde, inspirado no modelo de Crowdsourcing. O projeto foi construído com backend em Spring Boot e frontend em React, seguindo princípios de boas práticas como SOLID e aplicando padrões de projeto GoF, como Factory Method, Facade e Observer. (Responsividade em desenvolvimento.)",
    imagem: ["/imagens/upaagora.png"],
    categoria: [5, 6, 12, 7],
    saibaMais: "https://github.com/N1nh4/frontend-lab-web",
    invertido: false,
  },
  {
    id: 2,
    titulo: "Fiocruz - IaEditais",
    descricao:
      "Atuo como desenvolvedora fullstack voluntária no projeto IAEditais, iniciativa da Fiocruz. No frontend, implemento módulos usando React, Next.js, TypeScript e Tailwind, seguindo boas práticas e padrões de arquitetura. No backend, contribuo em funcionalidades desenvolvidas com FastAPI, SQLAlchemy e APIs REST, auxiliando na modelagem de dados e integrações. Também participei da prototipação de alta fidelidade no Figma.",
    imagem: [
      "/imagens/projetoDestaque/iaEditais/iaEditais1.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais2.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais3.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais5.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais7.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais8.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais9.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais10.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais11.png",
      "/imagens/projetoDestaque/iaEditais/iaEditais12.png",
    ],
    categoria: [5, 6, 8, 7],
    saibaMais: "https://github.com/rafaelontour/ia_editais_fiocruz",
    invertido: true,
  },
  {
    id: 3,
    titulo: "Agenda Contatos",
    descricao:
      "Aplicação web com Spring Boot no backend e React com Next.js no frontend, simulando uma agenda de contatos com anotações. O backend e o banco de dados foram hospedados no Render, enquanto o frontend foi implantado no Vercel. O projeto demonstra a integração entre API REST e interface web moderna, com funcionalidades de CRUD para contatos e anotações personalizadas, persistência de dados e Deploy em ambientes na nuvem.",
    imagem: [
      "/imagens/projetoDestaque/agenda/projetoAgenda.png",
      "/imagens/projetoDestaque/agenda/projetoAgenda1.png",
    ],
    categoria: [5, 6, 12, 7],
    saibaMais: "https://agenda-frontend-xi.vercel.app/",
    invertido: false,
  },
  {
    id: 4,
    titulo: "Catalogo de Filmes - Em desenvolvimento",
    descricao:
      "Projeto web coordenado por estudantes da UNEB. Nossa iniciativa consiste no desenvolvimento de um site que será disponibilizado online, apresentando um catálogo abrangente de filmes de animação. Utilizando APIs, estamos criando uma plataforma dinâmica e interativa para os amantes de animações, proporcionando uma experiência única de descoberta de navegação por meio de nosso catálogo de filmes. Minha maior contribuição foi no backend do projeto.",
    imagem: ["/imagens/projetoDestaque3.png"],
    categoria: [8, 11],
    saibaMais: "https://github.com/Skaylan/projeto-web-backend",
    invertido: true,
  },
];
