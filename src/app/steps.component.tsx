"use client";
import { Steps } from "antd";

export default function TemplateSteps() {
  const current = 0;
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
      size="small"
      type="navigation"
      className="flex justify-center p-4 w-9/12"
    >
      {steps.map((item, index) => (
        <Step
          key={item}
          title={item}
          className={`${
            current === index ? "text-blue-700 font-bold" : "text-gray-400"
          }`}
        />
      ))}
    </Steps>
  );
}
