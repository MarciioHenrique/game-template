"use client";
import React from "react";
import { Form, Input, Checkbox, Select, Button, message } from "antd";
import { GameRequest } from "../../models/game-request";

const { Option } = Select;

export default function GameForm() {
  const [form] = Form.useForm();

  const onFinish = async (values: GameRequest) => {
    try {
      const response = await fetch("http://localhost:8080/v1/code-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const blob = await response.blob(); // Converte a resposta para um blob
        const url = window.URL.createObjectURL(blob); // Cria um URL para o blob
        const a = document.createElement("a"); // Cria um link de download
        a.href = url;
        a.download = "game.zip"; // Nome do arquivo a ser baixado
        a.click(); // Simula o clique para iniciar o download
        window.URL.revokeObjectURL(url); // Libera a URL criada
      } else {
        console.error("Erro ao baixar o arquivo.");
      }
    } catch (error) {
      message.error("An error occurred while submitting the form.");
    }
  };

  const stages = {
    Sílaba: "SYLLABLE",
    Palavra: "WORD",
    Frase: "PHRASE",
    Texto: "TEXT",
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        configurations: {
          database: false,
          baseSounds: false,
          gitIgnore: false,
        },
        components: {
          menu: false,
          intro: false,
          startScreen: false,
          endScreen: false,
          scoreAndTime: false,
        },
        scope: {
          vowels: [],
          stages: [],
        },
      }}
    >
      <h1 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 10 }}>
        Configurações Gerais
      </h1>
      <Form.Item
        label="Nome do Projeto"
        name={["configurations", "projectName"]}
        rules={[{ required: true, message: "Project Name is required." }]}
      >
        <Input placeholder="Digite o nome do projeto" />
      </Form.Item>
      <Form.Item name={["configurations", "database"]} valuePropName="checked">
        <Checkbox>Banco de Dados</Checkbox>
      </Form.Item>
      <Form.Item
        name={["configurations", "baseSounds"]}
        valuePropName="checked"
      >
        <Checkbox>Sons</Checkbox>
      </Form.Item>
      <Form.Item name={["configurations", "gitIgnore"]} valuePropName="checked">
        <Checkbox>Gerar .gitignore</Checkbox>
      </Form.Item>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 10 }}>
        Componentes
      </h2>
      <Form.Item name={["components", "menu"]} valuePropName="checked">
        <Checkbox>Menu</Checkbox>
      </Form.Item>
      <Form.Item name={["components", "intro"]} valuePropName="checked">
        <Checkbox>Intro</Checkbox>
      </Form.Item>
      <Form.Item name={["components", "startScreen"]} valuePropName="checked">
        <Checkbox>Tela Inicial</Checkbox>
      </Form.Item>
      <Form.Item name={["components", "endScreen"]} valuePropName="checked">
        <Checkbox>Tela Final</Checkbox>
      </Form.Item>
      <Form.Item name={["components", "scoreAndTime"]} valuePropName="checked">
        <Checkbox>Pontuação e Tempo</Checkbox>
      </Form.Item>

      <h2 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: 10 }}>
        Escopo
      </h2>
      <Form.Item
        label="Vogais"
        name={["scope", "vowels"]}
        rules={[
          { required: true, message: "Please select at least one vowel." },
        ]}
      >
        <Select mode="multiple" placeholder="Selecione as vogais">
          {["A", "E", "I", "O", "U"].map((vowel) => (
            <Option key={vowel} value={vowel}>
              {vowel}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        label="Estágios"
        name={["scope", "stages"]}
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

      <Form.Item style={{ paddingBottom: 20 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
}
