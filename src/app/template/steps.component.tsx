"use client";
import { Steps } from "antd";

interface props {
  current: number;
}

export default function TemplateSteps({ current }: props) {
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
      className="flex flex-wrap justify-center p-4 sm:w-full md:w-6/12 lg:w-9/12 xl:w-9/12"
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
