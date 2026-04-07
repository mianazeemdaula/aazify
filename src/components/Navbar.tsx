"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    return (
        <nav className="main-nav">
            <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
                Aazify
            </Link>
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
                <li>
                    <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
                        Let&apos;s Talk
                    </Link>
                </li>
            </ul>
            <div className="hamburger" onClick={() => setOpen(!open)}>
                <span style={open ? { transform: "rotate(45deg) translateY(7px)" } : {}} />
                <span style={open ? { opacity: 0 } : {}} />
                <span style={open ? { transform: "rotate(-45deg) translateY(-7px)" } : {}} />
            </div>
        </nav>
    );
}
