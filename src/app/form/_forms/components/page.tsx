"use client";

import { Radio, Input, Row, Col, Layout, Form, Checkbox, Button } from "antd";
import { useFormState } from "../form.context";
import { Components } from "@/models/game-request";

export default function ComponentsForm() {
  const { onHandleNext, onHandleBack, components } = useFormState();
  const [form] = Form.useForm();

  const onFinish = (values: Components) => {
    onHandleNext({ components: values });
  };

  return (
    <Layout.Content className="w-full h-full p-8 flex flex-col">
      <Form
        form={form}
        layout="vertical"
        initialValues={components ?? {}}
        onFinish={onFinish}
        className="flex flex-col flex-grow"
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form.Item
              name="menu"
              label="Menu"
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
              name="intro"
              label="Intro do Ninoedu"
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
              name="startScreen"
              label="Tela Inicial"
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
              name="endScreen"
              label="Tela Final"
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
              name="scoreAndTime"
              label="Pontuação e Tempo"
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
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}
          className="w-full flex justify-between items-center mt-auto"
        >
          <Button type="default" onClick={onHandleBack}>
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
