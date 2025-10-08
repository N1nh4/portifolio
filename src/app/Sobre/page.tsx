import Cabecalho from "@/components/template/Cabecalho";
import Rodape from "@/components/template/Rodape";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Timeline } from "@/components/ui/timeline";



export default function Sobre() {

    const items = [
        { imgSrc: "/imagens/html.svg", alt: "html" },
        { imgSrc: "/imagens/css.svg", alt: "css" },
        { imgSrc: "/imagens/java-script.svg", alt: "js" },
        { imgSrc: "/imagens/tailwind.svg", alt: "tailwind" },
        { imgSrc: "/imagens/react.svg", alt: "react" },
        { imgSrc: "/imagens/python.svg", alt: "python" },
        { imgSrc: "/imagens/mysql.svg", alt: "mysql" },
        { imgSrc: "/imagens/next-js.svg", alt: "next" },   
        { imgSrc: "/imagens/springBoot.svg", alt: "spring" },
        { imgSrc: "/imagens/php.svg", alt: "php" },
        { imgSrc: "/imagens/laravel.svg", alt: "laravel" },

    ];
    return (
        <div className="mt-14 h-[calc(100vh-3rem)]  overflow-y-auto overflow-x-hidden">
            <Cabecalho />
            <div className="  flex flex-col justify-center items-center mt-28 ">
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <div className=" w-48 ">
                        <img src="/imagens/perfil.jpeg" alt="perfil" />
                    </div>
                    <div className="w-3/4 md:w-2/5 p-6 flex flex-col">
                        <h1 className="font-bold text-center md:text-start">Alana Carolina Pereira Abreu</h1>

                        <p className="text-justify mt-3">Desenvolvedora Fullstack, atualmente estudante de Sistemas de Informação na Universidade do Estado da Bahia (UNEB). Experiência com desenvolvimento web utilizando React, Next.js, Spring Boot e Laravel, além de conhecimentos em bancos de dados relacionais e não relacionais. Também já fui bolsista de Iniciação Científica no Grupo de Pesquisa em Bioinformática e Biologia Computacional (G2BC), atuando com análise de dados e desenvolvimento de scripts para apoio à pesquisa científica. Sou uma pessoa comunicativa, determinada e com perfil de liderança. </p>
                        
                        <br />
                      
                       
                    </div>
                </div>

                <h2 className="mt-16 font-bold">Principais Ferramentas</h2>
                <InfiniteMovingCards items={items} direction="left" speed="fast" pauseOnHover={true} />

                <div className=" lg:w-3/4 p-6 flex flex-col">
                    <h2 className=" mt-6 text-center text-2xl md:text-5xl font-mono">Experiência Profissional</h2>
                <Timeline 
                    data={[
                        {
                            title: "Horizon Inovação e Tecnologia - Estágio em desenvolvimento fullstack",
                            content: (
                                <div>
                                <h1 className="font-bold">AGO 2025 - SET 2025</h1> <br />
                                <p className="text-lg text-justify">Atuei na manutenção e evolução de sistemas web, desenvolvendo funcionalidades, interfaces e módulos com Laravel (PHP), React, Vue.js e TypeScript. Trabalhei com PostgreSQL, MySQL e Supabase, realizando ajustes e integrações. Participei de projetos ágeis, utilizando Monday para gestão das tasks, além de atuar na correção de bugs, implementação de testes, uso de Docker em servidores Linux e versionamento de código com Git. Também tive contato com ferramentas de suporte à produtividade e inteligência artificial, como Cursor e Lovable, para otimizar partes do processo de desenvolvimento.</p>
                                </div>
                            )

                        },
                        {
                            title: "G2BC - Bolsista em Iniciação Científica",
                            content: (
                                <div>
                                <h1 className="font-bold">SET 2024 - SET 2025</h1> <br />
                                <p className="text-lg text-justify">Pesquisa interdisciplinar analisando dados genômicos, epidemiológicos e climáticos do vírus da dengue (DENV) na Bahia, focando em padrões de incidência e fatores de risco. As atividades incluem coleta, organização e análise de dados com modelos de séries temporais, reforçando habilidades em ciência de dados, estatística e programação, integrando Sistemas de Informação à bioinformática e saúde pública.</p>
                                </div>
                            ),
                        },
                        {
                            title: "L&A SERVIÇOS - Estágio em administração",
                            content: (
                                <div>
                                <h1 className="font-bold">JUL 2022 - OUT 2023</h1> <br />
                                <p className="text-lg text-justify">Responsável pela documentação das rotinas e colaboração com a equipe nos setores de faturamento, financeiro, ouvidoria, recursos humanos e gerenciais. As principais atividades incluíam organização de documentos para faturamento, emissão de GRUs, boletos e CNVs, cobrança, suporte aos inquilinos, elaboração de contratos, lançamentos financeiros, organização de relatórios SEFIP e criação de planilhas. </p>
                                </div>
                            ),
                        },  
                        
                        
                    ]}
                />
                    
                </div>
              
                <h2 className="font-bold mt-8">Redes Sociais</h2>
                <div className="flex flex-1 gap-5 m-4 mb-14">
                    <a href="https://www.linkedin.com/in/alana-abreu/" target="_blank">
                    <img src="/imagens/linkedin.svg" alt="linkedin" className="md:h-14 md:w-14 transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="https://wa.me/5571986498698" target="_blank">
                        <img src="/imagens/whatsapp.svg" alt="whatsapp" className="md:h-14 md:w-14 transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="mailto:alanaabreu1103@gmail.com" target="_blank">
                        <img src="/imagens/gmail-novo.svg" alt="gmail" className="md:h-14 md:w-14 transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="https://github.com/N1nh4" target="_blank">
                        <img src="/imagens/github.svg" alt="github" className="md:h-14 md:w-14 transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="https://www.instagram.com/alana__abreu/" target="_blank">
                        <img src="/imagens/instagram.svg" alt="nextjs" className="md:h-14 md:w-14 transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                </div>
            </div>
            <Rodape />
        </div>
        
    )
}