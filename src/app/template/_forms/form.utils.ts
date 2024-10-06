import { gameTemplateFormSteps, GameTemplateFormValues } from "../form.steps";

export const removeUnusedValuesFromCurrentFormValues = (
  values: Partial<GameTemplateFormValues>,
  visibleSteps: typeof gameTemplateFormSteps
) => {
  Object.keys(values).forEach((key) => {
    if (!visibleSteps.some((step) => step.title === key)) {
      delete values[key as keyof GameTemplateFormValues];
    }
  });
};
