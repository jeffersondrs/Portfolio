'use client';

import Link from 'next/link';
// import Image from "next/image";
import React from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { aboutMe } from '@/api/data';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useFollowPointer } from '@/hooks/useFollowPointer';
import { Dog, Gamepad2, Home, MapPin, Swords } from 'lucide-react';

export default function AboutPage() {
  const { isDark } = useContext(ThemeContext);
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <section
      className={`flex flex-col items-center w-full h-full sm:h-full sm:py-3 justify-center px-5 py-10 gap-5
    ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-black'}
    `}
    >
      <div className="overflow-hidden flex flex-row justify-center items-center max-w-4xl sm:w-full">
        {aboutMe.map((about) => (
          <motion.img
            ref={ref}
            animate={{ x, y }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 30,
              restDelta: 0.001,
            }}
            key={about}
            src={`${about}`}
            alt="Toca Hobbit"
            width={1920}
            height={1080}
            className="z-40 w-56 sm:w-28 translate-x-10 rounded-lg"
          />
        ))}
        <motion.img
          ref={ref}
          animate={{ x, y }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 30,
            restDelta: 0.001,
          }}
          src="/itsme.jpg"
          alt="Jefferson Santos"
          width={1920}
          height={1080}
          className="z-50 w-72 sm:w-36 rounded-lg translate-x-8"
        />
        <motion.img
          ref={ref}
          animate={{ x, y }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 30,
            restDelta: 0.001,
          }}
          className="w-64 sm:w-36 z-40 rounded-lg"
          src="/myfriend.jpg"
          alt="Ozzy"
          width={1920}
          height={1080}
        />
      </div>
      <div className=" indent-2 flex flex-col justify-center items-center max-w-2xl p-5 py-5 gap-5">
        <h1 className="text-4xl sm:text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-800 tracking-wider">
          Olá novamente, sou o Jefferson
        </h1>
        <p
          className={`bg-clip-text bg-gradient-to-b text-transparent font-bold ${
            isDark ? 'from-gray-100 to-gray-300' : 'from-slate-700 to-gray-950'
          }`}
        >
          <MapPin
            size={24}
            className="text-gray-500 absolute -translate-x-10 sm:-translate-x-6"
          />
          Nascido e criado no Rio de Janeiro, Brasil. Sou um desenvolvedor web
          entusiasta e sonhador, pronto para criar soluções. Atualmente estou
          cursando Análise e Desenvolvimento de Sistemas na Universidade Veiga
          de Almeida, e me formo em meados de 2024.
        </p>
        <p
          className={`bg-clip-text bg-gradient-to-b text-transparent font-bold ${
            isDark ? 'from-gray-100 to-gray-300' : 'from-slate-700 to-gray-950'
          }`}
        >
          <Dog size={24} className="text-red-700 absolute -translate-x-10 sm:-translate-x-6" />
          Meu amigo da foto direita se foi em janeiro de 2023, mas ele sempre
          estará em meu coração. Ele foi um grande amigo e companheiro. Sinto
          saudades dele todos os dias. Éramos inseparáveis, Ozzy e eu. Minha
          pequena homenagem a ele.
          <span className="text-red-500">❤️</span>
        </p>
        <p
          className={`bg-clip-text bg-gradient-to-b text-transparent font-bold ${
            isDark ? 'from-gray-100 to-gray-300' : 'from-slate-700 to-gray-950'
          }`}
        >
          <Swords size={24} className="text-sky-700 absolute -translate-x-10 sm:-translate-x-6" />
          Estou sempre em busca de novos desafios e oportunidades de
          aprendizado. Sou apaixonado por tecnologia e por tudo que ela pode nos
          proporcionar. Meu objetivo é me tornar um desenvolvedor full-stack
          especialista em JavaScript
          <span className="text-pink-600">💕</span>
          Typescript e poder contribuir para o crescimento da comunidade de
          desenvolvedores.
        </p>
        <p
          className={`bg-clip-text bg-gradient-to-b text-transparent font-bold ${
            isDark ? 'from-gray-100 to-gray-300' : 'from-slate-700 to-gray-950'
          }`}
        >
          <Home size={24} className="text-green-700 absolute -translate-x-10 sm:-translate-x-6" />
          Uma toca de hobbit na foto a esquerda é um lugar para se viver. É um
          lugar para se comer, dormir, ler, escrever, pensar, sonhar, criar,
          imaginar, descansar, relaxar, se divertir, se alegrar. Tenho o sonho
          de um dia ter minha própria toca de hobbit. Um lugar para chamar de
          meu. Um lugar para chamar de lar.
        </p>
        <p
          className={`bg-clip-text bg-gradient-to-b text-transparent font-bold ${
            isDark ? 'from-gray-100 to-gray-300' : 'from-slate-700 to-gray-950'
          }`}
        >
          <Gamepad2
            size={24}
            className="text-yellow-700 absolute -translate-x-10 sm:-translate-x-6"
          />
          Meus hobbies incluem jogar videogame, assistir filmes e séries, ler e
          escrever. Sou um grande fã de Tolkien, fantasia e ficção científica.
          Também sou um grande fã de Star Wars e de todo o universo expandido.
          Meu personagem favorito é o Darth Vader. Meu filme favorito é O Senhor
          dos Anéis: O Retorno do Rei. Meu livro favorito é O Silmarillion.
        </p>
        <div className="flex flex-col justify-center items-center">
          <Link className="text-blue-500 hover:text-blue-700" href="/contact">
            Entre em contato comigo
          </Link>

          <Link className="text-blue-500 hover:text-blue-700" href="/projects">
            Veja meus projetos
          </Link>
        </div>
      </div>
    </section>
  );
}
