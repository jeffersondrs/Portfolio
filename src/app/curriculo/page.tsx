'use client';

import { useState } from 'react';

export default function Curriculo() {
  const [typeCurriculo, setTypeCurriculo] = useState('Curriculo Full Stack1');

  const chooseTypeCurriculo = (type: string) => {
    setTypeCurriculo(type);
  };

  return (
    <div className="flex justify-center items-center flex-col p-4 w-full">
      <div className="w-full h-20 flex flex-row justify-center items-center flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('Curriculo Full Stack1');
          }}
          className="flex flex-row items-center text-xs justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          Fullstack
        </button>
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('frontend');
          }}
          className="flex flex-row items-center text-xs justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          Front-end
        </button>
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('Curriculo Back end');
          }}
          className="flex flex-row items-center text-xs justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          Back-end
        </button>
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('english');
          }}
          className="flex flex-row items-center text-xs justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          English
        </button>
      </div>
      <div className="w-full h-screen">
        <object
          data={`curriculo/${typeCurriculo}.pdf
          `}
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p className="text-xs p-10 text-center">
            Seu dispositivo não suporta visualização de PDF.
            <br />
            <a href="curriculo/fullstack.pdf">
              Clique aqui para baixar o PDF.
            </a>
          </p>
        </object>
      </div>
    </div>
  );
}
