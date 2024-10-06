import { type NamePath } from "antd/es/form/interface";
import type { NestedKeyOf, NestedValueOf } from "./type.utils";

export interface FormNameProps<PickFormValues, AllFormValues> {
  name?: NamePath<PickFormValues> | NestedKeyOf<PickFormValues>;
  absolutePathName?: NamePath<AllFormValues> | NestedKeyOf<AllFormValues>;
}

export const formPathNameGenerator = <
  RelativeFormValues,
  PickFormValues = RelativeFormValues,
  AllFormValues = RelativeFormValues
>({
  name,
  absolutePathName,
}: FormNameProps<PickFormValues, AllFormValues>) => ({
  absolutePathNameGenerator: (relativeName?: NestedKeyOf<RelativeFormValues>) =>
    [
      ...(((typeof absolutePathName === "string"
        ? absolutePathName.split(".")
        : absolutePathName) ?? []) as string[]),
      ...(relativeName?.split(".") ?? []),
    ] as NamePath<AllFormValues>,
  relativePathNameGenerator: (relativeName?: NestedKeyOf<RelativeFormValues>) =>
    [
      ...(((typeof name === "string" ? name.split(".") : name) ??
        []) as string[]),
      ...(relativeName?.split(".") ?? []),
    ] as NamePath<RelativeFormValues>,
  formListPathNameGenerator: <
    ArrayFormKey extends NestedKeyOf<RelativeFormValues> = never,
    ArrayFormValues = NestedValueOf<RelativeFormValues, ArrayFormKey>
  >(
    relativeListName: NestedKeyOf<ArrayFormValues>
  ) =>
    (relativeListName?.toString().split(".") ??
      []) as NamePath<ArrayFormValues>,
});
