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
          type="button"
          onClick={() => {
            window.location.reload();
          }}
          className="flex flex-row items-center justify-center gap-2 font-bold py-2 px-4 rounded-lg"
        >
          Enviar Novamente!
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center max-w-2xl w-full p-10 sm:p-5 h-full gap-5 bg-gradient-to-r shadow-xl bg-gray-800"
    >
      <h1 className="text-xl font-mono text-center text-white">
        Entre em contato comigo!
      </h1>
      <div className="flex flex-col w-full gap-3 md:flex-row">
        <div className="flex flex-col justify-center items-end w-full">
          <input
            type="text"
            placeholder="Nome"
            className={`w-full py-2 px-3
            focus:outline-none
            text-xs focus:ring-2 focus:ring-gray-200
          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
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
              className="text-red-500 absolute text-xs pr-2"
            >
              Nome é obrigatório
            </motion.span>
          )}
        </div>
        <div className="flex flex-col justify-center relative items-end w-full">
          <input
            type="email"
            placeholder="E-mail"
            className={`w-full py-2 px-3
          focus:outline-none focus:ring-2 focus:ring-gray-200
            text-xs
           ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
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
              className="text-red-500 absolute text-xs pr-2"
            >
              E-mail é obrigatório
            </motion.span>
          )}
        </div>
      </div>
      <div className="flex flex-col relative w-full">
        <textarea
          placeholder="Mensagem"
          className={`w-full h-40 p-3
          focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent
          text-xs
          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}
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
        className="w-36 h-12 px-2  bg-gray-500
             transition-all duration-300 ease-in-out text-white
            shadow-lg hover:shadow-xl font-mono text-lg sm:text-base
          "
      >
        Enviar
      </motion.button>
    </form>
  );
}
