"use client";

import { useState } from "react";
import Link from "next/link";

interface PricingPlan {
    name: string;
    price: number | string;
    periodText: string;
    renewalPrice?: number | string;
    desc?: string;
    features: string[];
    popular?: boolean;
    ctaText: string;
    ctaLink: string;
}

interface ProductPricing {
    id: string;
    name: string;
    emoji: string;
    tagline: string;
    desc: string;
    demo: string;
    versions: {
        label: string;
        id: string;
        plans: PricingPlan[];
    }[];
}

const PRODUCTS_PRICING: ProductPricing[] = [
    {
        id: "cold-store",
        name: "Aazify Cold Store",
        emoji: "📦",
        tagline: "Cold Storage Management",
        desc: "Smart software to manage your cold storage operations with ease, accuracy, and real-time farmer ledgers.",
        demo: "https://coldstore.aazify.com",
        versions: [
            {
                label: "Online Version",
                id: "online",
                plans: [
                    {
                        name: "Silver Plan (Starter)",
                        price: 15000,
                        periodText: "/ year",
                        renewalPrice: 10000,
                        desc: "For small cold stores getting started with digital tracking.",
                        features: [
                            "1 Cold Store Setup",
                            "3 User Accounts",

                        ],
                        popular: false,
                        ctaText: "Get Silver Plan",
                        ctaLink: "/contact?product=cold-store&version=online&plan=silver",
                    },
                    {
                        name: "Gold Plan (Most Popular)",
                        price: 25000,
                        periodText: "/ year",
                        renewalPrice: 15000,
                        desc: "Best for growing businesses with multiple rooms or stores.",
                        features: [
                            "3 Cold Stores Setup",
                            "10 Users per Store",


                        ],
                        popular: true,
                        ctaText: "Get Gold Plan",
                        ctaLink: "/contact?product=cold-store&version=online&plan=gold",
                    },
                    {
                        name: "Platinum Plan (Enterprise)",
                        price: 50000,
                        periodText: "/ year",
                        renewalPrice: 25000,
                        desc: "For large operations, cold store chains, and advanced integrations.",
                        features: [
                            "10 Stores Setup",
                            "Unlimited Users",

                        ],
                        popular: false,
                        ctaText: "Contact Sales",
                        ctaLink: "/contact?product=cold-store&version=online&plan=platinum",
                    },
                ],
            },
            {
                label: "Offline Version",
                id: "offline",
                plans: [
                    {
                        name: "Offline Basic License",
                        price: 35000,
                        periodText: " one-time",
                        renewalPrice: 10000,
                        desc: "Standard offline desktop installation for local database needs.",
                        features: [
                            "1 Cold Store Setup",
                            "3 User Accounts",

                        ],
                        popular: false,
                        ctaText: "Get Basic License",
                        ctaLink: "/contact?product=cold-store&version=offline&plan=basic",
                    },
                    {
                        name: "Offline Enterprise License",
                        price: 50000,
                        periodText: " one-time",
                        renewalPrice: 15000,
                        desc: "For larger local setups requiring multi-store support and offline stability.",
                        features: [
                            "3 Stores Setup",
                            "10 User Accounts",


                        ],
                        popular: true,
                        ctaText: "Get Enterprise License",
                        ctaLink: "/contact?product=cold-store&version=offline&plan=enterprise",
                    },
                ],
            },
        ],
    },
    {
        id: "pos",
        name: "Aazify Point of Sale",
        emoji: "🛒",
        tagline: "Retail & Trading POS",
        desc: "Modern POS system for retailers and wholesalers to streamline stock tracking, sales, and billing.",
        demo: "https://pos.aazify.com/home",
        versions: [
            {
                label: "All Packages",
                id: "all",
                plans: [
                    {
                        name: "Offline License",
                        price: 35000,
                        periodText: " / single branch",
                        renewalPrice: 10000,
                        desc: "Robust offline desktop system that works without internet dependency.",
                        features: [
                            "1 Shop/Branch Database Setup",
                            "Barcode & QR Code Integration",
                            "Complete Sales & Purchase Management",
                            "Real-Time Stock & Inventory Tracking",
                            "Billing & Cash Drawer Support",
                            "1 Year Offline System Maintenance Support",
                        ],
                        popular: false,
                        ctaText: "Buy Offline License",
                        ctaLink: "/contact?product=pos&version=offline&plan=single-shop",
                    },
                    {
                        name: "Online Subscription",
                        price: 25000,
                        periodText: "/ year",
                        desc: "Cloud POS to manage and access your store details anywhere on any device.",
                        features: [
                            "1 Cloud Outlet Setup",
                            "Unlimited Products & Sales Logging",
                            "Real-Time Cloud Backups",
                            "Remote Live Sales & Revenue Analytics",
                            "Customer & Vendor Ledger Handling",
                            "Free Online Updates & Support",
                        ],
                        popular: true,
                        ctaText: "Subscribe Online",
                        ctaLink: "/contact?product=pos&version=online&plan=single-shop",
                    },
                ],
            },
        ],
    },
    {
        id: "restaurant",
        name: "Aazify Restaurant System",
        emoji: "🍽️",
        tagline: "Restaurant Operations",
        desc: "End-to-end software for cafes, diners, and takeaways to manage table ordering, KOT, and cashier billing.",
        demo: "https://restaurant.aazify.com",
        versions: [
            {
                label: "All Packages",
                id: "all",
                plans: [
                    {
                        name: "Offline License",
                        price: 25000,
                        periodText: " / single branch",
                        renewalPrice: 10000,
                        desc: "Offline POS software designed for local restaurant counters and kitchen printing.",
                        features: [
                            "1 Local Branch Setup",
                            "Table Management & Quick Billing",
                            "Kitchen Order Ticket (KOT) Printing",
                            "Menu & Price Configuration",
                            "Daily Sales Cashier Reports",
                            "Standard Offline Support",
                        ],
                        popular: false,
                        ctaText: "Get Offline POS",
                        ctaLink: "/contact?product=restaurant&version=offline&plan=single-branch",
                    },
                    {
                        name: "Offline + Sync License",
                        price: 50000,
                        periodText: " / single branch",
                        renewalPrice: 15000,
                        desc: "Offline operation safety with cloud synchronization to check reporting remotely.",
                        features: [
                            "1 Branch Setup (Offline Operational)",
                            "Real-time Cloud Database Synchronization",
                            "Remote Web Dashboard Access",
                            "Recipe & Advanced Inventory Tracking",
                            "Multi-user Access Control",
                            "24/7 Remote Desktop Support",
                        ],
                        popular: true,
                        ctaText: "Get Sync Version",
                        ctaLink: "/contact?product=restaurant&version=sync&plan=single-branch",
                    },
                    {
                        name: "Multi-Branch Sync License",
                        price: 90000,
                        periodText: " / 3 branches",
                        renewalPrice: "15,000 each branch per / year",
                        desc: "Connect multiple branches and control pricing and stock from a central head office.",
                        features: [
                            "Up to 3 Restaurant Branches Setup",
                            "Centralized Cloud Database & Sync",
                            "Centralized Menu & Recipe Controller",
                            "Branch-wise Sales & Stock Audits",
                            "Advanced Staff Permissions & Log Analysis",
                            "Dedicated Engineer Support SLA",
                        ],
                        popular: false,
                        ctaText: "Get Multi-Branch",
                        ctaLink: "/contact?product=restaurant&version=sync&plan=multi-branch",
                    },
                ],
            },
        ],
    },
    {
        id: "mandi",
        name: "Aazify Mandi Management",
        emoji: "💵",
        tagline: "Mandi & Commission Shop",
        desc: "Complete accounting and inventory management for Mandi commission shops and wholesalers.",
        demo: "https://mandi.aazify.com",
        versions: [
            {
                label: "Online Version",
                id: "online",
                plans: [
                    {
                        name: "Standard Commission Shop",
                        price: 35000,
                        periodText: " / setup",
                        renewalPrice: 10000,
                        desc: "Complete cloud software to automate commissions, vendor records, and ledger printing.",
                        features: [
                            "1 Mandi Shop Setup",
                            "Detailed Customer & Vendor Ledger Ledgers",
                            "Auto-calculation of Commission, Labour, and Taxes",
                            "Stock In/Out & Auction Log Monitoring",
                            "Printable Daily Transactions Ledger Book",
                            "Secure Cloud Hosting & Support",
                        ],
                        popular: true,
                        ctaText: "Buy Mandi System",
                        ctaLink: "/contact?product=mandi&plan=standard",
                    },
                ],
            },
        ],
    },
    {
        id: "pesticide",
        name: "Aazify Pesticide Management",
        emoji: "🧪",
        tagline: "Pesticide & Seed Dealer ERP",
        desc: "Smart database accounting and stock management for agricultural pesticide and seed dealers with expiry alerts and batch numbers.",
        demo: "https://pesticide.aazify.com",
        versions: [
            {
                label: "All Packages",
                id: "all",
                plans: [
                    {
                        name: "Offline License",
                        price: 35000,
                        periodText: " / single branch",
                        renewalPrice: 10000,
                        desc: "Robust offline desktop system that works without internet dependency.",
                        features: [
                            "1 Shop/Branch Database Setup",
                            "Seed & Pesticide Batch tracking",
                            "Expiry Alerts & Warning System",
                            "Complete Supplier & Customer Ledgers",
                            "Real-Time Stock & Inventory Tracking",
                            "1 Year Offline System Maintenance Support",
                        ],
                        popular: false,
                        ctaText: "Buy Offline License",
                        ctaLink: "/contact?product=pesticide&version=offline&plan=single-shop",
                    },
                    {
                        name: "Online Subscription",
                        price: 35000,
                        periodText: "/ year",
                        renewalPrice: 10000,
                        desc: "Cloud database system to access sales, records, and expiry alerts remotely from anywhere.",
                        features: [
                            "1 Cloud Outlet Setup",
                            "Seed & Pesticide Batch tracking",
                            "Expiry Alerts & Warning System",
                            "Real-Time Cloud Backups & Syncing",
                            "Remote Sales & Supplier Analytics",
                            "Free Online Updates & Support",
                        ],
                        popular: true,
                        ctaText: "Subscribe Online",
                        ctaLink: "/contact?product=pesticide&version=online&plan=single-shop",
                    },
                ],
            },
        ],
    },
    {
        id: "tax",
        name: "FBR Digital Invoicing",
        emoji: "🧾",
        tagline: "FBR Compliance & Taxes",
        desc: "Fully certified FBR integration modules to report sales transactions instantly to the Federal Board of Revenue.",
        demo: "https://tax.aazify.com",
        versions: [
            {
                label: "Monthly Packages",
                id: "monthly",
                plans: [
                    {
                        name: "Starter Package",
                        price: 2000,
                        periodText: "/ month",
                        desc: "Designed for small retail stores reporting limited tax invoices.",
                        features: [
                            "Up to 30 FBR Invoices / Month",
                            "Free FBR Integration & API Setup",
                            "Real-Time Tax Calculation Reporting",
                            "Dedicated Phone Support Available",
                            "Automatic Compliance Updates",
                        ],
                        popular: false,
                        ctaText: "Select Starter",
                        ctaLink: "/contact?product=fbr&plan=starter",
                    },
                    {
                        name: "Standard Package",
                        price: 3000,
                        periodText: "/ month",
                        desc: "Ideal for active shops and medium retail businesses.",
                        features: [
                            "Up to 200 FBR Invoices / Month",
                            "Free FBR Integration & API Setup",
                            "Real-Time Tax Calculation Reporting",
                            "Dedicated Phone Support Available",
                            "Automatic Compliance Updates",
                            "Detailed compliance reporting logs",
                        ],
                        popular: true,
                        ctaText: "Select Standard",
                        ctaLink: "/contact?product=fbr&plan=standard",
                    },
                    {
                        name: "Unlimited Package",
                        price: 5000,
                        periodText: "/ month",
                        desc: "For supermarkets and high-volume sales retail chains.",
                        features: [
                            "Unlimited FBR Invoices / Month",
                            "Free FBR Integration & API Setup",
                            "Real-Time Tax Calculation Reporting",
                            "Dedicated Phone Support Available",
                            "Priority Email & Call Support Assistance",
                            "Audit Log Verification Support",
                        ],
                        popular: false,
                        ctaText: "Select Unlimited",
                        ctaLink: "/contact?product=fbr&plan=unlimited",
                    },
                ],
            },
        ],
    },
    {
        id: "transport",
        name: "Aazify Transport Management",
        emoji: "🚛",
        tagline: "Fleet & Transport ERP",
        desc: "Complete billing, booking management, fuel registers, driver ledgers, and maintenance logbooks for transport companies and fleet owners.",
        demo: "https://trasnport.aazify.com",
        versions: [
            {
                label: "All Packages",
                id: "all",
                plans: [
                    {
                        name: "Online Subscription",
                        price: 12000,
                        periodText: "/ year",
                        desc: "Cloud version to manage your fleet bookings, driver ledgers, and trip status remotely.",
                        features: [
                            "1 Cloud Office Setup",
                            "Vehicle & Driver Log Management",
                            "Fuel Expense & Maintenance tracking",
                            "Real-Time Cloud Backups & Syncing",
                            "Remote Booking & Expense Analytics",
                            "Free Online Updates & Dedicated Support",
                        ],
                        popular: true,
                        ctaText: "Subscribe Online",
                        ctaLink: "/contact?product=transport&version=online&plan=single-office",
                    },
                ],
            },
        ],
    },
];

