import React from "react";
import Image from "next/image";
import { tecnologias } from "@/data/tecnologias";

interface ProjetoProps {
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: number[];
    saibaMais: string;
}

const ProjetoDestaque: React.FC<ProjetoProps> = ({ titulo, descricao, imagem, categoria, saibaMais}) => {

    return (
        <div className="flex justify-center items-center ">
            
            <div className="flex flex-col w-96 ">
                <h1 className="font-bold ">{titulo}</h1>
                <br />
                <p>{descricao}</p>
                <br />
                <div className="flex gap-3 h-full w-full items-end ">
                        {categoria.map((id, index) => {
                            const tecnologia = tecnologias[id];
                            return (
                                <div 
                                    key={id}
                                    className="rounded-xl w-14 flex justify-center text-black text-xs"
                                    style={{ backgroundColor: tecnologia.cor }}
                                >
                                    <span className="text-white/80 font-bold text-outline-black">
                                        {tecnologia.nome}
                                    </span>
                                    
                                </div>
                                
                            );
                        })}
                        <a href={saibaMais} target="_blank"> 
                                <button className="bg-gray-400 rounded-xl w-28 flex justify-center  text-xs  ">Saiba mais aqui!</button>
                            </a>
                    </div>
            </div>
            <div className="m-10">
                <Image src={imagem} alt={titulo} width={500} height={300}></Image>

            </div>

        </div>
        
    )
}

export default ProjetoDestaque