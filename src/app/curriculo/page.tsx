'use client';

import { useState } from 'react';

export default function Curriculo() {
  const [typeCurriculo, setTypeCurriculo] = useState('fullstack');

  const chooseTypeCurriculo = (type: string) => {
    setTypeCurriculo(type);
  };

  return (
    <div className="flex justify-center items-center h-[35rem] flex-col pt-3">
      <div className="w-full h-28 flex flex-row justify-center items-center flex-wrap gap-3">
        <button
          onClick={() => {
            chooseTypeCurriculo('fullstack');
          }}
          className={`w-40 flex flex-row items-center justify-center
              bg-gradient-to-r from-orange-400 to-yellow-600 hover:from-orange-500 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out`}
        >
          Fullstack
        </button>

        <button
          onClick={() => {
            chooseTypeCurriculo('frontend');
          }}
          className={`w-40 flex flex-row items-center justify-center
              bg-gradient-to-r from-orange-400 to-yellow-600 hover:from-orange-500 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out`}
        >
          Front-end
        </button>
        <button
          onClick={() => {
            chooseTypeCurriculo('backend');
          }}
          className={`w-40 flex flex-row items-center justify-center
              bg-gradient-to-r from-orange-400 to-yellow-600 hover:from-orange-500 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out`}
        >
          Back-end
        </button>
        <button
          onClick={() => {
            chooseTypeCurriculo('english');
          }}
          className={`w-40 flex flex-row items-center justify-center
              bg-gradient-to-r from-orange-400 to-yellow-600 hover:from-orange-500 hover:to-yellow-700 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 ease-in-out`}
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
          <a
            href="curriculo/fullstack.pdf"
            className="bg-gradient-to-r from-orange-500 to-yellow-500 px-2 text-white"
          >
            Clique aqui para baixar o PDF.
          </a>
        </p>
      </object>
    </div>
  );
}
