"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Products", href: "/products" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (open) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }
        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [open]);

    return (
        <nav className="main-nav">
            <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
                Aazify
            </Link>
            <div
                className={`nav-backdrop ${open ? "open" : ""}`}
                onClick={() => setOpen(false)}
            />
            <ul className={`nav-links ${open ? "open" : ""}`}>
                {NAV_ITEMS.map((item) => (
                    <li key={item.href}>
                        <Link
                            href={item.href}
                            className={pathname === item.href ? "active" : ""}
                            onClick={() => setOpen(false)}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
                <li className="mobile-cta-only">
                    <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
                        Let&apos;s Talk
                    </Link>
                </li>
            </ul>
            <div className="nav-actions">
                <Link href="/contact" className="nav-cta desktop-cta-only" onClick={() => setOpen(false)}>
                    Let&apos;s Talk
                </Link>
                <button
                    type="button"
                    className="hamburger"
                    onClick={() => setOpen(!open)}
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                >
                    <span style={open ? { transform: "translateY(7px) rotate(45deg)" } : {}} />
                    <span style={open ? { opacity: 0 } : {}} />
                    <span style={open ? { transform: "translateY(-7px) rotate(-45deg)" } : {}} />
                </button>
            </div>
        </nav>
    );
}
