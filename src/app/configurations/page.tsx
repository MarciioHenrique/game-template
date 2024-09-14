"use client";

import { Radio, Input, Row, Col, Layout, Form } from "antd";

export default function Configurations() {
  return (
    <Layout.Content className="w-full h-full p-8">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item
            name="Nome do Projeto"
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
            name="Dimensões da Tela"
            label="Dimensões da Tela"
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
      </Row>
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <Form.Item
            name="Proporções da Tela"
            label="Proporções da Tela"
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
            name="Git Ignore"
            label="Git Ignore"
            rules={[
              {
                required: true,
                message: "Por favor, selecione uma opção.",
              },
            ]}
            labelCol={{ span: 24 }}
          >
            <Radio.Group>
              <Radio key="Sim" value={false}>
                Sim
              </Radio>
              <Radio key="Não" value={true}>
                Não
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Layout.Content>
  );
}
