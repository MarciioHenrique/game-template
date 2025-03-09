"use client";
import { useFormState } from "./form.context";
import { Steps, Layout } from "antd";
import { FormSteps } from "./form.steps";

const { Step } = Steps;

export default function FormPage() {
  const { onHandleNext, onHandleBack, step, submitGameRequest } =
    useFormState();

  const steps = [
    { title: "Configurações Gerais" },
    { title: "Componentes" },
    { title: "Escopo" },
  ];

  return (
    <Layout className="w-full h-full bg-white">
      <Layout.Header className="bg-white font-bold">
        <Steps type="navigation" current={step - 1}>
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </Layout.Header>
      <Layout.Content>
        <FormSteps />
      </Layout.Content>
    </Layout>
  );
}
