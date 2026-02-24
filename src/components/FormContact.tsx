"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import ThankYouSubmit from "./ThankyouSubmit";

interface FormContactProps {
  name: string;
  email: string;
  message: string;
}

export default function FormContact() {
  const [formulary, setFormulary] = useState<FormContactProps>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmit, setIsSubmit] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<FormContactProps>();

  const sendMessage = async () => {
    await fetch("https://jeffersondrs.tech/api/messages", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formulary),
    });
  };

  const onSubmit = () => {
    setIsSubmit(true);
    sendMessage();
  };

  if (isSubmit) {
    return (
      <div className="flex flex-col items-center gap-4">
        <ThankYouSubmit name={formulary.name} />
        <Button variant="outline" onClick={() => window.location.reload()}>
          Enviar Novamente
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="surface flex flex-col items-center w-full max-w-2xl gap-5 p-8 sm:p-6"
    >
      <h2 className="text-lg font-mono text-center text-gradient">
        Entre em contato comigo!
      </h2>

      <div className="flex flex-col w-full gap-4 md:flex-row">
        <div className="flex flex-col w-full gap-1">
          <Input
            type="text"
            placeholder="Nome"
            className="bg-(--color-surface-elevated) border-(--color-border-subtle) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus-visible:ring-(--color-border-subtle)"
            {...register("name", { required: true })}
            onChange={(e) => {
              setFormulary({ ...formulary, name: e.target.value });
              clearErrors("name");
            }}
          />
          {errors.name && (
            <span className="text-red-400 text-xs">Nome é obrigatório</span>
          )}
        </div>

        <div className="flex flex-col w-full gap-1">
          <Input
            type="email"
            placeholder="E-mail"
            className="bg-(--color-surface-elevated) border-(--color-border-subtle) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus-visible:ring-(--color-border-subtle)"
            {...register("email", { required: true })}
            onChange={(e) => {
              setFormulary({ ...formulary, email: e.target.value });
              clearErrors("email");
            }}
          />
          {errors.email && (
            <span className="text-red-400 text-xs">E-mail é obrigatório</span>
          )}
        </div>
      </div>

      <div className="flex flex-col w-full gap-1">
        <Textarea
          placeholder="Mensagem"
          className="h-40 bg-(--color-surface-elevated) border-(--color-border-subtle) text-(--color-text-primary) placeholder:text-(--color-text-muted) focus-visible:ring-(--color-border-subtle) resize-none"
          {...register("message", { required: true })}
          onChange={(e) => {
            setFormulary({ ...formulary, message: e.target.value });
            clearErrors("message");
          }}
        />
        {errors.message && (
          <span className="text-red-400 text-xs">Mensagem é obrigatória</span>
        )}
      </div>

      <Button type="submit" variant="secondary" className="w-full font-mono">
        Enviar
      </Button>
    </form>
  );
}
