// "use client";
// import { Button } from "antd";
// import TemplateSteps from "./form.steps";
// import { StepProvider, useStep } from "./form.context";

// export default function Layout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <StepProvider>
//       <StepLayout>{children}</StepLayout>
//     </StepProvider>
//   );
// }

// function StepLayout({ children }: { children: React.ReactNode }) {
//   const { currentStep, nextStep, prevStep } = useStep();

//   return (
//     <>
//       <TemplateSteps current={currentStep} />
//       {children}
//       <div className="w-full p-4 flex justify-between">
//         <Button onClick={prevStep} disabled={currentStep === 0}>
//           Voltar
//         </Button>
//         <Button type="primary" onClick={nextStep}>
//           {currentStep === 3 ? "Gerar Jogo" : "Próximo"}
//         </Button>
//       </div>
//     </>
//   );
// }
