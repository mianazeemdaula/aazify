import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Portfolio",
    description:
        "Explore Aazify's successful projects — business management systems, e-commerce platforms, mobile apps, and automation tools.",
    alternates: {
        canonical: "https://aazify.com/portfolio",
    },
};

const CATEGORIES = [
    "Business Management Systems",
    "E-commerce Platforms",
    "Mobile Applications",
    "Automation Tools",
];

const PROJECTS = [
    {
        tag: "Business Management",
        title: "Aazify Cold Store",
        desc: "Complete cold storage management platform with farmer records, inventory, and payment tracking.",
        bg: "linear-gradient(135deg, #f0fdf4, #ccfbf1)",
        emoji: "📦",
    },
    {
        tag: "Business Management",
        title: "Aazify POS System",
        desc: "Modern point of sale system for retailers with barcode scanning, billing, and analytics.",
        bg: "linear-gradient(135deg, #eff6ff, #dbeafe)",
        emoji: "🛒",
    },
    {
        tag: "Business Management",
        title: "Aazify Mandi Management",
        desc: "Multi-vendor commission tracking system with automated calculations and real-time reporting.",
        bg: "linear-gradient(135deg, #fef3c7, #fde68a)",
        emoji: "💵",
    },
    {
        tag: "Business Management",
        title: "Aazify Restaurant Management",
        desc: "End-to-end restaurant operations platform with order, table, and kitchen management.",
        bg: "linear-gradient(135deg, #fff7ed, #ffedd5)",
        emoji: "🍽️",
    },
    {
        tag: "E-commerce",
        title: "Custom E-commerce Platform",
        desc: "Scalable online store with dynamic pricing, inventory management, and payment integration.",
        bg: "linear-gradient(135deg, #e0f2fe, #dcfce7)",
        emoji: "🛍️",
    },
    {
        tag: "Mobile App",
        title: "Business Management App",
        desc: "Cross-platform mobile application for on-the-go business operations and monitoring.",
        bg: "linear-gradient(135deg, #faf5ff, #f3e8ff)",
        emoji: "📱",
    },
    {
        tag: "Automation",
        title: "Workflow Automation Suite",
        desc: "AI-powered automation tools that streamline repetitive tasks and boost productivity.",
        bg: "linear-gradient(135deg, #fae8ff, #f3e8ff)",
        emoji: "🤖",
    },
    {
        tag: "E-commerce",
        title: "Multi-Vendor Marketplace",
        desc: "Feature-rich marketplace platform with vendor management and commission tracking.",
        bg: "linear-gradient(135deg, #f3e8ff, #e0f2fe)",
        emoji: "🏪",
    },
];

export default function PortfolioPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Our Portfolio</div>
                <h1 className="section-title">
                    Our Work <span>Speaks for Itself</span>
                </h1>
                <p className="section-sub">
                    Explore some of our successful projects where we helped businesses
                    grow with innovative solutions.
                </p>
            </div>

            {/* Categories */}
            <section style={{ paddingTop: 0 }}>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3rem" }}>
                    {CATEGORIES.map((cat) => (
                        <div
                            key={cat}
                            style={{
                                padding: "0.5rem 1.2rem",
                                borderRadius: "100px",
                                border: "1px solid var(--border)",
                                background: "var(--card)",
                                fontSize: "0.85rem",
                                color: "var(--muted)",
                            }}
                        >
                            {cat}
                        </div>
                    ))}
                </div>

                <div className="portfolio-grid">
                    {PROJECTS.map((p) => (
                        <div className="portfolio-card" key={p.title}>
                            <div className="portfolio-img" style={{ background: p.bg }}>
                                <span style={{ fontSize: "4rem" }}>{p.emoji}</span>
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-tag">{p.tag}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p
                    style={{
                        marginTop: "3rem",
                        color: "var(--muted)",
                        fontSize: "1rem",
                        textAlign: "center",
                    }}
                >
                    👉 Each project reflects our commitment to quality and innovation.
                </p>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Want to see your project <span style={{ color: "var(--primary-light)" }}>here</span>?
                </h2>
                <p>Let&apos;s build something amazing together.</p>
                <div className="cta-actions">
                    <Link href="/contact" className="btn-primary">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}
