'use client'
import Cabecalho from "@/components/template/Cabecalho";
import React, { useState, useEffect, useMemo } from "react";

const HeroSection: React.FC = () => {
  const words = useMemo(() => ["Fullstack", "Frontend", "Backend"], []);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const current = words[loopIndex % words.length];
      if (isDeleting) {
        setCurrentWord((prev) => prev.slice(0, prev.length - 1));
        setTypingSpeed(50); // Velocidade mais rápida para apagar
      } else {
        setCurrentWord((prev) => current.slice(0, prev.length + 1));
        setTypingSpeed(150); // Velocidade normal para digitar
      }

      if (!isDeleting && currentWord === current) {
        setTimeout(() => setIsDeleting(true), 1000); // Espera antes de apagar
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentWord, isDeleting, loopIndex, typingSpeed, words]);

  return (
    <div className="flex flex-col items-center pb-20 justify-center h-screen">
      <Cabecalho />
      <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold text-center">
        Olá, eu sou Alana Abreu
      </h1>
      <p className="text-2xl mg:text-4xl lg:text-4xl mt-4">
        Desenvolvedora{" "}
        <span className="text-blue-500">{currentWord}</span>
        <span className="blinking-cursor"></span>
      </p>
      <style jsx>{`
        .blinking-cursor {
        border-right: 2px solid black; /* Cor preta no modo claro */
        animation: blink 0.7s step-end infinite;
      }

      /* Modo escuro */
      .dark .blinking-cursor {
        border-right: 2px solid white; /* Cor branca no modo escuro */
      }

      @keyframes blink {
        from,
        to {
          border-color: transparent;
        }
        50% {
          border-color: inherit;
        }
      }
      `}</style>
    </div>
  );
};

export default HeroSection;
