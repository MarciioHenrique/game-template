import { createContext, useContext, useState } from "react";

interface FormContextData {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
}

const FormContext = createContext<FormContextData>({
  nextStep: () => {},
  prevStep: () => {},
  step: 1,
});

interface FormProviderProps {
  children: React.ReactNode;
}

export function FormProvider({ children }: FormProviderProps) {
  const [step, setStep] = useState(1);

  function nextStep() {
    console.log("nextStep");
    setStep((prev) => prev + 1);
  }

  function prevStep() {
    console.log("prevStep");
    setStep((prev) => prev - 1);
  }

  return (
    <FormContext.Provider value={{ nextStep, prevStep, step }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormState() {
  const context = useContext(FormContext);

  if (context === undefined) {
    throw new Error("useFormState must be used within a FormProvider");
  }

  return context;
}
