import { useLocale, useTranslations } from "next-intl";
import { locales } from "../config";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";
import { SelectContent, SelectGroup, SelectItem } from "@/components/ui/select";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      <SelectContent>
        <SelectGroup>
          {locales.map((cur) => (
            <SelectItem key={cur} value={cur}>
              {t("locale", { locale: cur })}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </LocaleSwitcherSelect>
  );
}
