import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Flex, Steps, Typography } from "antd";
import React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import styled from "styled-components";

const Container = styled(Flex)`
  margin-right: 24px;
  padding: 24px;
  background-color: #f5f5f5;
  overflow-y: auto;
`;

const BackButton = styled(Button)`
  padding: 0;
  width: fit-content;
`;

const StyledSteps = styled(Steps)`
  && .ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
    color: ${({ theme }) => theme.antd.colorTextBase};
  }
`;

export interface StepsProps {
  steps: React.ComponentPropsWithRef<typeof Steps>["items"];
  currentStep: React.ComponentPropsWithRef<typeof Steps>["current"];
  onBackButton: () => void;
  onStepChange?: React.ComponentPropsWithRef<typeof Steps>["onChange"];
}

export const FormSteps: React.FC<StepsProps> = ({
  steps,
  currentStep,
  onBackButton,
  onStepChange,
}) => {
  const intl = useIntl();
  return (
    <Container vertical gap="middle">
      <BackButton
        type="link"
        icon={<ArrowLeftOutlined />}
        onClick={onBackButton}
      >
        {intl.formatMessage({ id: "SHARED_BACK_BUTTON" })}
      </BackButton>
      <Flex vertical gap="middle">
        <Typography.Title level={4}>
          <FormattedMessage id="FORM_LAYOUT_STEPS_FOLLOW" />
        </Typography.Title>
        <StyledSteps
          onChange={onStepChange}
          direction="vertical"
          items={steps}
          current={currentStep}
        />
      </Flex>
    </Container>
  );
};
