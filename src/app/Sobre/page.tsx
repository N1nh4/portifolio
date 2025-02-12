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
    ];
    return (
        <div className="mt-14 h-[calc(100vh-3rem)]  overflow-y-auto overflow-x-hidden">
            <Cabecalho />
            <div className="  flex flex-col justify-center items-center mt-28 ">
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <div className=" w-48 ">
                        <img src="/imagens/perfil.jpeg" alt="perfil" />
                    </div>
                    <div className="w-2/5 p-6 flex flex-col">
                        <h1 className="font-bold text-center md:text-start">Alana Carolina Pereira Abreu</h1>

                        <br />

                        <p className="text-justify">Desenvolvedora fullstack, atualmente estudante de Sistema de Informações na Univesidade do Estado da Bahia - UNEB. Além de bolsista na Iniciação Científica do Grupo de Pesquisa em Bioinformática e Biologia Computacional - G2BC. </p>
                        
                        <br />
                      
                        <p>
                        Email: alanaabreu1103@gmail.com <br />

                        G2BC: <a href="https://g2bc.uneb.br/" target="_blank">https://g2bc.uneb.br/</a></p>
                    </div>
                </div>

                <h2 className="mt-16 font-bold">Principais Ferramentas</h2>
                <InfiniteMovingCards items={items} direction="left" speed="fast" pauseOnHover={true} />

                <div className="w-3/4 p-6 flex flex-col">
                    <h2 className=" mt-6 text-center text-5xl font-mono">Experiência Profissional</h2>
                <Timeline 
                    data={[
                        {
                            title: "G2BC — Iniciação Científica",
                            content: (
                                <div>
                                <h1 className="font-bold">SET 2024 - ATUAL</h1> <br />
                                <p className="text-lg">Pesquisa interdisciplinar analisando dados genômicos, epidemiológicos e climáticos do vírus da dengue (DENV) na Bahia, focando em padrões de incidência e fatores de risco. As atividades incluem coleta, organização e análise de dados com modelos de séries temporais, reforçando habilidades em ciência de dados, estatística e programação, integrando Sistemas de Informação à bioinformática e saúde pública.</p>
                                </div>
                            ),
                        },
                        {
                            title: "L&A - SERVIÇOS",
                            content: (
                                <div>
                                <h1 className="font-bold">JUL 2022 - OUT 2023</h1> <br />
                                <p className="text-lg">Responsável pela documentação das rotinas e colaboração com a equipe nos setores de faturamento, financeiro, ouvidoria, recursos humanos e gerenciais. As principais atividades incluíam organização de documentos para faturamento, emissão de GRUs, boletos e CNVs, cobrança, suporte aos inquilinos, elaboração de contratos, lançamentos financeiros, organização de relatórios SEFIP e criação de planilhas. </p>
                                </div>
                            ),
                        },  
                        
                        
                    ]}
                />
                    
                </div>
              
                <h2 className="font-bold mt-5">Redes Sociais</h2>
                <div className="flex flex-1 gap-5 m-4 mb-10">
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