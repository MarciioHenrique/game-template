"use client";
import { Button } from "antd";
import TemplateSteps from "./steps.component";
import { StepProvider, useStep } from "./steps.context";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StepProvider>
      <StepLayout>{children}</StepLayout>
    </StepProvider>
  );
}

function StepLayout({ children }: { children: React.ReactNode }) {
  const { currentStep, nextStep, prevStep } = useStep();

  return (
    <>
      <TemplateSteps current={currentStep} />
      <div className="flex justify-between mt-4">
        <Button onClick={prevStep} disabled={currentStep === 0}>
          Voltar
        </Button>
        <Button type="primary" onClick={nextStep} disabled={currentStep === 3}>
          Avançar
        </Button>
      </div>
      {children}
    </>
  );
}
