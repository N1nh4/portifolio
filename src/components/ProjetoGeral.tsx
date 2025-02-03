import React from "react";
import Image from "next/image";
import { tecnologias } from "@/data/tecnologias";


interface ProjetoGeralProps {
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: number[];
    saibaMais: string;
}

const ProjetoGeral: React.FC<ProjetoGeralProps> = ({ titulo, descricao, imagem, categoria, saibaMais}) => {

    return (
        <div className="flex justify-center items-center bg-slate-800 rounded-xl p-2 m-4 h-64 transition-transform duration-300 ease-in-out transform hover:scale-105 z-0">

        
                <div className=" flex flex-col w-96 h-full items-end p-2">
                    <div>
                        <Image src={imagem} alt={titulo} width={500} height={300}></Image>
                        <a href={saibaMais} target="_blank"> 
                            <button className="bg-gray-400 w-full">Saiba mais aqui!</button>
                        </a>
                    </div>
                    <div className="flex gap-3 h-full w-full items-end ">
                        {categoria.map((id) => {
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
                    </div>
                </div>

                <div className=" w-64 h-full flex flex-col p-2 ">
                    <div className="bg-white flex flex-1 p-2 rounded-sm mb-2">
                        <p className="text-justify hyphens-auto text-black ">{descricao}</p>
                    </div>
                    <div className="flex justify-end items-end w-full ">
                        <h1 className="font-bold items-end justify-end text-white ">{titulo}</h1>
                    </div>
                </div>
        </div>
        
    )
}

export default ProjetoGeral