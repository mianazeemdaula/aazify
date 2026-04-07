import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description:
        "Get in touch with Aazify — email, WhatsApp, or fill out our contact form. We reply within 24 hours.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
    return children;
}
