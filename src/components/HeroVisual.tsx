"use client";

import { useState, useEffect } from "react";

const PRODUCTS = [
    { emoji: "📦", name: "Cold Storage Management System" },
    { emoji: "🛒", name: "Retail & Trading POS System" },
    { emoji: "💵", name: "Mandi & Commission System" },
    { emoji: "🍽️", name: "Restaurant Management System" },
    { emoji: "🧪", name: "Pesticide & Seed Dealer System" },
    { emoji: "🧾", name: "FBR Digital Invoicing System" },
    { emoji: "🚛", name: "Transport & Fleet ERP System" }
];

export default function HeroVisual() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % PRODUCTS.length);
        }, 1500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full flex flex-col items-center justify-center py-12 px-6 bg-slate-900/20 border border-white/5 rounded-2xl backdrop-blur-sm">
            <span className="text-5xl mb-4 animate-pulse select-none">
                {PRODUCTS[index].emoji}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white text-center tracking-tight transition-all duration-300">
                {PRODUCTS[index].name}
            </h2>
            <div className="flex gap-1.5 mt-6">
                {PRODUCTS.map((_, i) => (
                    <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                            index === i ? "bg-teal-400 w-4" : "bg-white/20"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
