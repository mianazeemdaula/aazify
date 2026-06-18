"use client";

import { useState } from "react";

const BENEFITS = [
    {
        icon: "✨",
        title: "Culture & Growth",
        items: [
            "Work in a dynamic, innovative environment",
            "Collaborate with skilled developers, designers, and AI experts",
            "Opportunities for learning, skill development, and leadership",
        ],
    },
    {
        icon: "🚀",
        title: "Career Growth",
        items: [
            "Clear promotion paths",
            "Exposure to cutting-edge technologies",
            "Mentorship & continuous training",
        ],
    },
    {
        icon: "💡",
        title: "Employee Benefits",
        items: [
            "Flexible work environment & remote options",
            "Competitive compensation",
            "Performance-based incentives",
            "Fun team activities & events",
        ],
    },
];

const TIMELINE = [
    { title: "Founded", desc: "Started as a small passionate team of developers with big ambitions." },
    { title: "First Products", desc: "Launched Cold Store & POS systems — our first flagship products." },
    { title: "Full-Service Company", desc: "Expanded into web, mobile, and AI — becoming a full-service digital solutions company." },
    { title: "Going Global", desc: "Delivering software, apps, and AI solutions to clients worldwide." },
    { title: "The Future", desc: "Continuing to innovate with Agentic AI and next-gen solutions." },
];

export default function CareersPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", portfolio: "", message: "" });
    const [toast, setToast] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        setForm({ name: "", email: "", phone: "", position: "", portfolio: "", message: "" });
    };

    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Careers</div>
                <h1 className="section-title">
                    Build the Future of Digital Solutions with <span>Aazify</span>
                </h1>
                <p className="section-sub">
                    We&apos;re looking for passionate, creative, and driven people to join
                    our team and help businesses thrive through technology.
                </p>
            </div>

            {/* Why Work With Us */}
            <section style={{ paddingTop: 0 }}>
                <div className="section-tag">Why Work With Us</div>
                <h2 className="section-title">
                    A Great Place to <span>Grow</span>
                </h2>
                <div className="benefits-grid" style={{ marginTop: "2rem" }}>
                    {BENEFITS.map((b) => (
                        <div className="benefit-card" key={b.title}>
                            <div className="icon">{b.icon}</div>
                            <h3>{b.title}</h3>
                            <ul>
                                {b.items.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* Our Growth */}
            <section>
                <div className="section-tag">Our Story & Growth</div>
                <h2 className="section-title">
                    Join a Team That&apos;s <span>Growing Fast</span>
                </h2>
                <p className="section-sub">
                    Work on live products like Cold Store, POS, Mandi, Restaurant, Pesticide, and
                    Transport Management.
                </p>
                <div className="timeline">
                    {TIMELINE.map((t) => (
                        <div className="timeline-item" key={t.title}>
                            <h4>{t.title}</h4>
                            <p>{t.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* Application Form */}
            <section>
                <div className="contact-wrap">
                    <div>
                        <div className="section-tag">Ready to Join?</div>
                        <h2 className="section-title" style={{ maxWidth: "100%" }}>
                            Apply to <span>Aazify</span>
                        </h2>
                        <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "2rem" }}>
                            Ready to be part of the future? Send your CV or fill out the form
                            to get started.
                        </p>
                        <div className="contact-info">
                            <div className="contact-item">
                                <div className="contact-item-icon">📧</div>
                                <div>
                                    <span>Send your CV</span>
                                    <strong>careers@aazify.com</strong>
                                </div>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item-icon">📱</div>
                                <div>
                                    <span>Connect on WhatsApp</span>
                                    <strong>03007395147</strong>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Full Name</label>
                                <input
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="you@example.com"
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Phone / WhatsApp</label>
                                <input
                                    placeholder="03001234567"
                                    value={form.phone}
                                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                />
                            </div>
                            <div className="form-group">
                                <label>Position Applying For</label>
                                <select
                                    value={form.position}
                                    onChange={(e) => setForm({ ...form, position: e.target.value })}
                                    required
                                >
                                    <option value="">Select position…</option>
                                    <option>Software Engineer</option>
                                    <option>UI/UX Designer</option>
                                    <option>AI Specialist</option>
                                    <option>Project Manager</option>
                                    <option>Sales & Marketing</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Portfolio / LinkedIn URL</label>
                            <input
                                placeholder="https://linkedin.com/in/yourname"
                                value={form.portfolio}
                                onChange={(e) => setForm({ ...form, portfolio: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Tell us about yourself</label>
                            <textarea
                                rows={5}
                                placeholder="Share your experience, skills, and why you want to join Aazify…"
                                value={form.message}
                                onChange={(e) => setForm({ ...form, message: e.target.value })}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn-primary"
                            style={{ width: "100%", borderRadius: "12px", padding: "1rem", fontSize: "1rem", justifyContent: "center" }}
                        >
                            Submit Application →
                        </button>
                    </form>
                </div>
            </section>

            <div className={`toast ${toast ? "show" : ""}`}>
                ✓ Application submitted! We&apos;ll be in touch soon.
            </div>
        </>
    );
}
