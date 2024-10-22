'use client';

import { useState } from 'react';

export default function Curriculo() {
  const [typeCurriculo, setTypeCurriculo] = useState('fullstack');

  const chooseTypeCurriculo = (type: string) => {
    setTypeCurriculo(type);
  };

  return (
    <div className="flex justify-center items-center h-[40rem] flex-col py-3">
      <div className="w-full h-28 flex flex-row justify-center items-center flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('fullstack');
          }}
          className="w-40 flex flex-row items-center text-sm justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          Fullstack
        </button>
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('frontend');
          }}
          className="w-40 flex flex-row items-center text-sm justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          Front-end
        </button>
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('backend');
          }}
          className="w-40 flex flex-row items-center text-sm justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          Back-end
        </button>
        <button
          type="button"
          onClick={() => {
            chooseTypeCurriculo('english');
          }}
          className="w-40 flex flex-row items-center text-sm justify-center bg-gray-700 text-white
               font-mono py-2 px-4 transition-all duration-300 ease-in-out"
        >
          English
        </button>
      </div>
      <object
        data={`curriculo/${typeCurriculo}.pdf
          `}
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <p className="text-base p-10 text-center">
          Seu dispositivo não suporta visualização de PDF.
          <br />
          <a href="curriculo/fullstack.pdf" className="">
            Clique aqui para baixar o PDF.
          </a>
        </p>
      </object>
    </div>
  );
}
