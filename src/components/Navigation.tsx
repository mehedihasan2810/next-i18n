import GoogleTranslate from "@/GoogleTranslate";
import Link from "next/link";

export default function Navigation() {
  return (
    <header>
      <nav className="max-w-5xl mx-auto px-4 flex justify-between py-2">
        <div className="flex items-center gap-8">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/feedbacks">
            Feedbacks
          </Link>
        </div>

        <GoogleTranslate />
      </nav>
    </header>
  );
}
