import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Products",
    description:
        "Explore Aazify's powerful, ready-to-use digital products — Cold Store, POS, Mandi, Restaurant, Pesticide, and Transport Management systems.",
    alternates: {
        canonical: "https://aazify.com/products",
    },
};

const PRODUCTS = [
    {
        emoji: "📦",
        name: "Cold Store",
        tagline: "Cold Storage Management",
        desc: "Smart software to manage your cold storage operations with ease and accuracy.",
        features: [
            "Farmers & Landlord Records",
            "Rooms, Racks & Capacity Tracking",
            "Contract & Rent Management",
            "Billing, Expenses & Payments",
            "FBR Tax & Reports Integration",
        ],
        summary:
            "A complete solution to manage your cold storage operations efficiently and make data-driven decisions.",
        demo: "https://coldstore.aazify.com",
    },
    {
        emoji: "🛒",
        name: "Point of Sale (POS)",
        tagline: "Retail & Trading POS",
        desc: "Modern POS system for retailers and traders to streamline sales and inventory.",
        features: [
            "Sales & Purchase Tracking",
            "Barcode & QR Scanner Support",
            "Real-Time Inventory Control",
            "Customer & Vendor Ledgers",
            "FBR Tax Integration & Billing",
        ],
        summary:
            "A comprehensive solution to streamline retail operations and maximize efficiency.",
        demo: "https://pos.aazify.com/home",
    },
    {
        emoji: "💵",
        name: "Mandi Management",
        tagline: "Mandi & Commission Shop",
        desc: "Complete solution for Mandi and commission-based shops to manage products, sales, and commissions.",
        features: [
            "Vendor & Customer Ledgers",
            "Automatic Commission Calculation",
            "Stock & Inventory Tracking",
            "Expense & Daily Cashbook",
            "FBR Tax Integration",
        ],
        summary:
            "The perfect system for Mandi and commission-based shops to automate operations and boost transparency.",
        demo: "https://mandi.aazify.com",
    },
    {
        emoji: "🍽️",
        name: "Restaurant Management",
        tagline: "Restaurant Operations",
        desc: "End-to-end software for restaurants to handle orders, tables, and kitchen workflows efficiently.",
        features: [
            "Table & Order Management",
            "Menu & Kitchen Workflows",
            "Inventory & Stock Monitoring",
            "Automated Billing & Payments",
            "FBR Tax & Sales Reports",
        ],
        summary:
            "A full-featured solution to streamline restaurant operations and enhance customer satisfaction.",
        demo: "https://restaurant.aazify.com",
    },
    {
        emoji: "🧪",
        name: "Pesticide Management",
        tagline: "Pesticide & Seed Dealer Software",
        desc: "Specialized ERP and POS system for agricultural pesticide, fertilizer, and seed dealers.",
        features: [
            "Batch & Expiry Date Tracking",
            "Supplier & Customer Ledgers",
            "Retail & Wholesale Billing",
            "Multi-Warehouse Inventory",
            "FBR Tax & Licensing Reports",
        ],
        summary:
            "A comprehensive solution designed for pesticide and seed merchants to track batches, manage expiry dates, and simplify ledger accounting.",
        demo: "https://pesticide.aazify.com",
    },
    {
        emoji: "🧾",
        name: "FBR Digital Invoicing",
        tagline: "Tax & FBR Compliance",
        desc: "FBR-compliant digital invoicing software to automate tax invoices and simplify business compliance.",
        features: [
            "FBR Compliant Invoicing",
            "Real-time Sales Tax Calculation",
            "GST & IRIS System Integration",
            "Multi-Business & Branch Support",
            "PDF, Print & Tax Summaries",
        ],
        summary:
            "A powerful FBR-integrated invoicing solution to keep your business tax-compliant and invoice management effortless.",
        demo: "https://tax.aazify.com",
    },
    {
        emoji: "🚛",
        name: "Transport Management",
        tagline: "Fleet & Transport ERP",
        desc: "Complete fleet and logistics software to track vehicles, bookings, drivers, fuel consumption, and maintenance logs.",
        features: [
            "Vehicle & Fleet Log Management",
            "Booking & Dispatch Operations",
            "Driver & Staff Commission Tracking",
            "Fuel & Trip Expense Logs",
            "Route & Maintenance Scheduling",
        ],
        summary:
            "A comprehensive solution to automate transportation logistics, optimize driver assignments, track maintenance, and control fleet operating costs.",
        demo: "https://trasnport.aazify.com",
    },
];

