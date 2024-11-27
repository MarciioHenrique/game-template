"use client";
import { Radio, Input, Row, Col, Layout, Form, Button } from "antd";
import { useFormState } from "../form.context";
import { GeneralSettings } from "@/models/game-request";

export default function GeneralConfigurations() {
  const { onHandleNext, configurations } = useFormState();
  const [form] = Form.useForm();

  const onFinish = (values: GeneralSettings) => {
    onHandleNext({ configurations: values });
  };

  return (
    <Layout.Content className="w-full h-full p-8">
      <Form
        form={form}
        layout="vertical"
        initialValues={configurations ?? {}}
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name="ProjectName"
              label="Nome do Projeto"
              rules={[
                {
                  required: true,
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name="database"
              label="Banco de Dados"
              rules={[
                {
                  required: true,
                  message: "Por favor, selecione uma opção.",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Radio.Group>
                <Radio key="Sim" value={true}>
                  Sim
                </Radio>
                <Radio key="Não" value={false}>
                  Não
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name="baseSounds"
              label="Sons base"
              rules={[
                {
                  required: true,
                  message: "Por favor, selecione uma opção.",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Radio.Group>
                <Radio key="Sim" value={true}>
                  Sim
                </Radio>
                <Radio key="Não" value={false}>
                  Não
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name="gitIgnore"
              label="Gerar .gitignore"
              rules={[
                {
                  required: true,
                  message: "Por favor, selecione uma opção.",
                },
              ]}
              labelCol={{ span: 24 }}
            >
              <Radio.Group>
                <Radio key="Sim" value={true}>
                  Sim
                </Radio>
                <Radio key="Não" value={false}>
                  Não
                </Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Button type="default" disabled>
            Voltar
          </Button>
          <Button type="primary" htmlType="submit">
            Próximo
          </Button>
        </Row>
      </Form>
    </Layout.Content>
  );
}
