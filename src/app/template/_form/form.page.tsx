import React from "react";
import { FormProvider } from "./form.context";
import StepForm from "./form.steps";

const Form = () => {
  return (
    <FormProvider>
      <StepForm />
    </FormProvider>
  );
};

export default Form;
