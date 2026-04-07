import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore Aazify's powerful, ready-to-use digital products — Cold Store, POS, Commission Shop & Restaurant Management systems.",
};

const PRODUCTS = [
    {
        emoji: "📦",
        name: "Aazify Cold Store",
        desc: "Smart software to manage your cold storage operations with ease and accuracy.",
        features: [
            "Complete Farmers Record Management",
            "Advanced Rooms & Racks Management",
            "Multi-Store & Room Configuration",
            "Smart Contract Handling",
            "Real-time Capacity & Stock Monitoring",
            "Automated Expense & Payment Tracking",
            "Live Revenue & Business Trends",
            "Employee Management & Payroll System",
            "FBR Tax Integration",
        ],
        summary:
            "A complete solution to manage your cold storage operations efficiently and make data-driven decisions.",
        demo: "https://coldstore.aazify.com",
    },
    {
        emoji: "🛒",
        name: "Aazify Point of Sale (POS)",
        desc: "Modern POS system for retailers and traders to streamline sales and inventory.",
        features: [
            "Complete Sales & Purchase Management",
            "Barcode & QR Code Integration",
            "Multi-Outlet Configuration",
            "Vendor & Customer Record Management",
            "Real-Time Stock & Inventory Tracking",
            "Automated Billing & Payment Handling",
            "Live Sales & Revenue Analytics",
            "Employee Management & Access Control",
            "FBR Tax & Compliance Integration",
        ],
        summary:
            "A comprehensive solution to streamline retail operations and maximize efficiency.",
        demo: "https://pos.aazify.com",
    },
    {
        emoji: "💵",
        name: "Aazify Commission Shop",
        desc: "Complete solution for commission-based shops to manage products, sales, and commissions.",
        features: [
            "Product & Inventory Management",
            "Commission Calculation for Vendors",
            "Multi-Shop & Vendor Setup",
            "Customer & Vendor Record Handling",
            "Real-Time Stock Monitoring",
            "Automated Expense & Payment Tracking",
            "Live Revenue & Profit Trends",
            "Employee Management & Payroll System",
            "FBR Tax Integration",
        ],
        summary:
            "The perfect system for commission-based shops to automate operations and boost transparency.",
        demo: "https://commission.aazify.com",
    },
    {
        emoji: "🍽️",
        name: "Aazify Restaurant Management",
        desc: "End-to-end software for restaurants to handle orders, tables, and kitchen workflows efficiently.",
        features: [
            "Table & Order Management",
            "Menu & Recipe Configuration",
            "Multi-Branch & Kitchen Setup",
            "Inventory & Stock Monitoring",
            "Billing & Payment Automation",
            "Live Revenue & Performance Reports",
            "Staff Management & Payroll System",
            "FBR Tax Integration",
        ],
        summary:
            "A full-featured solution to streamline restaurant operations and enhance customer satisfaction.",
        demo: "https://restaurant.aazify.com",
    },
];

export default function ProductsPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Our Products</div>
                <h1 className="section-title">
                    Powerful Products Built to <span>Solve Real Problems</span>
                </h1>
                <p className="section-sub">
                    At Aazify, we don&apos;t just provide services — we build powerful,
                    ready-to-use digital products designed to solve real business
                    problems. Our products are built with scalability, automation, and
                    user experience at their core.
                </p>
            </div>

            {PRODUCTS.map((product, idx) => (
                <section key={product.name}>
                    {idx > 0 && <div className="grad-line" style={{ margin: "0 0 100px 0" }} />}
                    <div className="about-grid" style={{ gap: "3rem" }}>
                        <div>
                            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{product.emoji}</div>
                            <h2 className="section-title" style={{ maxWidth: "100%" }}>
                                {product.name}
                            </h2>
                            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.5rem", fontSize: "1rem" }}>
                                {product.desc}
                            </p>
                            <p style={{ color: "var(--muted)", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.95rem" }}>
                                📊 {product.summary}
                            </p>
                            <a
                                href={product.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
                            >
                                Try Live Demo →
                            </a>
                        </div>
                        <div>
                            <h3
                                style={{
                                    fontFamily: "var(--font-head)",
                                    fontSize: "1.1rem",
                                    fontWeight: 700,
                                    marginBottom: "1.2rem",
                                }}
                            >
                                Key Features
                            </h3>
                            <div className="feature-grid" style={{ gridTemplateColumns: "1fr" }}>
                                {product.features.map((f) => (
                                    <div className="feature-item" key={f}>
                                        <span className="icon">✓</span>
                                        <span>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Need a <span style={{ color: "var(--primary-light)" }}>custom product</span> for your business?
                </h2>
                <p>Let&apos;s discuss how we can build the perfect solution for you.</p>
                <div className="cta-actions">
                    <a href="mailto:contact@aazify.com" className="btn-primary">
                        📩 contact@aazify.com
                    </a>
                    <a href="https://wa.me/923007395147" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                        📱 WhatsApp Us
                    </a>
                </div>
            </section>
        </>
    );
}
