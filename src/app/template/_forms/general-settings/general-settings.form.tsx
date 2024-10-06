import { Divider, Typography } from "antd";
import { FormattedMessage } from "react-intl";
import { FormNameProps } from "@/utils/antd-form.utils";
import { type GeneralSettings } from "@/models/game-request";

export type GeneralSettingsFormValues = GeneralSettings;

type GeneralSettingsProps<P, C> = FormNameProps<P, C>;

export const GeneralSettingsForm = <P, C = P>({
  name: formName,
  absolutePathName,
}: GeneralSettingsProps<P, C>) => {
  return (
    <>
      <Typography.Title level={3}>
        {"teste"}
        {/* <FormattedMessage id="MAIN_PROPONENT_FORM_PAGE_TITLE" /> */}
      </Typography.Title>
      <Divider />
    </>
  );
};
