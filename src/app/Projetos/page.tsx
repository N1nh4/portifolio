"use client";
import { motion } from "framer-motion";
import ProjetoDestaque from "@/components/ProjetoDestaque";
import ProjetoGeral from "@/components/ProjetoGeral";
import Cabecalho from "@/components/template/Cabecalho";
import { projetos } from "@/data/projetos";
import { ProjetosGeral } from "@/data/projetosGeral";
import Rodape from "@/components/template/Rodape";

export default function Projetos() {
  const getVariants = (invertido: boolean) => ({
    hidden: { opacity: 0, x: invertido ? 50 : -50 },
    visible: { opacity: 1, x: 0 },
  });

  return (
    <div className="">
      <Cabecalho />
      <div className="mt-14 h-[calc(100vh-3rem)]  overflow-y-auto overflow-x-hidden">
        <h2 className="flex justify-center items-center text-3xl mt-12 font-mono md:text-5xl lg:text-6xl">
          Projetos Destaques
        </h2>
        <div>
          {projetos.map((projeto, index) => (
            <motion.div
              key={projeto.id}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.7, delay: index * 0.3 }}
              variants={getVariants(projeto.invertido ?? false)}
            >
              <ProjetoDestaque
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
                categoria={projeto.categoria}
                saibaMais={projeto.saibaMais}
                invertido={projeto.invertido}
              />
            </motion.div>
          ))}
        </div>
        <h2 className="flex justify-center items-center text-3xl md:text-5xl lg:text-6xl mt-28 font-mono">
          Outros Projetos
        </h2>
        <div className="flex justify-center items-center py-2 md:py-16 lg:py-16 md:p-24 lg:p-24">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            {ProjetosGeral.map((projeto) => (
              <ProjetoGeral
                key={projeto.id}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                imagem={projeto.imagem}
                categoria={projeto.categoria}
                saibaMais={projeto.saibaMais}
              />
            ))}
          </div>
        </div>
        <Rodape />
      </div>
    </div>
  );
}
