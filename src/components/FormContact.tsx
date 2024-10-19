'use client';

import React, { useState } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import ThankYouSubmit from './ThankyouSubmit';

interface FormContactProps {
  name: string;
  email: string;
  message: string;
}

export default function FormContact() {
  const [formmulary, setFormmulary] = useState<FormContactProps>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmit, setIsSubmit] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm();

  const sendMessage = async () => {
    const response = await fetch('https://jeffersondrs.tech/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formmulary.name,
        email: formmulary.email,
        message: formmulary.message,
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const onSubmit = (data: any) => {
    setIsSubmit(true);
    sendMessage();
  };

  if (isSubmit) {
    return (
      <div className="flex flex-col justify-center items-center gap-3">
        <ThankYouSubmit name={formmulary.name} />
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="flex flex-row items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Enviar Novamente!
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center max-w-2xl w-full p-10 sm:p-5 h-full gap-5 bg-gradient-to-r rounded-2xl shadow-xl from-orange-500 to-yellow-500"
    >
      <h1 className="text-xl sm:text-2xl font-bold text-center text-white">
        Entre em contato comigo!
      </h1>
      <div className="flex flex-row w-full gap-3">
        <div className="flex flex-col justify-center items-end w-full">
          <input
            type="text"
            placeholder="Nome"
            className={`w-80 sm:w-full  py-2 px-3 rounded-lg
            focus:outline-none
            text-xs md:text-base focus:ring-2 focus:ring-gray-200 focus:border-transparent
          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
            {...register('name', { required: true })}
            onChange={(e) => {
              setFormmulary({ ...formmulary, name: e.target.value });
              clearErrors('name');
            }}
          />
          {errors.name && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-red-500 absolute text-[10px] md:text-xs pr-2"
            >
              Nome é obrigatório
            </motion.span>
          )}
        </div>
        <div className="flex flex-col justify-center relative items-end w-full">
          <input
            type="email"
            placeholder="E-mail"
            className={`w-96 sm:w-full py-2 px-3 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent
            text-xs md:text-base
           ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
            {...register('email', { required: true })}
            onChange={(e) => {
              setFormmulary({ ...formmulary, email: e.target.value });
              clearErrors('email');
            }}
          />
          {errors.email && (
            <motion.span
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-red-500 absolute text-[10px] md:text-xs pr-2"
            >
              E-mail é obrigatório
            </motion.span>
          )}
        </div>
      </div>
      <div className="flex flex-col relative w-full">
        <textarea
          placeholder="Mensagem"
          className={`w-full h-40 p-3 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent
          text-xs md:text-base
          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
          {...register('message', { required: true })}
          onChange={(e) => {
            setFormmulary({ ...formmulary, message: e.target.value });
            clearErrors('message');
          }}
        />
        {errors.message && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 absolute text-xs pr-2 right-0"
          >
            Mensagem é obrigatório
          </motion.span>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-48 h-12 px-5 rounded-lg bg-orange-600
             transition-all duration-300 ease-in-out text-white
            shadow-lg hover:shadow-xl font-bold text-lg sm:text-base
          "
      >
        Enviar
      </motion.button>
    </form>
  );
}
