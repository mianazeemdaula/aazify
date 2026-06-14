import type { Metadata } from "next";
import "./main.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";


export const metadata: Metadata = {
  title: {
    default: "Aazify | Build Smart. Scale Fast. Succeed Digitally.",
    template: "%s | Aazify",
  },
  description:
    "At Aazify, we craft powerful digital solutions — custom software, web & mobile apps, and AI systems — that help businesses grow, automate, and dominate their industries.",
  keywords: [
    "Aazify",
    "AAZ Developers",
    "custom software",
    "web development",
    "mobile app development",
    "business automation",
    "agentic AI",
    "POS system",
    "cold store management",
    "restaurant management",
  ],
  openGraph: {
    title: "Aazify | Build Smart. Scale Fast. Succeed Digitally.",
    description:
      "We craft powerful digital solutions that help businesses grow, automate, and dominate their industries.",
    url: "https://aazify.com",
    siteName: "Aazify",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
