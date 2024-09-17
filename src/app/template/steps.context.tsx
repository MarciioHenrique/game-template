"use client";

import { createContext, useState, useContext, ReactNode } from "react";

interface StepContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

const StepContext = createContext<StepContextType | undefined>(undefined);

export const useStep = () => {
  const context = useContext(StepContext);
  if (!context) {
    throw new Error("useStep must be used within a StepProvider");
  }
  return context;
};

export const StepProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

  return (
    <StepContext.Provider value={{ currentStep, nextStep, prevStep }}>
      {children}
    </StepContext.Provider>
  );
};
