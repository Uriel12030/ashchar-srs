import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export const metadata = {
  title: {
    default: "Ashchar — פתרונות תפעוליים בישראל",
    template: "%s — Ashchar",
  },
  description:
    "אשחר מספקת אכסון, תשתיות, ציוד ותמיכה שטחית לגופים ממשלתיים, ביטחוניים ופרטיים הפועלים בישראל.",
};

export default function HeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = getDict("he");
  return (
    <div dir="rtl" lang="he" className="font-heebo">
      <Header t={t} />
      <main id="main">{children}</main>
      <Footer t={t} />
    </div>
  );
}
