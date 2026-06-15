"use client";

import { useState } from "react";

const FAQS = [
    {
        q: "What industries do you work with?",
        a: "We work with startups, SMEs, and enterprises across multiple industries including retail, food & hospitality, agriculture, logistics, healthcare, and e-commerce.",
    },
    {
        q: "How long does a project take?",
        a: "Project timelines depend on complexity, but we ensure timely delivery. A standard website takes 2–4 weeks, while custom software or mobile apps range from 6–16 weeks. We provide precise estimates after discovery.",
    },
    {
        q: "Do you provide support after development?",
        a: "Yes, we offer ongoing maintenance and support packages to keep your product running smoothly, secure, and updated after launch.",
    },
    {
        q: "Can you customize solutions for my business?",
        a: "Absolutely! Every solution we build is tailored specifically to your business needs. We start with a thorough discovery phase to understand your requirements before writing a single line of code.",
    },
    {
        q: "What technologies do you use?",
        a: "We work with modern technologies including React, Next.js, Node.js, Python, Flutter, PostgreSQL, Docker, AWS, and AI/ML frameworks. Our stack is always chosen based on what's best for your project.",
    },
    {
        q: "How do you handle project communication?",
        a: "We assign a dedicated project manager to every engagement. You get regular updates, milestone reviews, and direct access to our team via WhatsApp, email, or video calls.",
    },
    {
        q: "What is Agentic AI and how can it help my business?",
        a: "Agentic AI refers to autonomous AI systems that can perform tasks, make decisions, and interact with tools on your behalf. This can automate complex workflows, reduce costs, and scale operations significantly.",
    },
    {
        q: "Can you work with our existing tech stack?",
        a: "Yes. Our engineers are proficient across major frameworks and platforms. We can build new systems from scratch or integrate seamlessly with what you already have.",
    },
];

export default function FaqsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": FAQS.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">FAQs</div>
                <h1 className="section-title">
                    Frequently Asked <span>Questions</span>
                </h1>
                <p className="section-sub">
                    Everything you need to know about working with Aazify.
                </p>
            </div>

            <section style={{ paddingTop: 0 }}>
                <div className="faq-list" style={{ maxWidth: "800px", margin: "0 auto" }}>
                    {FAQS.map((f, i) => (
                        <div
                            className="faq-item"
                            key={i}
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                            <div className={`faq-q ${openFaq === i ? "open" : ""}`}>
                                <span>{f.q}</span>
                                <span>+</span>
                            </div>
                            <div className={`faq-a ${openFaq === i ? "open" : ""}`}>{f.a}</div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
