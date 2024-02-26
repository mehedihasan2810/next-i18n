import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // Enable static rendering
  unstable_setRequestLocale(locale);

  const t = useTranslations("IndexPage");

  return (
    <div>
      <div className="text-center mt-20">
        <h1 className="font-bold text-6xl">{t("welcome_title")}</h1>
        <p className="mt-3 text-2xl">{t("welcome_desc")}</p>
      </div>
      <article className="mt-10">
        <h2 className="font-bold text-xl">{t("about_title")}</h2>
        <p>{t("about_desc")}</p>
      </article>
      <article className="mt-10">
        <h2 className="font-bold text-xl">{t("why_I_title")}</h2>
        <p>{t("why_I_desc")}</p>
      </article>
    </div>
  );
}
