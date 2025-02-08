import Cabecalho from "@/components/template/Cabecalho";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";


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
        <div>
            <Cabecalho />
            <div className=" flex flex-col justify-center items-center mt-28 ">
                <div className=" flex flex-col md:flex-row justify-center items-center">
                    <div className=" w-48 ">
                        <img src="/imagens/perfil.jpeg" alt="perfil" />
                    </div>
                    <div className="w-80 p-6 flex flex-col">
                        <h1 className="font-bold text-center md:text-start">Alana Carolina Pereira Abreu</h1>

                        <br />

                        <p className="text-justify">Atualmente estudante de Sistema de Informações na Univesidade do Estado da Bahia - UNEB, além de bolsista na Iniciação Científica G2BC. </p>
                        
                        <br />
                      
                        <p>
                        Email: alanaabreu1103@gmail.com

                        G2BC: <a href="https://g2bc.uneb.br/" target="_blank">https://g2bc.uneb.br/</a></p>
                    </div>
                </div>
                <h2 className="font-bold mt-6">Principais Ferramentas</h2>
                <InfiniteMovingCards items={items} direction="left" speed="fast" pauseOnHover={true} />
              
                <h2 className="font-bold mt-5">Redes Sociais</h2>
                <div className="flex flex-1 gap-5 m-4">
                    <a href="https://www.linkedin.com/in/alana-abreu/" target="_blank">
                    <img src="/imagens/linkedin.svg" alt="linkedin" className="transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="https://wa.me/5571986498698" target="_blank">
                        <img src="/imagens/whatsapp.svg" alt="whatsapp" className="transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="mailto:alanaabreu1103@gmail.com" target="_blank">
                        <img src="/imagens/gmail-novo.svg" alt="gmail" className="transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="https://github.com/N1nh4" target="_blank">
                        <img src="/imagens/github.svg" alt="github" className="transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                    <a href="https://www.instagram.com/alana__abreu/" target="_blank">
                        <img src="/imagens/instagram.svg" alt="nextjs" className="transition-transform duration-300 ease-in-out transform hover:scale-125"/>
                    </a>
                </div>
            </div>
        </div>
        
    )
}