import Link from "next/link";


const PRODUCTS = [
    { emoji: "📦", name: "Cold Store Management", tagline: "Smart Cold Storage Management", desc: "Manage inventory, farmers, rooms, and payments all in one platform.", demo: "https://coldstore.aazify.com" },
    { emoji: "🛒", name: "Point of Sale Management", tagline: "Modern Retail & Trading POS", desc: "Streamline sales, inventory, and customer management efficiently.", demo: "https://pos.aazify.com/home" },
    { emoji: "💵", name: "Mandi Management", tagline: "Automated Mandi & Commission System", desc: "Track vendors, commissions, and stock in real time for Mandi and commission-based shops.", demo: "https://mandi.aazify.com" },
    { emoji: "🍽️", name: "Restaurant Management", tagline: "End-to-End Restaurant Operations", desc: "Manage tables, orders, inventory, and staff seamlessly.", demo: "https://restaurant.aazify.com" },
    { emoji: "🧪", name: "Pesticide Management", tagline: "Smart Pesticide & Seed Dealer Software", desc: "Track batches, expiry dates, supplier ledgers, and retail sales for pesticide and seed dealers.", demo: "https://pesticide.aazify.com" },
    { emoji: "🧾", name: "FBR Digital Invoicing", tagline: "FBR-Compliant Tax Invoicing Software", desc: "Automate digital invoices, tax calculations, and FBR compliance effortlessly.", demo: "https://tax.aazify.com" },
    { emoji: "🚛", name: "Transport Management", tagline: "Smart Fleet & Transport ERP", desc: "Manage bookings, vehicle tracking, driver accounts, fuel expenses, and route logs seamlessly.", demo: "https://trasnport.aazify.com" },
];


const SERVICES = [
    {
        icon: "🧠",
        title: "Custom Software Development",
        desc: "Scalable CRM, ERP, and bespoke software solutions built with Node.js and Python to automate unique business workflows.",
        variant: "light"
    },
    {
        icon: "🌐",
        title: "Website Development",
        desc: "High-performance, responsive Next.js & React web apps optimized for SEO speed, premium design, and conversion.",
        variant: "theme-green"
    },
    {
        icon: "📱",
        title: "Mobile App Development",
        desc: "Fast, cross-platform Android and iOS mobile applications designed with Flutter and React Native for stunning UI/UX.",
        variant: "light"
    },
    {
        icon: "⚙️",
        title: "Business Automation Systems",
        desc: "Integrate Zapier, secure APIs, and custom bots to automate repetitive tasks, synchronize data, and optimize operations.",
        variant: "theme-green"
    },
    {
        icon: "🤖",
        title: "Agentic AI Solutions",
        desc: "Next-generation AI agents and LLM integrations (OpenAI/Claude) built for smart automation, analytics, and auto-support.",
        variant: "light"
    },
];

const WHY_CHOOSE = [
    { icon: "🚀", title: "Innovative Solutions", desc: "We leverage the latest technologies to build solutions that stand the test of time." },
    { icon: "🎯", title: "Client-Centric Approach", desc: "Every decision is guided by your goals and outcomes, not just deliverables." },
    { icon: "⚡", title: "Scalable Systems", desc: "Agile methodology ensures quick turnaround without compromising quality." },
    { icon: "💼", title: "Trusted by Businesses", desc: "We've helped businesses across multiple industries grow and scale digitally." },
    { icon: "🛠️", title: "Development Support", desc: "From concept to deployment and beyond, we're with you every step of the way." },
];



export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />

                <div className="hero-content">
                    <div className="hero-badge">✨ Welcome to Aazify by AAZ Developers</div>
                    <h1 className="hero-title">
                        Build Smart. <span>Scale Fast.</span><br />Succeed Digitally.
                    </h1>
                    <p className="hero-sub">
                        We build premium digital services to scale your business. From custom software
                        and websites to mobile apps, workflow automation, and agentic AI—we turn
                        your vision into reality.
                    </p>
                    <div className="hero-actions">
                        <Link href="/contact" className="btn-primary">
                            Let&apos;s Build Your Project 👉
                        </Link>
                        <Link href="/products" className="btn-secondary">
                            Explore Products
                        </Link>
                    </div>
                </div>
            </section>



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
                                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="product-demo-link">
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
                        <div className={`service-card variant-${s.variant}`} key={s.title}>
                            <div className="service-icon">{s.icon}</div>
                            <h3>{s.title}</h3>
                            <p>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <div className="grad-line" />

            {/* WHY CHOOSE */}
            <section>
                <div className="section-tag">Why Choose Aazify</div>
                <h2 className="section-title">Why Businesses <span>Trust Aazify</span></h2>
                <p className="section-sub">
                    We combine innovation, reliability, and a client-first mindset to
                    deliver exceptional results.
                </p>
                <div className="why-grid">
                    {WHY_CHOOSE.map((w) => (
                        <div className="why-card" key={w.title}>
                            <div className="why-icon">{w.icon}</div>
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
                            <div className="metric-icon-wrapper">
                                <span className="metric-icon">{m.icon}</span>
                            </div>
                            <div className="metric-info">
                                <div className="metric-num">{m.num}</div>
                                <div className="metric-label">{m.label}</div>
                            </div>
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
