import { useTranslations } from "next-intl";
// import LocaleSwitcher from "./LocaleSwitcher";
import NavigationLink from "./NavigationLink";
import GoogleTranslate from "@/GoogleTranslate";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <header>
      <nav className="max-w-5xl mx-auto px-4 flex justify-between py-2">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
        </div>

        <GoogleTranslate />
        {/* <LocaleSwitcher /> */}
      </nav>
    </header>
  );
}
