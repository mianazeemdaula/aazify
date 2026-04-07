import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs",
    description:
        "Find answers to frequently asked questions about Aazify's services, pricing, and support.",
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
    return children;
}
