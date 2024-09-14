"use client";

import { routes } from "@/routes/routes";
import { Layout, Button, Typography } from "antd";

export default function Welcome() {
  return (
    <Layout.Content className="w-full h-full flex flex-col justify-center items-center">
      <Typography.Title> Welcome to Game Template </Typography.Title>
      <Typography.Text>
        This is an game template develop to help on game production. You can
        start clicking on the button below.
      </Typography.Text>
      <Button type="primary" href={routes.configurations} className="m-8">
        Start
      </Button>
    </Layout.Content>
  );
}
