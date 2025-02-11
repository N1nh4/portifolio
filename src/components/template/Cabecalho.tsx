'use client';
import { IconDownload, IconHome, IconNotes, IconTool } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Cabecalho() {
  const pathname = usePathname();
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <div className=" flex items-center gap-6 md:gap-11 lg:gap-11 pl-9 bg-[#D7DADE] text-black w-full h-16 fixed top-0 left-0 shadow-md dark:text-white dark:bg-gray-700 z-50 dark:shadow-[0_3px_5px_rgba(255,255,255,0.2)]">
      <Link href={"/"}>
        <div className={`flex ${pathname === '/' ? 'text-blue-500' : ''} hover:text-blue-500`}>
          <IconHome viewBox="0 0 24 21" size={18} className="mr-1"/>
          <span className="hidden md:block">Home</span>
        </div>
      </Link>
      <Link href={"/Projetos"}>
        <div className={`flex ${pathname === '/Projetos' ? 'text-blue-500' : ''} hover:text-blue-500`}>
          <IconTool viewBox="0 0 24 21" size={18} className="mr-1"/> 
          <span className="hidden md:block">Projetos</span>
        </div>
      </Link>
      <Link href={"/Sobre"}>
        <div className={`flex ${pathname === '/Sobre' ? 'text-blue-500' : ''} hover:text-blue-500`}>
          <IconNotes viewBox="2 0 24 21" size={18} className="mr-1"/>
          <span className="hidden md:block">Sobre mim</span>
        </div> 
      </Link>

      <div className="flex flex-1 justify-end gap-6 md:gap-11 lg:gap-11 items-center pr-9 w-full">
        <div className="flex items-center">
          <span className="hidden md:block mr-2 text-black dark:text-white">Tema</span>
          <div className="flex bg-gray-400 w-10 h-4 rounded-2xl">
            <button 
              className={`bg-white dark:bg-white w-4 h-4 rounded-full transform ${isDarkMode ? 'translate-x-6' : ''}`} 
              onClick={toggleTheme}
            />
          </div>
        </div>
    
        <a href="/curriculo/curriculo.pdf" download className="">
          <div className="flex bg-blue-500 w-32 justify-around rounded-xl text-white overflow-hidden">
            <div className="rounded-b-xl p-2">
              <IconDownload />
            </div>
            <button className="bg-blue-400/40 flex justify-center flex-1 p-2 ">
              <span>Curriculo</span>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}
