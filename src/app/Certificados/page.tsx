"use client";
import Cabecalho from "@/components/template/Cabecalho";
import { HoverEffect } from "@/components/ui/card-hover-effect";


export default function Certificados() {
    return (
        <div className="mt-14 h-[calc(100vh-3rem)]  overflow-y-auto overflow-x-hidden">
            <Cabecalho />
            <div className="max-w-7xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>

    )
}

export const projects = [
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/5c7f4533-ec95-44e3-8c7e-1776a229bd23?lang",
    imagem: "/certificados/react-js.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/1038885b-42f5-4396-a0b7-414866ac8765?lang",
    imagem: "/certificados/redes-introducao.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/77d967e6-8969-487b-8e97-fe79772cef98",
    imagem: "/certificados/modelagem-bd.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/dec81681-54a2-46f7-bf15-d5212e81b2c4",
    imagem: "/certificados/html-css.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/510ccae0-b6bc-49dd-b845-d19c7ade8c52",
    imagem: "/certificados/postgresql.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/1ee5dbb7-96fb-423d-9ed2-4aad8928cccb",
    imagem: "/certificados/sqlite.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/d5a16615-f80d-4ee7-8ff7-41dd49cc5370",
    imagem: "/certificados/php-avancado.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/f17adb57-0e6b-45cd-bb09-baa2163540ee",
    imagem: "/certificados/php-introducao.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/dda09965-a3cd-43f9-bbf2-cc5e07d0662f",
    imagem: "/certificados/git-github.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/e1fabffe-1c4d-402b-89eb-405f5f1cc910",
    imagem: "/certificados/php-poo.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/f97de899-90eb-49c8-8d53-5b0ac6e14a4e",
    imagem: "/certificados/python.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/3da8e9c8-2d27-4839-80b6-30937b874683",
    imagem: "/certificados/js-html.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/b5c16e6d-1744-4dfe-98ea-02e945ef9f46",
    imagem: "/certificados/php-conceitos.png"
  },
  {
    title: "",
    description:
      "",
    link: "https://cursos.alura.com.br/certificate/e1908762-0ef0-456b-894a-48030edaa981",
    imagem: "/certificados/sql-mysql.png"
  },

  
];
