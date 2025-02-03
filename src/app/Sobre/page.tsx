import Cabecalho from "@/components/template/Cabecalho";

export default function Sobre() {
    return (
        <div>
            <Cabecalho />
            <div className=" flex flex-col justify-center items-center mt-28 ">
                <div className=" flex justify-center items-center">
                    <div className=" w-48 ">
                        <img src="/imagens/perfil.jpeg" alt="perfil" />
                    </div>
                    <div className="w-80 p-6 flex flex-col">
                        <h1 className="font-bold">Alana Carolina Pereira Abreu</h1>

                        <br />

                        <p className="text-justify">Atualmente estudante de Sistema de Informações na Univesidade do Estado da Bahia - UNEB, além de bolsista na Iniciação Científica G2BC. </p>
                        
                        <br />
                      
                        <p>
                        Email: alanaabreu1103@gmail.com

                        G2BC: <a href="https://g2bc.uneb.br/" target="_blank">https://g2bc.uneb.br/</a></p>
                    </div>
                </div>
                <h2 className="font-bold mt-6">Principais Ferramentas</h2>
                <div className="flex flex-1 gap-5 mt-4">
                    <img src="/imagens/html.svg" alt="html" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/css.svg" alt="css" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/java-script.svg" alt="js" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/tailwind.svg" alt="tailwind" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/react.svg" alt="react" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/python.svg" alt="python" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/mysql.svg" alt="mysql" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                    <img src="/imagens/next-js.svg" alt="nextjs" className="transition-transform duration-100 ease-in-out transform hover:scale-125"/>
                </div>
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