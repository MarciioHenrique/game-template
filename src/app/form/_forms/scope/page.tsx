"use client";
import { Row, Layout, Form, Select } from "antd";

const { Option } = Select;

export default function Scope() {
  const vowels = ["A", "E", "I", "O", "U"];
  const stages = {
    Sílaba: "SYLLABLE",
    Palavra: "WORD",
    Frase: "PHRASE",
    Texto: "TEXT",
  };

  return (
    <Layout.Content className="w-full h-full p-8">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 24 }}>
        <Form.Item
          label="Vogais"
          name={["scope", "vowels"]}
          rules={[
            { required: true, message: "Please select at least one vowel." },
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
    </Layout.Content>
  );
}
