import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Client Reviews",
    description:
        "Read what Aazify's clients say about our work — professional team, excellent delivery, and real results.",
    alternates: {
        canonical: "https://aazify.com/reviews",
    },
};

const REVIEWS = [
    {
        stars: "★★★★★",
        text: "Aazify transformed our idea into a powerful product. Highly recommended! The team understood our requirements from day one and delivered a solution that exceeded our expectations.",
        name: "Ahmed Khan",
        company: "Cold Store Owner, Pakistan",
    },
    {
        stars: "★★★★★",
        text: "Professional team with excellent communication and delivery. They kept us updated at every stage of development and were always open to feedback.",
        name: "Sarah Mitchell",
        company: "Retail Business, UAE",
    },
    {
        stars: "★★★★★",
        text: "Their automation system saved us time and increased efficiency. We can now manage multiple outlets from a single dashboard with real-time data.",
        name: "Usman Ali",
        company: "Restaurant Chain, Pakistan",
    },
    {
        stars: "★★★★★",
        text: "From concept to deployment, Aazify delivered beyond our expectations. The POS system they built handles thousands of transactions daily without a hitch.",
        name: "Tariq Al-Rashid",
        company: "Trading Group, KSA",
    },
    {
        stars: "★★★★★",
        text: "Exceptional mobile app development. The UX is flawless, our users love it, and engagement tripled in the first month after launch.",
        name: "Oliver Brooks",
        company: "Tech Startup, UK",
    },
    {
        stars: "★★★★★",
        text: "Amazing experience working with Aazify. They truly care about quality and kept us in the loop every step of the way. Will definitely work with them again.",
        name: "Mei Lin",
        company: "E-Commerce, Singapore",
    },
];

export default function ReviewsPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Client Reviews</div>
                <h1 className="section-title">
                    What Our <span>Clients</span> Say
                </h1>
                <p className="section-sub">
                    Real feedback from real businesses we&apos;ve helped grow and
                    transform.
                </p>
            </div>

            <section style={{ paddingTop: 0 }}>
                <div className="reviews-grid">
                    {REVIEWS.map((r) => (
                        <div className="review-card" key={r.name}>
                            <div className="review-stars">{r.stars}</div>
                            <p className="review-text">&ldquo;{r.text}&rdquo;</p>
                            <div className="review-author">
                                <div className="review-avatar">{r.name[0]}</div>
                                <div>
                                    <div className="review-name">{r.name}</div>
                                    <div className="review-company">{r.company}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Ready to be our next <span style={{ color: "var(--primary-light)" }}>success story</span>?
                </h2>
                <p>Let&apos;s build something amazing together.</p>
                <div className="cta-actions">
                    <Link href="/contact" className="btn-primary">
                        Start Your Project
                    </Link>
                </div>
            </section>
        </>
    );
}
