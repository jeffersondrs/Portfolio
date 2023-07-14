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
          className="flex flex-row items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Enviar Novamente!
        </button>
      </div>
    );
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
          onChange={(e) =>
            setFormmulary({ ...formmulary, name: e.target.value })
          }
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
          onChange={(e) =>
            setFormmulary({ ...formmulary, email: e.target.value })
          }
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
          onChange={(e) =>
            setFormmulary({ ...formmulary, message: e.target.value })
          }
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
