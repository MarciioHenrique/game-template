import { FormProvider } from "./_forms/form.context";
import FormPage from "./_forms/form.page";
import { FormSteps } from "./_forms/form.steps";

export default function Page() {
  return (
    <FormProvider>
      <FormPage />
    </FormProvider>
  );
}
