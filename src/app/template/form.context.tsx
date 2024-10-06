"use client";

import { createContext, useState, useContext, ReactNode, useMemo } from "react";
import { GameTemplateFormValues } from "./form.steps";

interface GameTemplateFormContextProps {
  children: ReactNode;
}

interface GameTemplateFormContextValue {
  gameTemplateFormValues: Partial<GameTemplateFormValues> | undefined;
  setGameTemplateFormValues: (
    gameTemplateFormValues: Partial<GameTemplateFormValues>
  ) => void;
}

const GameTemplateFormContext = createContext<
  GameTemplateFormContextValue | undefined
>(undefined);

export const GameTemplateFormProvider: React.FC<
  GameTemplateFormContextProps
> = ({ children }) => {
  const [gameTemplateFormValues, setGameTemplateFormValues] =
    useState<Partial<GameTemplateFormValues>>();

  const value = useMemo(
    () => ({ gameTemplateFormValues, setGameTemplateFormValues }),
    [gameTemplateFormValues]
  );

  return (
    <GameTemplateFormContext.Provider value={value}>
      {children}
    </GameTemplateFormContext.Provider>
  );
};

export const useGameTemplateForm = () => {
  const context = useContext(GameTemplateFormContext);
  if (!context) {
    throw new Error(
      "useGameTemplateForm must be used within a GameTemplateFormProvider"
    );
  }
  return context;
};

interface StepContextType {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}

// const StepContext = createContext<StepContextType | undefined>(undefined);

// export const useStep = () => {
//   const context = useContext(StepContext);
//   if (!context) {
//     throw new Error("useStep must be used within a StepProvider");
//   }
//   return context;
// };

// export const StepProvider = ({ children }: { children: ReactNode }) => {
//   const [currentStep, setCurrentStep] = useState(0);

//   const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
//   const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));

//   return (
//     <StepContext.Provider value={{ currentStep, nextStep, prevStep }}>
//       {children}
//     </StepContext.Provider>
//   );
// };
