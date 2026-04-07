"use client";

import { useState } from "react";

const SERVICES = [
    "Custom Software Development",
    "Website Development",
    "Mobile App Development",
    "Business Automation",
    "Agentic AI Solutions",
    "Other",
];

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
    const [toast, setToast] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setToast(true);
        setTimeout(() => setToast(false), 3000);
        setForm({ name: "", email: "", phone: "", service: "", message: "" });
    };

    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Contact Us</div>
                <h1 className="section-title">
                    Let&apos;s <span>Work Together</span>
                </h1>
                <p className="section-sub">
                    Have a project in mind? We&apos;d love to hear from you. Reach out
                    and we&apos;ll get back to you within 24 hours.
                </p>
            </div>

            <section style={{ paddingTop: 0 }}>
                <div className="contact-wrap">
                    <div>
                        <h2 className="section-title" style={{ maxWidth: "100%", fontSize: "1.5rem" }}>
                            Reach Out to Us
                        </h2>
                        <div className="contact-info">
                            {[
                                ["📧", "Email", "contact@aazify.com"],
                                ["📱", "WhatsApp", "03007395147"],
                                ["🌍", "Website", "aazify.com"],
                            ].map(([icon, label, val]) => (
                                <div className="contact-item" key={String(label)}>
                                    <div className="contact-item-icon">{icon}</div>
                                    <div>
                                        <span>{label}</span>
                                        <strong>{val}</strong>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3
                            style={{
                                fontFamily: "var(--font-head)",
                                fontSize: "1rem",
                                fontWeight: 700,
                                marginTop: "2rem",
                                marginBottom: "1rem",
                            }}
                        >
                            📲 Follow us & stay connected
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                            {[
                                ["💬", "WhatsApp", "https://wa.me/923007395147"],
                                ["📘", "Facebook", "https://www.facebook.com/aazify"],
                                ["📸", "Instagram", "https://www.instagram.com/aazify_"],
                                ["▶️", "YouTube", "https://www.youtube.com/@aazify.official"],
                                ["🎵", "TikTok", "https://www.tiktok.com/@aazify"],
                                ["📌", "Pinterest", "https://www.pinterest.com/aazifycom/"],
                            ].map(([icon, label, url]) => (
                                <a
                                    key={String(label)}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.6rem",
                                        color: "var(--muted)",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        transition: "color 0.2s",
                                    }}
                                >
                                    <span>{icon}</span>
                                    <span>{label}</span>
                                </a>
                            ))}
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
                                <label>Service Interested In</label>
                                <select
                                    value={form.service}
                                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                                    required
                                >
                                    <option value="">Select a service…</option>
                                    {SERVICES.map((s) => (
                                        <option key={s}>{s}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Your Message</label>
                            <textarea
                                rows={5}
                                placeholder="Tell us about your project…"
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
                            Send Message →
                        </button>
                    </form>
                </div>
            </section>

            <div className={`toast ${toast ? "show" : ""}`}>
                ✓ Message sent! We&apos;ll reply within 24 hours.
            </div>
        </>
    );
}
