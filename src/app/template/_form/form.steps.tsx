"use client";
import React from "react";
import { useFormState } from "./form.context";

const StepForm: React.FC = () => {
  const { step, nextStep, prevStep } = useFormState();

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return <div>Step 1: Enter your name</div>;
      case 2:
        return <div>Step 2: Enter your email</div>;
      case 3:
        return <div>Step 3: Confirm your details</div>;
      default:
        return <div>Unknown step</div>;
    }
  };

  return (
    <div>
      <h1>Multi-Step Form</h1>
      {renderStepContent()}
      <div>
        <button onClick={prevStep} disabled={step === 1}>
          Previous
        </button>
        <button onClick={nextStep} disabled={step === 3}>
          Next
        </button>
      </div>
    </div>
  );
};

export default StepForm;
