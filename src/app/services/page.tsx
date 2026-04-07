import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Services",
    description:
        "Aazify offers custom software, web & mobile app development, business automation, and agentic AI solutions.",
};

const SERVICES = [
    {
        icon: "🧠",
        title: "Custom Software Development",
        tagline: "Turn your ideas into powerful software solutions.",
        desc: "We design and develop tailored software to solve your business challenges, increase efficiency, and drive growth.",
        highlights: [
            "Tailored solutions for your unique needs",
            "Automation & workflow optimization",
            "Scalable & future-ready architecture",
            "Secure & reliable systems",
        ],
        outcome: "Reduce operational costs, save time, and make data-driven decisions.",
        cta: "Get Your Custom Solution",
    },
    {
        icon: "🌐",
        title: "Website Development",
        tagline: "Modern websites that attract, engage, and convert.",
        desc: "We build responsive, SEO-friendly websites that reflect your brand and deliver results.",
        highlights: [
            "Mobile-friendly, modern design",
            "SEO optimization for better visibility",
            "High performance & fast loading",
            "Conversion-focused layouts",
        ],
        outcome: "Boost online presence, attract new customers, and grow your business.",
        cta: "Request a Demo Website",
    },
    {
        icon: "📱",
        title: "Mobile Application Development",
        tagline: "Engage your audience with high-performance apps.",
        desc: "We build intuitive Android and iOS apps that deliver smooth user experiences and scalable functionality.",
        highlights: [
            "Cross-platform compatibility",
            "User-friendly UI & seamless UX",
            "Fast, responsive performance",
            "Push notifications & analytics integration",
        ],
        outcome: "Increase user engagement, improve retention, and grow your brand digitally.",
        cta: "Build Your App Today",
    },
    {
        icon: "🤖",
        title: "Agentic AI Solutions",
        tagline: "Empower your business with intelligent automation.",
        desc: "Next-gen AI systems that optimize operations, enhance decision-making, and boost productivity.",
        highlights: [
            "Workflow automation & efficiency",
            "Predictive analytics & insights",
            "Smart task allocation & prioritization",
            "Integration with existing systems",
        ],
        outcome: "Save time, reduce human error, and make smarter business decisions.",
        cta: "Explore AI Solutions",
    },
];

export default function ServicesPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Our Services</div>
                <h1 className="section-title">
                    Build Smarter, Faster, <span>Better</span>
                </h1>
                <p className="section-sub">
                    From idea to deployment, we cover every dimension of modern software
                    development with precision and creativity.
                </p>
            </div>

            {SERVICES.map((service, idx) => (
                <section key={service.title}>
                    {idx > 0 && <div className="grad-line" style={{ margin: "0 0 100px 0" }} />}
                    <div className="about-grid">
                        <div>
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{service.icon}</div>
                            <h2 className="section-title" style={{ maxWidth: "100%" }}>
                                {service.title}
                            </h2>
                            <p
                                style={{
                                    color: "var(--primary-light)",
                                    fontSize: "1.05rem",
                                    fontWeight: 500,
                                    marginBottom: "1rem",
                                }}
                            >
                                {service.tagline}
                            </p>
                            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                                {service.desc}
                            </p>
                            <div className="service-card" style={{ border: "none", padding: "1.5rem", borderRadius: "16px" }}>
                                <h4 style={{ fontFamily: "var(--font-head)", fontSize: "0.9rem", fontWeight: 700, marginBottom: "0.8rem" }}>
                                    ✨ Key Highlights
                                </h4>
                                <ul className="highlights">
                                    {service.highlights.map((h) => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                                <div className="outcome">
                                    <p>📌 {service.outcome}</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-visual">
                            <div className="about-visual-inner" />
                            <div className="about-visual-text" style={{ fontSize: "4rem" }}>
                                {service.icon}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Ready to <span style={{ color: "var(--primary-light)" }}>transform</span> your business?
                </h2>
                <p>Let&apos;s discuss your project and find the perfect solution.</p>
                <div className="cta-actions">
                    <Link href="/contact" className="btn-primary">
                        Get In Touch
                    </Link>
                    <Link href="/products" className="btn-secondary">
                        View Our Products
                    </Link>
                </div>
            </section>
        </>
    );
}