export default function PricingPage() {
    const [activeVersionIds, setActiveVersionIds] = useState<Record<string, string>>({
        "cold-store": "online",
        pos: "all",
        restaurant: "all",
        mandi: "online",
        pesticide: "all",
        transport: "all",
        tax: "monthly",
    });

    const handleVersionChange = (productId: string, versionId: string) => {
        setActiveVersionIds((prev) => ({
            ...prev,
            [productId]: versionId,
        }));
    };

    return (
        <>
            {/* Header */}
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Pricing Plans</div>
                <h1 className="section-title">
                    Aazify Products <span>Pricing Plans</span>
                </h1>
                <p className="section-sub">
                    Get the perfect software plan to power your business operations. Check out our competitive offline licenses and online cloud subscriptions.
                </p>
            </div>

            {/* Products Pricing Sections */}
            {PRODUCTS_PRICING.map((product) => {
                const activeVersionId = activeVersionIds[product.id] || product.versions[0].id;
                const activeVersion = product.versions.find((v) => v.id === activeVersionId) || product.versions[0];
                const activePlans = activeVersion.plans;

                return (
                    <section
                        key={product.id}
                        className="pricing-product-section"
                        id={`pricing-section-${product.id}`}
                    >
                        <div className="pricing-product-header">
                            <div className="product-title-row">
                                <span className="product-emoji">{product.emoji}</span>
                                <h2>{product.name}</h2>
                            </div>

                            <div style={{ marginTop: "0.25rem", marginBottom: "0.75rem", display: "flex", justifyContent: "center" }}>
                                <a
                                    href={product.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="pricing-demo-btn"
                                    id={`btn-pricing-demo-${product.id}`}
                                >
                                    <span>Try Live Demo</span>
                                    <svg
                                        style={{ width: "14px", height: "14px" }}
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

                            <p className="product-tagline">{product.tagline}</p>
                            <p className="product-desc">{product.desc}</p>

                            {/* Sub-version Selector (Offline vs Online) if multiple versions exist */}
                            {product.versions.length > 1 && (
                                <div className="billing-toggle-wrapper" style={{ marginTop: "1.5rem" }}>
                                    {product.versions.map((ver) => (
                                        <button
                                            key={ver.id}
                                            className={`billing-toggle-btn ${activeVersionId === ver.id ? "active" : ""}`}
                                            onClick={() => handleVersionChange(product.id, ver.id)}
                                            id={`btn-version-${product.id}-${ver.id}`}
                                        >
                                            {ver.label}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div
                            className={`pricing-grid plans-${activePlans.length}`}
                            style={{
                                justifyContent: "center",
                                marginTop: "3rem",
                            }}
                        >
                            {activePlans.map((plan) => {
                                const isNumberPrice = typeof plan.price === "number";
                                return (
                                    <div
                                        key={plan.name}
                                        className={`pricing-card ${plan.popular ? "popular" : ""}`}
                                        id={`pricing-card-${product.id}-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                    >
                                        {plan.popular && (
                                            <div className="popular-badge">Most Popular</div>
                                        )}
                                        <div className="pricing-card-header">
                                            <h4>{plan.name}</h4>
                                            {plan.desc && <p className="pricing-card-desc">{plan.desc}</p>}
                                            <div className="price-wrapper" style={{ marginTop: plan.desc ? "0px" : "1.5rem" }}>
                                                <span className="currency">Rs.</span>
                                                <span className="amount">
                                                    {isNumberPrice ? (plan.price as number).toLocaleString() : plan.price}
                                                </span>
                                                <span className="period">{plan.periodText}</span>
                                            </div>
                                            {plan.renewalPrice && (
                                                <div className="billed-annually-note">
                                                    {typeof plan.renewalPrice === "string" ? (
                                                        <>Renewal: Rs. {plan.renewalPrice}</>
                                                    ) : (
                                                        <>Renewal: Rs. {plan.renewalPrice.toLocaleString()} / year</>
                                                    )}
                                                </div>
                                            )}
                                            {product.id === "tax" && plan.features.length > 0 && (
                                                <div className="fbr-main-feature">
                                                    <svg
                                                        className="fbr-main-feature-icon"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                                                        />
                                                    </svg>
                                                    <span>{plan.features[0]}</span>
                                                </div>
                                            )}
                                        </div>

                                        <div className="pricing-card-divider" />

                                        <div className="pricing-card-body">
                                            <h5>Product Details:</h5>
                                            <ul className="pricing-features-list">
                                                {(product.id === "tax" ? plan.features.slice(1) : plan.features).map((feature, fIdx) => (
                                                    <li key={fIdx}>
                                                        <svg
                                                            className="feature-tick-icon"
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
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="pricing-card-footer">
                                            <Link
                                                href={plan.ctaLink}
                                                className={`pricing-cta-btn ${plan.popular ? "btn-primary" : "btn-secondary"}`}
                                                id={`btn-pricing-cta-${product.id}-${plan.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                                            >
                                                {plan.ctaText}
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
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                );
            })}

            {/* Custom Requirements CTA */}
            <section className="pricing-custom-section">
                <div className="pricing-custom-content">
                    <div className="section-tag">Custom Development</div>
                    <h2>Need a bespoke setup or specific module?</h2>
                    <p>
                        We develop custom systems, tailored FBR modules for legacy ERP tools, multi-facility networking setups, and custom reports. Let&apos;s talk about your project.
                    </p>
                    <div className="cta-actions">
                        <Link href="/contact" className="btn-primary" id="btn-custom-contact">
                            Get Custom Quote
                        </Link>
                        <a
                            href="https://wa.me/923007395147"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                            id="btn-custom-whatsapp"
                        >
                            Discuss on WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
}
