"use client";
import {
  Components,
  GameRequest,
  GeneralSettings,
  Scope,
} from "@/models/game-request";
import { message } from "antd";
import { createContext, useContext, useState } from "react";

export interface FormState {
  step: number;
  configurations: GeneralSettings | null;
  components: Components | null;
  scope: Scope | null;
  onHandleNext: (values: Partial<GameRequest>) => void;
  onHandleBack: () => void;
  submitGameRequest: () => void;
}

const FormContext = createContext<FormState | undefined>(undefined);

export const FormProvider = ({ children }: { children: React.ReactNode }) => {
  const [step, setStep] = useState(1);
  const [configurations, setConfigurations] = useState<GeneralSettings | null>(
    null
  );
  const [components, setComponents] = useState<Components | null>(null);
  const [scope, setScope] = useState<Scope | null>(null);

  const onHandleNext = async (values: Partial<GameRequest>) => {
    return new Promise<void>((resolve) => {
      if (step === 1 && values.configurations)
        setConfigurations(values.configurations);
      if (step === 2 && values.components) setComponents(values.components);
      if (step === 3 && values.scope) setScope(values.scope);

      setStep((prev) => Math.min(prev + 1, 3));

      // Resolva a Promise após a execução
      resolve();
    });
  };

  const onHandleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const submitGameRequest = async () => {
    const request: GameRequest = {
      configurations: configurations!,
      components: components!,
      scope: scope!,
    };
    console.log("Submitting GameRequest:", request);

    try {
      const response = await fetch("http://localhost:8080/v1/code-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(request),
      });

      if (response.ok) {
        const projectName: String | undefined =
          configurations?.projectName.toLowerCase();
        const blob = await response.blob(); // Converte a resposta para um blob
        const url = window.URL.createObjectURL(blob); // Cria um URL para o blob
        const a = document.createElement("a"); // Cria um link de download
        a.href = url;
        a.download = projectName ? projectName + ".zip" : "game.zip"; // Nome do arquivo a ser baixado
        a.click(); // Simula o clique para iniciar o download
        window.URL.revokeObjectURL(url); // Libera a URL criada
      } else {
        console.error("Erro ao baixar o arquivo.");
      }
    } catch (error) {
      message.error("An error occurred while submitting the form.");
    }
  };

  return (
    <FormContext.Provider
      value={{
        step,
        configurations,
        components,
        scope,
        onHandleNext,
        onHandleBack,
        submitGameRequest,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormState = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormState must be used within a FormProvider");
  return context;
};
