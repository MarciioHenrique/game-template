"use client";
import {
  Components,
  GameRequest,
  GeneralSettings,
  Scope,
} from "@/models/game-request";
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

  const onHandleNext = (values: Partial<GameRequest>) => {
    if (step === 1 && values.configurations)
      setConfigurations(values.configurations);
    if (step === 2 && values.components) setComponents(values.components);
    if (step === 3 && values.scope) setScope(values.scope);
    setStep((prev) => Math.min(prev + 1, 3));
  };

  const onHandleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const submitGameRequest = async () => {
    const request: GameRequest = {
      configurations: configurations!,
      components: components!,
      scope: scope!,
    };
    console.log("Submitting GameRequest:", request);

    await fetch("http://localhost:8080/v1/code-generator", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
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
