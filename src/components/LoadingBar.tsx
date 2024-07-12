import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula um carregamento de 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-96 bg-gray-100">
      {isLoading ? (
        <div className="w-3/4 h-2 bg-gray-300 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2 }}
            className="h-full bg-blue-500"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-gray-700">Obrigado!</h1>
          <p className="text-gray-500">Seu conteúdo foi carregado com sucesso.</p>
        </div>
      )}
    </div>
  );
}
