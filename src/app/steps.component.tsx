"use client";
import { Steps } from "antd";

export default function TemplateSteps() {
  const current = 1;
  const { Step } = Steps;

  const steps = [
    "Informações Gerais",
    "Componentes",
    "Vogais e Estágios",
    "Início e Fim",
  ];

  return (
    <Steps
      current={current}
      className="flex justify-center p-4 w-8/12"
      progressDot
    >
      {steps.map((item, index) => (
        <Step
          key={item}
          title={item}
          className={`${
            current === index + 1 ? "text-blue-700 font-bold" : "text-gray-400"
          }`}
        />
      ))}
    </Steps>
  );
}
