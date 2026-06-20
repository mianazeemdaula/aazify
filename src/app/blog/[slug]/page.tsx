import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { POSTS } from "../postsData";

// Define the shape of params as a Promise in Next.js 16
interface RouteParams {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
    const { slug } = await params;
    const post = POSTS.find((p) => p.slug === slug);
    
    if (!post) {
        return {
            title: "Post Not Found | Aazify",
        };
    }

    return {
        title: `${post.metaTitle || post.title}`,
        description: post.metaDesc || post.excerpt,
        alternates: {
            canonical: `https://aazify.com/blog/${slug}`,
        },
        openGraph: {
            title: post.metaTitle || post.title,
            description: post.metaDesc || post.excerpt,
            url: `https://aazify.com/blog/${slug}`,
            type: "article",
            publishedTime: post.date,
            authors: ["Aazify Team"],
            tags: [post.tag, ...post.keywords],
        },
        keywords: post.keywords,
    };
}

export default async function BlogPostPage({ params }: RouteParams) {
    const { slug } = await params;
    const post = POSTS.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.excerpt,
        "datePublished": post.date,
        "author": {
            "@type": "Organization",
            "name": "Aazify",
            "url": "https://aazify.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Aazify",
            "logo": {
                "@type": "ImageObject",
                "url": "https://aazify.com/favicon.ico"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://aazify.com/blog/${post.slug}`
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            
            <article style={{ position: "relative" }}>
                {/* Header Section */}
                <div className="page-header" style={{ paddingBottom: "3rem" }}>
                    <div className="hero-orb hero-orb-1" />
                    <div className="hero-orb hero-orb-2" />
                    
                    {/* Back Button */}
                    <div style={{ maxWidth: "800px", margin: "0 auto 2rem", textAlign: "left" }}>
                        <Link 
                            href="/blog" 
                            className="btn-secondary" 
                            style={{ 
                                display: "inline-flex", 
                                alignItems: "center", 
                                gap: "0.5rem", 
                                padding: "0.6rem 1.2rem", 
                                fontSize: "0.9rem",
                                borderRadius: "10px",
                                border: "1px solid var(--border)",
                                transition: "all 0.2s"
                            }}
                            id="back-to-blog-link"
                        >
                            <svg 
                                width="16" 
                                height="16" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                viewBox="0 0 24 24" 
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ transition: "transform 0.2s" }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>

                    <div className="section-tag" style={{ display: "inline-block", marginBottom: "1rem" }}>
                        {post.tag}
                    </div>

                    <h1 className="section-title" style={{ maxWidth: "850px", fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.2", margin: "0 auto 1.5rem" }}>
                        {post.title}
                    </h1>

                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1.5rem", fontSize: "0.9rem", color: "var(--muted)" }}>
                        <span>✍️ Written by <strong>Aazify Team</strong></span>
                        <span>•</span>
                        <span>📅 Published: {post.date}</span>
                    </div>
                </div>

                {/* Article Content Container */}
                <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 6vw 4rem" }}>
                    {/* Featured Visual Orb Box */}
                    <div 
                        style={{ 
                            background: post.bg, 
                            borderRadius: "24px", 
                            height: "260px", 
                            display: "flex", 
                            alignItems: "center", 
                            justifyContent: "center", 
                            fontSize: "6rem",
                            marginBottom: "3rem",
                            border: "1px solid var(--border)",
                            boxShadow: "0 10px 30px -10px rgba(0,0,0,0.05)"
                        }}
                    >
                        {post.emoji}
                    </div>

                    {/* Rich HTML Content formatted via global style classes */}
                    <div 
                        className="legal-content" 
                        style={{ padding: 0 }} 
                        dangerouslySetInnerHTML={{ __html: post.content }} 
                    />

                    {/* Share this Article Section */}
                    <div 
                        style={{ 
                            marginTop: "4rem", 
                            paddingTop: "2rem", 
                            borderTop: "1px solid var(--border)",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem"
                        }}
                    >
                        <h4 style={{ margin: 0, fontSize: "0.95rem", fontWeight: "600", color: "var(--text)" }}>
                            📢 Help others automate & grow. Share this article!
                        </h4>
                        <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
                            <a 
                                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://aazify.com/blog/${post.slug}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                style={{ padding: "0.5rem 1rem", fontSize: "0.82rem", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}
                            >
                                🔗 Share on LinkedIn
                            </a>
                            <a 
                                href={`https://twitter.com/intent/tweet?url=https://aazify.com/blog/${post.slug}&text=${encodeURIComponent(post.title)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                style={{ padding: "0.5rem 1rem", fontSize: "0.82rem", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}
                            >
                                🐦 Share on X (Twitter)
                            </a>
                            <a 
                                href={`https://api.whatsapp.com/send?text=${encodeURIComponent(post.title + " - https://aazify.com/blog/" + post.slug)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-secondary"
                                style={{ padding: "0.5rem 1rem", fontSize: "0.82rem", borderRadius: "8px", display: "inline-flex", alignItems: "center", gap: "0.4rem", textDecoration: "none" }}
                            >
                                💬 Share on WhatsApp
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            {/* Sticky/Fixed CTA Section for the Product */}
            <section className="cta-section" style={{ borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, var(--bg), var(--card))" }}>
                <div className="cta-bg" />
                <div style={{ position: "relative", zIndex: 2 }}>
                    <div className="section-tag" style={{ display: "inline-block", marginBottom: "1rem" }}>
                        Featured Product
                    </div>
                    <h2>
                        Ready to supercharge with <span style={{ color: "var(--primary-light)" }}>Aazify {post.productName}</span>?
                    </h2>
                    <p style={{ maxWidth: "600px", margin: "1rem auto 2.5rem" }}>
                        Experience the power of automation and scale your operations effortlessly. Check out the interactive live demo or talk to our software engineering team to customize a solution.
                    </p>
                    <div className="cta-actions" style={{ justifyContent: "center" }}>
                        {post.demoUrl && (
                            <a 
                                href={post.demoUrl} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="btn-primary"
                                id="article-demo-cta"
                            >
                                Try Live Demo 🚀
                            </a>
                        )}
                        <Link href="/contact" className="btn-secondary" id="article-contact-cta">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}
