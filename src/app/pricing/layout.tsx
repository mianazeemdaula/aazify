import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing Plans",
    description:
        "Flexible and transparent pricing plans for all Aazify digital products including Cold Store, POS, Mandi Management, Restaurant Management, and FBR Digital Invoicing.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return children;
}
