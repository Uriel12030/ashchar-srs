import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDict } from "@/lib/i18n";

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = getDict("en");
  return (
    <div dir="ltr" className="font-sans">
      <Header t={t} />
      <main id="main">{children}</main>
      <Footer t={t} />
    </div>
  );
}
