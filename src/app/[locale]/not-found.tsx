import { useTranslations } from "next-intl";

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations("NotFoundPage");

  return (
    <div className="mt-20 max-w-[460px]">
      <h1 className="font-bold text-xl">{t("title")}</h1>
      <p className="">{t("description")}</p>
    </div>
  );
}
