import React, { type ReactNode } from "react";
import styled from "styled-components";

import { Flex } from "antd";
import { FormSteps } from "./form-steps";

const Container = styled(Flex)`
  padding-left: 24px;
  width: 100%;
`;

const FormContainer = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 48px 80px;
  width: 100%;
`;

type FormLayoutProps = {
  children: ReactNode;
} & React.ComponentPropsWithRef<typeof FormSteps>;

export const FormLayout: React.FC<FormLayoutProps> = ({
  steps,
  currentStep,
  onBackButton,
  onStepChange,
  children,
}) => {
  return (
    <Container>
      <FormSteps
        steps={steps}
        currentStep={currentStep}
        onBackButton={onBackButton}
        onStepChange={onStepChange}
      />
      <FormContainer>{children}</FormContainer>
    </Container>
  );
};
