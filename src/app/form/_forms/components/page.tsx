"use client";

import { Radio, Input, Row, Col, Layout, Form, Checkbox } from "antd";

export default function Components() {
  return (
    <Layout.Content className="w-full h-full p-8">
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
              <Radio key="Sim" value={false}>
                Sim
              </Radio>
              <Radio key="Não" value={true}>
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
              <Radio key="Sim" value={false}>
                Sim
              </Radio>
              <Radio key="Não" value={true}>
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
