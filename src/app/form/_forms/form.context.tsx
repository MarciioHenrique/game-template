"use client";
import { createContext, useContext, useState } from "react";

interface FormContextProps {
  onHandleNext: () => void;
  onHandleBack: () => void;
  step: number;
}

interface FormProviderProps {
  children: React.ReactNode;
}

const FormContext = createContext({} as FormContextProps);

export function FormProvider({ children }: FormProviderProps) {
  const [step, setStep] = useState(1);

  const onHandleNext = () => {
    if (step === 3) {
      return;
    }
    setStep((prev) => prev + 1);
  };

  const onHandleBack = () => {
    if (step === 1) {
      return;
    }
    setStep((prev) => prev - 1);
  };

  return (
    <FormContext.Provider value={{ onHandleBack, onHandleNext, step }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormState must be used within a FormProvider");
  }
  return context;
}
