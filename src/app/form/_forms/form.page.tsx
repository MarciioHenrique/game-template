"use client";
import { useFormState } from "./form.context";
import { Button, Layout } from "antd";
import { FormSteps } from "./form.steps";

export default function FormPage() {
  const { onHandleNext, onHandleBack, step, submitGameRequest } =
    useFormState();

  const headerText: { [key: number]: string } = {
    1: "Configurações Gerais",
    2: "Componentes",
    3: "Escopo",
  };

  return (
    <Layout className="w-full h-full bg-white">
      <Layout.Header className="bg-white">
        <h1 className="text-black text-lg font-bold p-4 flex justify-center items-center">
          {headerText[step]}
        </h1>
      </Layout.Header>
      <Layout.Content>
        <FormSteps />
      </Layout.Content>
      {/* <Layout.Footer className="bg-white flex justify-between items-center">
        <Button onClick={onHandleBack} disabled={step === 1}>
          Voltar
        </Button>
        {step === 3 ? (
          <Button onClick={submitGameRequest}>Gerar Jogo</Button>
        ) : (
          <Button onClick={() => onHandleNext({})}>Próximo</Button>
        )}
      </Layout.Footer> */}
    </Layout>
  );
}
