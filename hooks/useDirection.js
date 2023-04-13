import { useState } from "react";
import { useTranslation } from "react-i18next";

function useDirection() {
  const { t } = useTranslation();

  return {
    isRtl: t("dir") == "RTL",
  };
}

export default useDirection;
