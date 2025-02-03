import ProjetoDestaque from "@/components/ProjetoDestaque";
import ProjetoGeral from "@/components/ProjetoGeral";
import Cabecalho from "@/components/template/Cabecalho";
import { projetos } from "@/data/projetos";
import { ProjetosGeral } from "@/data/projetosGeral";

export default function Projetos() {
    
    return (
        <div className="">
            <Cabecalho />
            <div className="mt-14 h-[calc(100vh-4rem)] overflow-y-auto">
                <h2 className="flex justify-center items-center  text-5xl mt-8 font-mono">Projetos Destaques</h2>
                {projetos.map((projeto) => (
                    <ProjetoDestaque
                        key={projeto.id}
                        titulo={projeto.titulo}
                        descricao={projeto.descricao}
                        imagem={projeto.imagem}
                        categoria={projeto.categoria}
                        saibaMais={projeto.saibaMais}
                    />
                ) )}
                <h2 className="flex justify-center items-center font-bold text-5xl mt-8 font-mono">Outros Projetos</h2>
                <div className="flex justify-center items-center p-24">
                    <div className="grid grid-cols-2">
                        {ProjetosGeral.map((projeto) => (
                            <ProjetoGeral
                                key={projeto.id}
                                titulo={projeto.titulo}
                                descricao={projeto.descricao}
                                imagem={projeto.imagem}
                                categoria={projeto.categoria}
                                saibaMais={projeto.saibaMais}
                            />
                        ) )}
                    </div>
                </div>
                       
            </div>
        </div>
    )
}