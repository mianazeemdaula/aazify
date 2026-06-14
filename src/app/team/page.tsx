import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Our Team",
    description:
        "Meet the skilled developers, designers, and strategists behind Aazify dedicated to delivering excellence.",
};

const TEAM_MEMBERS = [
    { emoji: "👨‍💼", name: "Mr. Muhammad Abbas", role: "CEO & Founder", desc: "Visionary leader driving Aazify's mission to empower businesses with smart digital solutions." },
    { emoji: "👨‍💻", name: "Mr. Azeem Ullah", role: "CTO", desc: "Technology expert leading the development of scalable, future-ready software architectures." },
    { emoji: "🤝", name: "Mr. Zeshan Talib", role: "Head of Sales", desc: "Driving business growth through strategic partnerships and client relationships." },
];

const DEPARTMENTS = [
    { icon: "💻", title: "Software Engineers", desc: "Full-stack developers building robust and scalable applications." },
    { icon: "🎨", title: "UI/UX Designers", desc: "Creating intuitive, beautiful interfaces that users love." },
    { icon: "🤖", title: "AI Specialists", desc: "Building intelligent systems that automate and optimize business operations." },
    { icon: "📋", title: "Project Managers", desc: "Ensuring every project is delivered on time, on budget, and beyond expectations." },
];

export default function TeamPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Our Team</div>
                <h1 className="section-title">
                    Meet the Experts Behind <span>Aazify</span>
                </h1>
                <p className="section-sub">
                    Our team consists of skilled developers, designers, and strategists
                    dedicated to delivering excellence.
                </p>
            </div>

            {/* Leadership */}
            <section style={{ paddingTop: 0 }}>
                <div className="section-tag">Leadership</div>
                <h2 className="section-title">
                    The <span>Team</span> Leading the Way
                </h2>
                <div className="team-grid" style={{ marginTop: "2rem" }}>
                    {TEAM_MEMBERS.map((m) => (
                        <div className="team-card" key={m.name}>
                            <div className="team-avatar">{m.emoji}</div>
                            <h3>{m.name}</h3>
                            <span>{m.role}</span>
                            <p
                                style={{
                                    color: "var(--muted)",
                                    fontSize: "0.84rem",
                                    lineHeight: 1.6,
                                    marginTop: "0.8rem",
                                }}
                            >
                                {m.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* Departments */}
            <section>
                <div className="section-tag">Our Departments</div>
                <h2 className="section-title">
                    A Team of <span>Experts</span>
                </h2>
                <p className="section-sub">
                    Every department at Aazify works in sync to deliver holistic digital
                    solutions.
                </p>
                <div className="services-grid">
                    {DEPARTMENTS.map((d) => (
                        <div className="service-card" key={d.title}>
                            <div className="service-icon">{d.icon}</div>
                            <h3>{d.title}</h3>
                            <p>{d.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Want to <span style={{ color: "var(--primary-light)" }}>join</span> our team?
                </h2>
                <p>We&apos;re always looking for talented people to grow with us.</p>
                <div className="cta-actions">
                    <Link href="/careers" className="btn-primary">
                        View Open Positions
                    </Link>
                    <Link href="/contact" className="btn-secondary">
                        Contact Us
                    </Link>
                </div>
            </section>
        </>
    );
}
