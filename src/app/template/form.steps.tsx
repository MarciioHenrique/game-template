"use client";
import {
  Components,
  GeneralSettings,
  OtherSettings,
  Scope,
} from "@/models/game-request";
import { formPathNameGenerator } from "@/utils/antd-form.utils";
import { Steps } from "antd";
import { GeneralSettingsForm } from "./_forms/general-settings/general-settings.form";

export interface GameTemplateFormValues {
  generalSettings: GeneralSettings;
  components: Components;
  scope: Scope;
  otherSettings: OtherSettings;
}

const { relativePathNameGenerator, absolutePathNameGenerator } =
  formPathNameGenerator<GameTemplateFormValues>({});

export const gameTemplateFormSteps = [
  {
    title: "generalSettings",
    component: (
      <GeneralSettingsForm<GameTemplateFormValues>
        name={relativePathNameGenerator("generalSettings")}
        absolutePathName={absolutePathNameGenerator("generalSettings")}
      />
    ),
    visible: () => true,
  },
  {
    title: "components",
    component: (
      <GeneralSettingsForm<GameTemplateFormValues>
        name={relativePathNameGenerator("components")}
        absolutePathName={absolutePathNameGenerator("components")}
      />
    ),
    visible: () => true,
  },
  {
    title: "scope",
    component: (
      <GeneralSettingsForm<GameTemplateFormValues>
        name={relativePathNameGenerator("scope")}
        absolutePathName={absolutePathNameGenerator("scope")}
      />
    ),
    visible: () => true,
  },
  {
    title: "otherSettings",
    component: (
      <GeneralSettingsForm<GameTemplateFormValues>
        name={relativePathNameGenerator("otherSettings")}
        absolutePathName={absolutePathNameGenerator("otherSettings")}
      />
    ),
    visible: () => true,
  },
] satisfies {
  title: keyof GameTemplateFormValues;
  component: JSX.Element;
  visible: (values?: Partial<GameTemplateFormValues>) => boolean | undefined;
}[];

export const buildGameTemplateSteps = (
  values?: Partial<GameTemplateFormValues>
) => [...gameTemplateFormSteps.filter((steps) => steps.visible())];

// interface props {
//   current: number;
// }

// export default function TemplateSteps({ current }: props) {
//   const { Step } = Steps;

//   const steps = [
//     "Informações Gerais",
//     "Componentes",
//     "Vogais e Estágios",
//     "Início e Fim",
//   ];

//   return (
//     <Steps
//       current={current}
//       size="small"
//       type="navigation"
//       className="flex flex-wrap justify-center p-4 sm:w-full md:w-6/12 lg:w-9/12 xl:w-9/12"
//     >
//       {steps.map((item, index) => (
//         <Step
//           key={item}
//           title={item}
//           className={`${
//             current === index ? "text-blue-700 font-bold" : "text-gray-400"
//           }`}
//         />
//       ))}
//     </Steps>
//   );
// }
