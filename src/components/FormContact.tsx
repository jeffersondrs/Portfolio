import React, { useState, useEffect } from 'react';
import { ThemeContext } from '@/context/ThemeProvider';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { ToastContainer } from 'react-toastify';
import ThankYouSubmit from './ThankyouSubmit';

export default function FormContact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const { isDark } = useContext(ThemeContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setName(data.name);
    setEmail(data.email);
    setMessage(data.message);
    setIsSubmit(true);
  };

  if (isSubmit) {
    return <ThankYouSubmit name={name} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center sm:w-full p-10 sm:p-5 h-full gap-5 bg-gradient-to-r rounded-2xl shadow-xl from-purple-400 to-pink-600"
    >
      <h1 className="text-2xl sm:text-2xl font-bold text-center text-white">
        Entre em contato comigo!
      </h1>
      <div className="flex flex-col justify-center items-end">
        <input
          type="text"
          placeholder="Nome"
          className={`w-96 sm:w-full h-12 px-5 rounded-lg 
            focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent
          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
          {...register('name', { required: true })}
          onChange={(e) => setName(e.target.value)}
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
      <div className="flex flex-col justify-center items-end">
        <input
          type="email"
          placeholder="E-mail"
          className={`w-96 sm:w-full h-12 px-5 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent

           ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
          {...register('email', { required: true })}
          onChange={(e) => setEmail(e.target.value)}
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
      <div className="flex flex-col justify-center items-end">
        <textarea
          placeholder="Mensagem"
          className={`w-96 sm:w-full h-40 p-5 rounded-lg 
          focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent

          ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
          {...register('message', { required: true })}
        />
        {errors.message && (
          <motion.span
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 absolute text-xs pr-2"
          >
            Mensagem é obrigatório
          </motion.span>
        )}
      </div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-48 h-12 px-5 rounded-lg bg-gradient-to-r from-blue-400 to-sky-400 
            hover:from-blue-500 hover:to-sky-500 transition-all duration-300 ease-in-out text-white
            shadow-lg hover:shadow-xl font-bold text-lg sm:text-base
          "
      >
        Enviar
      </motion.button>
    </form>
  );
}
