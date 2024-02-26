"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({ error }: Props) {
  const t = useTranslations("Error");

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mt-20 max-w-[460px]">
      <h1 className="font-bold text-xl">{t("title")}</h1>
      <p className="">{t("description")}</p>
    </div>
  );
}
