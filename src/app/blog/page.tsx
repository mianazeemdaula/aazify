import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Blog & Insights",
    description:
        "Read tech insights, tips, and industry knowledge from the Aazify team to help your business grow.",
};

const POSTS = [
    {
        emoji: "🧠",
        tag: "AI & Automation",
        title: "What is Agentic AI and How Can It Transform Your Business?",
        excerpt: "Discover how autonomous AI systems can automate workflows, make decisions, and scale your business operations without human intervention.",
        date: "March 2026",
        bg: "linear-gradient(135deg, #0a1a18, #0d2818)",
    },
    {
        emoji: "🛒",
        tag: "Business Solutions",
        title: "5 Reasons Your Business Needs a Modern POS System",
        excerpt: "From real-time inventory tracking to automated billing — learn why upgrading your POS can boost efficiency and revenue.",
        date: "February 2026",
        bg: "linear-gradient(135deg, #0f1a2c, #0a2240)",
    },
    {
        emoji: "📱",
        tag: "Mobile Development",
        title: "Cross-Platform vs Native Apps: Which is Right for You?",
        excerpt: "A comprehensive guide to choosing between Flutter, React Native, and native development for your next mobile project.",
        date: "January 2026",
        bg: "linear-gradient(135deg, #1a0a00, #1a1400)",
    },
    {
        emoji: "🌐",
        tag: "Web Development",
        title: "Next.js in 2026: Why It's the Best Framework for Business Websites",
        excerpt: "Explore the latest Next.js features and why it's the go-to choice for building fast, SEO-optimized business websites.",
        date: "December 2025",
        bg: "linear-gradient(135deg, #001a2c, #0d2818)",
    },
    {
        emoji: "⚙️",
        tag: "Business Automation",
        title: "How to Automate Your Cold Storage Business Operations",
        excerpt: "Learn how Aazify Cold Store software can help you manage farmers, inventory, payments, and reports automatically.",
        date: "November 2025",
        bg: "linear-gradient(135deg, #140022, #001428)",
    },
    {
        emoji: "🚀",
        tag: "Startup Tips",
        title: "From Idea to MVP: A Step-by-Step Guide for Startups",
        excerpt: "Everything you need to know about turning your startup idea into a minimum viable product — budget, timeline, and tech stack.",
        date: "October 2025",
        bg: "linear-gradient(135deg, #1a0533, #0a2240)",
    },
];

export default function BlogPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Blog & Insights</div>
                <h1 className="section-title">
                    Tech Knowledge & <span>Industry Insights</span>
                </h1>
                <p className="section-sub">
                    Stay ahead with the latest trends, tips, and insights from the Aazify
                    team.
                </p>
            </div>

            <section style={{ paddingTop: 0 }}>
                <div className="blog-grid">
                    {POSTS.map((post) => (
                        <div className="blog-card" key={post.title}>
                            <div className="blog-card-img" style={{ background: post.bg }}>
                                <span style={{ fontSize: "3.5rem" }}>{post.emoji}</span>
                            </div>
                            <div className="blog-card-body">
                                <div className="blog-card-tag">{post.tag}</div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="blog-card-meta">{post.date}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Want to learn more about <span style={{ color: "var(--primary-light)" }}>digital solutions</span>?
                </h2>
                <p>Follow us on social media for daily tips and insights.</p>
                <div className="cta-actions">
                    <a
                        href="https://www.youtube.com/@aazify.official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        ▶️ Subscribe on YouTube
                    </a>
                    <Link href="/contact" className="btn-secondary">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </>
    );
}
