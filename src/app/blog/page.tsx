import type { Metadata } from "next";
import Link from "next/link";
import { POSTS } from "./postsData";

export const metadata: Metadata = {
    title: "Blog & Insights",
    description:
        "Read tech insights, tips, and industry knowledge from the Aazify team to help your business grow and automate.",
    alternates: {
        canonical: "https://aazify.com/blog",
    },
};

export default function BlogPage() {
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Aazify Blog & Insights",
        "description": "Tech insights, tips, and industry knowledge from the Aazify team to help your business grow.",
        "url": "https://aazify.com/blog",
        "blogPost": POSTS.map((post) => ({
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "url": `https://aazify.com/blog/${post.slug}`,
            "publisher": {
                "@type": "ProfessionalService",
                "name": "Aazify",
                "url": "https://aazify.com"
            },
            "author": {
                "@type": "Organization",
                "name": "Aazify"
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
            />
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
                        <Link
                            href={`/blog/${post.slug}`}
                            className="blog-card"
                            key={post.title}
                            style={{ textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}
                            id={`blog-card-${post.slug}`}
                        >
                            <div className="blog-card-img" style={{ background: post.bg }}>
                                <span style={{ fontSize: "3.5rem" }}>{post.emoji}</span>
                            </div>
                            <div className="blog-card-body" style={{ display: "flex", flexDirection: "column", flex: 1 }}>
                                <div className="blog-card-tag">{post.tag}</div>
                                <h3>{post.title}</h3>
                                <p style={{ flex: 1 }}>{post.excerpt}</p>
                                <div className="blog-card-meta">{post.date}</div>
                            </div>
                        </Link>
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
