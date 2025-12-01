import React from "react";
import Image from "next/image";
import { tecnologias } from "@/data/tecnologias";
import CarouselProjetoDestaque from "./CarouselProjetoDestaque";

interface ProjetoProps {
  titulo: string;
  descricao: string;
  imagem: string[];
  categoria: number[];
  saibaMais: string;
  invertido?: boolean;
}

const ProjetoDestaque: React.FC<ProjetoProps> = ({
  titulo,
  descricao,
  imagem,
  categoria,
  saibaMais,
  invertido,
}) => {
  return (
    <div
      className={`flex ${
        invertido
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col-reverse md:flex-row"
      } justify-center items-center`}
    >
      <div
        className={`flex flex-col w-96 pl-8 pr-8 lg:pl-0 lg:pr-0 text-justify ${
          invertido ? " md:mr-10 " : ""
        }`}
      >
        <h1 className={`font-bold ${invertido ? "md:text-end" : "text-start"}`}>
          {titulo}
        </h1>
        <br />
        <p>{descricao}</p>
        <br />
        <div
          className={`flex gap-3 h-full w-full items-end ${
            invertido ? "md:justify-end" : "justify-start"
          }`}
        >
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
          <a href={saibaMais} target="_blank">
            <button className="bg-gray-400 rounded-xl w-28 flex justify-center text-xs">
              Saiba mais aqui!
            </button>
          </a>
        </div>
      </div>
      <div
        className={`${invertido ? "m-10 md:ml-0 md:mr-10 md:my-10" : "m-10"}`}
      >
        <CarouselProjetoDestaque imagem={imagem} titulo={titulo} />
      </div>
    </div>
  );
};

export default ProjetoDestaque;
