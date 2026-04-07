import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Careers",
    description:
        "Join Aazify — work with cutting-edge technologies, grow your career, and help build the future of digital solutions.",
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
    return children;
}
