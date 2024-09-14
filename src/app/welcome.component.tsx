"use client";

import { routes } from "@/routes/routes";
import { Layout, Button } from "antd";

export default function Welcome() {
  return (
    <Layout.Content className="w-full h-full flex flex-col justify-center items-center">
      <h1>Welcome</h1>
      <p>This is a game template.</p>
      <Button type="primary" href={routes.configurations}>
        Start
      </Button>
    </Layout.Content>
  );
}
