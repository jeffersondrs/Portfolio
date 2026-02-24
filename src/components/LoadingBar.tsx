"use client";

import React, { useState, useEffect } from "react";

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-96 gap-2 fade-in">
        <h2 className="text-2xl font-bold text-gradient">Obrigado!</h2>
        <p className="text-sm text-(--color-text-muted)">
          Seu conteúdo foi carregado com sucesso.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-96 gap-3">
      <div className="w-3/4 h-1 bg-(--color-surface-elevated) rounded-full overflow-hidden">
        <div className="h-full bg-zinc-400 rounded-full animate-loading-bar" />
      </div>
      <p className="text-xs text-(--color-text-muted) font-mono">
        Carregando...
      </p>
    </div>
  );
}
