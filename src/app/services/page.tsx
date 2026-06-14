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
            <section className="services-grid-container">
                <div className="services-cards-grid">
                    {SERVICES.map((service, idx) => {
                        const serviceKey = service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        const cardVariants = ["light", "theme-green"];
                        const variant = cardVariants[idx % cardVariants.length];
                        return (
                            <div className={`service-detail-card variant-${variant}`} key={service.title} id={`service-${serviceKey}`}>
                                <div className="service-card-badge-wrapper">
                                    <div className="service-card-emoji-box">
                                        {service.icon}
                                    </div>
                                    <div className="service-card-title-area">
                                        <h3>{service.title}</h3>
                                    </div>
                                </div>

                                <ul className="service-card-simple-list">
                                    {service.highlights.map((h, hIdx) => (
                                        <li key={h} id={`highlight-${serviceKey}-${hIdx}`}>
                                            <span className="tick">✓</span>
                                            <span className="text">{h}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="service-card-action-area">
                                    <Link
                                        href="/contact"
                                        className="service-card-btn-cta"
                                        id={`btn-cta-${serviceKey}`}
                                    >
                                        {service.cta}
                                        <svg
                                            style={{ width: "16px", height: "16px" }}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

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