export default function ProductsPage() {
    const productsSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Aazify Products",
        "description": "Ready-to-use digital products designed with scalability, automation, and user experience at their core.",
        "url": "https://aazify.com/products",
        "numberOfItems": PRODUCTS.length,
        "itemListElement": PRODUCTS.map((product, idx) => ({
            "@type": "ListItem",
            "position": idx + 1,
            "item": {
                "@type": "Product",
                "name": product.name,
                "description": product.desc,
                "brand": {
                    "@type": "Brand",
                    "name": "Aazify"
                },
                "offers": {
                    "@type": "Offer",
                    "url": product.demo,
                    "priceCurrency": "PKR",
                    "availability": "https://schema.org/InStock"
                }
            }
        }))
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productsSchema) }}
            />
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Our Products</div>
                <h1 className="section-title">
                    Aazify Software Products <span>Solve Real Problems</span>
                </h1>
                <p className="section-sub">
                    At Aazify, we don&apos;t just provide services — we build powerful,
                    ready-to-use digital products designed to solve real business
                    problems. Our products are built with scalability, automation, and
                    user experience at their core.
                </p>
            </div>

            <section className="products-grid-container">
                <div className="products-cards-grid">
                    {PRODUCTS.map((product, idx) => {
                        const productKey = product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
                        const cardVariants = ["light", "theme-green"];
                        const variant = cardVariants[idx % cardVariants.length];
                        return (
                            <div className={`product-detail-card variant-${variant}`} key={product.name} id={`product-${productKey}`}>
                                <div className="product-card-badge-wrapper">
                                    <div className="product-card-emoji-box">
                                        {product.emoji}
                                    </div>
                                    <div className="product-card-title-area">
                                        <h3>{product.name}</h3>
                                        <span className="product-card-tagline">{product.tagline}</span>
                                    </div>
                                </div>

                                <p className="product-card-description">
                                    {product.desc}
                                </p>

                                <div className="product-card-features-section">
                                    <h4 className="product-card-features-heading">Key Features</h4>
                                    <div className="product-card-features-list">
                                        {product.features.map((f, fIdx) => (
                                            <div
                                                className="product-card-feature-pill"
                                                key={f}
                                                id={`feature-${productKey}-${fIdx}`}
                                            >
                                                <div className="product-card-feature-icon-wrapper">
                                                    <svg
                                                        style={{ width: "10px", height: "10px" }}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="3.5"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M4.5 12.75l6 6 9-13.5"
                                                        />
                                                    </svg>
                                                </div>
                                                <span className="product-card-feature-text">{f}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="product-card-action-area">
                                    <a
                                        href={product.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="product-card-btn-demo"
                                        id={`btn-demo-${productKey}`}
                                    >
                                        Try Live Demo
                                        <svg
                                            style={{ width: "16px", height: "16px" }}
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2.5"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                            />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section">
                <div className="cta-bg" />
                <h2 style={{ position: "relative" }}>
                    Need a <span style={{ color: "var(--primary-light)" }}>custom product</span> for your business?
                </h2>
                <p>Let&apos;s discuss how we can build the perfect solution for you.</p>
                <div className="cta-actions">
                    <a href="mailto:contact@aazify.com" className="btn-primary" id="cta-email-link">
                        📩 contact@aazify.com
                    </a>
                    <a href="https://wa.me/923007395147" target="_blank" rel="noopener noreferrer" className="btn-secondary" id="cta-whatsapp-link">
                        📱 WhatsApp Us
                    </a>
                </div>
            </section>
        </>
    );
}
