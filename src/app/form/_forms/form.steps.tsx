"use client";
import Components from "./components/page";
import { useFormState } from "./form.context";
import GeneralConfigurations from "./general-configurations/page";
import Scope from "./scope/page";

export function FormSteps() {
  const { step } = useFormState();

  switch (step) {
    case 1:
      return <GeneralConfigurations />;
    case 2:
      return <Components />;
    case 3:
      return <Scope />;
    default:
      return null;
  }
}
