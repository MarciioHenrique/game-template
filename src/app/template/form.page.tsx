"use client";
import { Alert, App, Button, Form } from "antd";
import { useCallback, useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import {
  buildGameTemplateSteps,
  gameTemplateFormSteps,
  GameTemplateFormValues,
} from "./form.steps";
import { GameTemplateFormProvider, useGameTemplateForm } from "./form.context";
import { useNavigate } from "react-router-dom";
import { FormLayout } from "@/components/form/form-layout";
import { stringUtils } from "@/utils/string.utils";
import { removeUnusedValuesFromCurrentFormValues } from "./_forms/form.utils";

interface GameTemplateFormProps {
  disabled?: boolean;
  initialStepName?:
    | ReturnType<typeof buildGameTemplateSteps>[number]["title"]
    | null;
  gameTemplateFormInitialValues?: Partial<GameTemplateFormValues>;
}

export const GameTemplateForm = (props: GameTemplateFormProps) => {
  return (
    <GameTemplateFormProvider>
      <GameTemplateFormContent {...props} />
    </GameTemplateFormProvider>
  );
};

const GameTemplateFormContent = ({
  disabled,
  initialStepName,
  gameTemplateFormInitialValues,
}: GameTemplateFormProps) => {
  const [form] = Form.useForm<GameTemplateFormValues>();
  const { setFieldsValue } = form;
  const intl = useIntl();
  const { message } = App.useApp();
  const [currentStep, setCurrentStep] = useState(0);
  const navigate = useNavigate();
  const formValues = useRef(gameTemplateFormInitialValues);
  const [filteredSteps, setFilteredSteps] = useState(
    buildGameTemplateSteps(gameTemplateFormInitialValues)
  );
  const [errorMessage, setErrorMessage] = useState<string>();
  const { setGameTemplateFormValues } = useGameTemplateForm();

  // const { callService: createProposal, loading } = useServiceCall(
  //   service.createProposal
  // );

  // const onCreateProposal = useCallback(
  //   async (proposal: Partial<ProposalFormValues>) => {
  //     const { success, response } = await createProposal(
  //       buildProposal(proposal as ProposalFormValues)
  //     );

  //     if (!success)
  //       return message.error(
  //         intl.formatMessage({
  //           id: "PROPOSAL_FORM_SEND_PROPOSAL_ERROR_MESSAGE",
  //         })
  //       );

  //     message.success(
  //       intl.formatMessage({
  //         id: "PROPOSAL_FORM_SEND_PROPOSAL_SUCCESS_MESSAGE",
  //       })
  //     );
  //     navigate(
  //       `${routes.proposalOnboarding(response.applicationId)}?step=${
  //         documentsStep.title
  //       }`
  //     );
  //   },
  //   [createProposal, intl, message, navigate]
  // );

  useEffect(() => {
    if (gameTemplateFormInitialValues) {
      setFieldsValue(gameTemplateFormInitialValues);
      setGameTemplateFormValues(gameTemplateFormInitialValues);
      setFilteredSteps(buildGameTemplateSteps(gameTemplateFormInitialValues));
    }
  }, [
    gameTemplateFormInitialValues,
    setFieldsValue,
    setGameTemplateFormValues,
  ]);

  useEffect(() => {
    if (initialStepName)
      setCurrentStep(
        filteredSteps?.findIndex((step) => step.title === initialStepName)
      );
  }, [filteredSteps, initialStepName]);

  return (
    <FormLayout
      steps={filteredSteps.map((step) => ({
        title: intl.formatMessage({
          id: `PROPOSAL_FORMS_STEP_TITLE_${stringUtils.toUpperCase(
            step.title
          )}` as const,
        }),
        description: "\u00A0",
      }))}
      currentStep={currentStep}
      onBackButton={() => {
        setCurrentStep((step) => {
          if (step === 0) {
            navigate(-1);
            return step;
          }
          return step - 1;
        });
      }}
      onStepChange={disabled ? (value) => setCurrentStep(value) : undefined}
    >
      <Form
        validateMessages={{
          types: {
            number: "",
          },
        }}
        disabled={disabled}
        form={form}
        layout="vertical"
        onFinish={(values) => {
          setErrorMessage(undefined);
          formValues.current = {
            ...formValues.current,
            ...values,
          };
          const newSteps = gameTemplateFormSteps.filter((steps) =>
            steps.visible()
          );
          removeUnusedValuesFromCurrentFormValues(formValues.current, newSteps);
          setGameTemplateFormValues(formValues.current);
          setFilteredSteps(buildGameTemplateSteps(formValues.current));
          setCurrentStep((step) => {
            if (step + 1 === newSteps.length) {
              alert(formValues.current!);
              return step;
            }
            return step + 1;
          });
        }}
        scrollToFirstError
      >
        {filteredSteps[currentStep].component}

        {errorMessage && (
          <Alert
            description={errorMessage}
            type="error"
            showIcon
            closable
            style={{ marginBottom: "24px" }}
          />
        )}

        {!disabled && (
          <Button
            type="primary"
            style={{ width: "100%" }}
            htmlType="submit"
            // loading={loading}
          >
            <FormattedMessage id="SHARED_NEXT_BUTTON" />
          </Button>
        )}
      </Form>
      {disabled && currentStep < filteredSteps.length - 1 && (
        <Button
          type="primary"
          style={{ width: "100%" }}
          onClick={() => setCurrentStep((step) => step + 1)}
        >
          <FormattedMessage id="SHARED_NEXT_BUTTON" />
        </Button>
      )}
    </FormLayout>
  );
};
