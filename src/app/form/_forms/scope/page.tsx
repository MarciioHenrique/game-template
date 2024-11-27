"use client";
import { Row, Layout, Form, Select, Button } from "antd";
import { useFormState } from "../form.context";
import { Scope } from "@/models/game-request";

const { Option } = Select;

export default function ScopeForm() {
  const { onHandleNext, onHandleBack, scope, submitGameRequest } =
    useFormState();
  const [form] = Form.useForm();

  const onFinish = (values: Scope) => {
    onHandleNext({ scope: values });
    submitGameRequest();
  };

  const vowels = ["A", "E", "I", "O", "U"];
  const stages = {
    Sílaba: "SYLLABLE",
    Palavra: "WORD",
    Frase: "PHRASE",
    Texto: "TEXT",
  };

  return (
    <Layout.Content className="w-full h-full p-8">
      <Form
        form={form}
        layout="vertical"
        initialValues={scope ?? {}}
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Form.Item
            label="Vogais"
            name={["scope", "vowels"]}
            rules={[
              { required: true, message: "Selecione pelo menos uma vogal." },
            ]}
          >
            <Select mode="multiple" placeholder="Selecione as vogais">
              {vowels.map((vowel) => (
                <Option key={vowel} value={vowel}>
                  {vowel}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Form.Item
            label="Estágios"
            name={"stages"}
            rules={[{ required: true, message: "Selecione os estágios." }]}
          >
            <Select mode="multiple" placeholder="Selecione os estágios">
              {Object.entries(stages).map(([stage, value]) => (
                <Option key={value} value={value}>
                  {stage}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Button type="default" onClick={onHandleBack}>
            Voltar
          </Button>
          <Button type="primary" htmlType="submit">
            Gerar Jogo
          </Button>
        </Row>
      </Form>
    </Layout.Content>
  );
}
