import Link from "next/link";

const PRODUCTS = [
    { emoji: "📦", name: "Aazify Cold Store", tagline: "Smart Cold Storage Management", desc: "Manage inventory, farmers, rooms, and payments all in one platform.", demo: "https://coldstore.aazify.com" },
    { emoji: "🛒", name: "Aazify Point of Sale", tagline: "Modern Retail & Trading POS", desc: "Streamline sales, inventory, and customer management efficiently.", demo: "https://pos.aazify.com/home" },
    { emoji: "💵", name: "Aazify Aarti / Mandi / Commission Shop", tagline: "Automated Aarti, Mandi & Commission System", desc: "Track vendors, commissions, and stock in real time for Aarti, Mandi, and commission-based shops.", demo: "https://www.aarti.aazify.com" },
    { emoji: "🍽️", name: "Aazify Restaurant Management", tagline: "End-to-End Restaurant Operations", desc: "Manage tables, orders, inventory, and staff seamlessly.", demo: "https://restaurant.aazify.com" },
    { emoji: "🧾", name: "Aazify FBR Digital Invoicing", tagline: "FBR-Compliant Tax Invoicing Software", desc: "Automate digital invoices, tax calculations, and FBR compliance effortlessly.", demo: "https://tax.aazify.com" },
];

const SERVICES = [
    { icon: "🧠", title: "Custom Software Development" },
    { icon: "🌐", title: "Website Development" },
    { icon: "📱", title: "Mobile App Development" },
    { icon: "⚙️", title: "Business Automation Systems" },
    { icon: "🤖", title: "Agentic AI Solutions" },
];

const WHY_CHOOSE = [
    { icon: "🚀", title: "Innovative & Future-Ready Solutions", desc: "We leverage the latest technologies to build solutions that stand the test of time." },
    { icon: "🎯", title: "Client-Centric Approach", desc: "Every decision is guided by your goals and outcomes, not just deliverables." },
    { icon: "⚡", title: "Fast Delivery & Scalable Systems", desc: "Agile methodology ensures quick turnaround without compromising quality." },
    { icon: "💼", title: "Trusted by Startups & Businesses", desc: "We've helped businesses across multiple industries grow and scale digitally." },
    { icon: "🛠️", title: "End-to-End Development Support", desc: "From concept to deployment and beyond, we're with you every step of the way." },
];

const MARQUEE_ITEMS = [
    "React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "Docker", "AWS", "OpenAI", "TailwindCSS", "TypeScript", "FastAPI",
    "React", "Next.js", "Node.js", "Python", "Flutter", "PostgreSQL", "Docker", "AWS", "OpenAI", "TailwindCSS", "TypeScript", "FastAPI",
];

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="hero-badge">✨ Welcome to Aazify by AAZ Developers</div>
                <h1 className="hero-title">
                    Build Smart. <span>Scale Fast.</span> Succeed Digitally.
                </h1>
                <p className="hero-sub">
                    At Aazify, we craft powerful digital solutions that help businesses
                    grow, automate, and dominate their industries. From idea to execution
                    — we turn your vision into reality.
                </p>
                <div className="hero-actions">
                    <Link href="/contact" className="btn-primary">
                        Let&apos;s Build Something Amazing Together 👉
                    </Link>
                    <Link href="/products" className="btn-secondary">
                        Explore Products
                    </Link>
                </div>
                <div className="hero-stats">
                    {[
                        ["50+", "Projects Delivered"],
                        ["100+", "Happy Clients"],
                        ["10+", "Years of Experience"],
                    ].map(([n, l]) => (
                        <div className="stat-item" key={String(l)}>
                            <div className="stat-num">{n}</div>
                            <div className="stat-label">{l}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MARQUEE */}
            <div className="marquee-wrap">
                <div className="marquee">
                    {MARQUEE_ITEMS.map((t, i) => (
                        <div className="marquee-item" key={i}>
                            <div className="marquee-dot" />
                            {t}
                        </div>
                    ))}
                </div>
            </div>

            {/* PRODUCTS */}
            <section>
                <div className="section-tag">Our Main Products</div>
                <h2 className="section-title">
                    Powerful Products Built to <span>Solve Real Problems</span>
                </h2>
                <p className="section-sub">
                    Ready-to-use digital products designed with scalability, automation,
                    and user experience at their core.
                </p>
                <div className="products-grid">
                    {PRODUCTS.map((p) => (
                        <div className="product-card" key={p.name}>
                            <div className="product-card-header">
                                <div className="product-card-emoji">{p.emoji}</div>
                                <div>
                                    <h3>{p.name}</h3>
                                    <p>{p.tagline}</p>
                                </div>
                            </div>
                            <div className="product-card-body">
                                <p>{p.desc}</p>
                            </div>
                            <div className="product-card-footer">
                                <a href={p.demo} target="_blank" rel="noopener noreferrer">
                                    Try Live Demo →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* WHAT WE DO */}
            <section>
                <div className="section-tag">What We Do</div>
                <h2 className="section-title">
                    Modern, Scalable & <span>Result-Driven</span> Solutions
                </h2>
                <p className="section-sub">
                    We specialize in delivering digital solutions that transform how
                    businesses operate and grow.
                </p>
                <div className="services-grid">
                    {SERVICES.map((s) => (
                        <div className="service-card" key={s.title}>
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* WHY CHOOSE */}
            <section>
                <div className="section-tag">Why Choose Aazify</div>
                <h2 className="section-title">
                    Why Businesses <span>Trust Us</span>
                </h2>
                <p className="section-sub">
                    We combine innovation, reliability, and a client-first mindset to
                    deliver exceptional results.
                </p>
                <div className="why-grid">
                    {WHY_CHOOSE.map((w) => (
                        <div className="why-card" key={w.title}>
                            <div className="icon">{w.icon}</div>
                            <h3>{w.title}</h3>
                            <p>{w.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* METRICS */}
            <section>
                <div className="section-tag">Our Impact</div>
                <h2 className="section-title">
                    Growth & <span>Credibility</span> at a Glance
                </h2>
                <div className="metrics-grid" style={{ marginTop: "2rem" }}>
                    {[
                        { icon: "✅", num: "50+", label: "Projects Delivered" },
                        { icon: "😊", num: "100+", label: "Happy Clients" },
                        { icon: "📅", num: "10+", label: "Years of Experience" },
                    ].map((m) => (
                        <div className="metric-card" key={m.label}>
                            <div className="metric-icon">{m.icon}</div>
                            <div className="metric-num">{m.num}</div>
                            <div className="metric-label">{m.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Have an idea? Let&apos;s turn it into a <span style={{ color: "var(--primary-light)" }}>powerful product</span>.
                </h2>
                <p>
                    📩 contact@aazify.com &nbsp;|&nbsp; 📱 03007395147
                </p>
                <div className="cta-actions">
                    <Link href="/contact" className="btn-primary">
                        Get Started Now
                    </Link>
                    <Link href="/services" className="btn-secondary">
                        View Our Services
                    </Link>
                </div>
            </section>
        </>
    );
}
