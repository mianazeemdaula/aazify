import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About Us",
    description:
        "Learn about Aazify — our story, mission, and commitment to empowering businesses through technology.",
};

const VALUES = [
    {
        icon: "🚀",
        title: "Improve Efficiency & Productivity",
        desc: "We build tools that automate repetitive tasks and streamline operations.",
    },
    {
        icon: "📈",
        title: "Make Data-Driven Decisions",
        desc: "Our solutions provide real-time analytics and insights for smarter choices.",
    },
    {
        icon: "💡",
        title: "Automate Workflows Intelligently",
        desc: "From AI agents to custom automation, we reduce manual effort across your organization.",
    },
    {
        icon: "🌍",
        title: "Scale Confidently in the Digital World",
        desc: "We build scalable architectures that grow with your business without breaking.",
    },
];

const REVIEWS = [
    {
        text: "Aazify transformed our vision into a powerful software solution. Their team is professional and responsive.",
        name: "Client",
    },
    {
        text: "Thanks to Aazify, our business operations are faster, smarter, and fully automated.",
        name: "Client",
    },
    {
        text: "From idea to execution, they delivered beyond our expectations.",
        name: "Client",
    },
];

export default function AboutPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">About Us</div>
                <h1 className="section-title">
                    Empowering Businesses Through <span>Technology</span>
                </h1>
                <p className="section-sub">
                    We don&apos;t just deliver projects — we build lasting partnerships.
                </p>
            </div>

            {/* Our Story */}
            <section>
                <div className="about-grid">
                    <div>
                        <div className="section-tag">Our Story</div>
                        <h2 className="section-title" style={{ maxWidth: "100%" }}>
                            From Passion to <span>Impact</span>
                        </h2>
                        <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.95rem" }}>
                            Aazify was born from a passion for innovation and a vision to
                            empower businesses with smart digital solutions. What started as
                            a small team of dedicated developers has grown into a full-service
                            tech company delivering software, apps, and AI solutions that make
                            a real impact.
                        </p>
                        <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
                            ✨ <strong style={{ color: "var(--text)" }}>Why We Exist:</strong>{" "}
                            To transform ideas into scalable, reliable, and high-performing
                            digital products that drive business success.
                        </p>
                    </div>
                    <div className="about-visual">
                        <div className="about-visual-inner" />
                        <div className="about-visual-text">az</div>
                    </div>
                </div>
            </section>

            <div className="grad-line" />

            {/* Our Mission */}
            <section>
                <div className="section-tag">Our Mission</div>
                <h2 className="section-title">
                    Creating Innovative & <span>Future-Ready</span> Solutions
                </h2>
                <p className="section-sub">
                    To create innovative, impactful, and future-ready digital solutions
                    that help businesses thrive.
                </p>
                <div className="why-grid">
                    {VALUES.map((v) => (
                        <div className="why-card" key={v.title}>
                            <div className="icon">{v.icon}</div>
                            <h3>{v.title}</h3>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* Testimonials */}
            <section>
                <div className="section-tag">Client Testimonials</div>
                <h2 className="section-title">
                    What Our <span>Partners</span> Say
                </h2>
                <p className="section-sub">
                    We don&apos;t just deliver projects — we build lasting partnerships.
                    Our clients value our trust, quality, and commitment to results.
                </p>
                <div className="reviews-grid">
                    {REVIEWS.map((r) => (
                        <div className="review-card" key={r.text}>
                            <div className="review-stars">★★★★★</div>
                            <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Want to work with a team that turns ideas into <span style={{ color: "var(--primary-light)" }}>reality</span>?
                </h2>
                <p>📧 contact@aazify.com &nbsp;|&nbsp; 📱 03007395147</p>
                <div className="cta-actions">
                    <Link href="/contact" className="btn-primary">
                        Get In Touch
                    </Link>
                    <Link href="/team" className="btn-secondary">
                        Meet Our Team
                    </Link>
                </div>
            </section>
        </>
    );
}
