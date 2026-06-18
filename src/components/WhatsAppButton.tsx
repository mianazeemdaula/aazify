"use client";

import { useState, useEffect, useRef } from "react";

const WhatsAppIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const BackIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
    </svg>
);

const SendIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 ml-1">
        <line x1="22" y1="2" x2="11" y2="13"></line>
        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
);

interface ProductOption {
    emoji: string;
    name: string;
    desc: string;
    text: string;
}

const QUICK_OPTIONS: ProductOption[] = [
    {
        emoji: "📦",
        name: "Cold Store Management",
        desc: "Smart Storage Capacity & Farmers Record",
        text: "Hi! I am interested in Aazify Cold Store Management system. I'd like to get a demo."
    },
    {
        emoji: "🛒",
        name: "Point of Sale (POS)",
        desc: "Modern Retail & Trading Billing System",
        text: "Hi! I am interested in Aazify Point of Sale (POS) system. I'd like to try it."
    },
    {
        emoji: "💵",
        name: "Mandi Management",
        desc: "Mandi & Commission Accounting",
        text: "Hi! I am interested in your Aazify Mandi Management software. I'd like to know details."
    },
    {
        emoji: "🍽️",
        name: "Restaurant Management",
        desc: "KOT, Table Billing & Recipe Inventory",
        text: "Hi! I'd like to request a demo/quote for the Aazify Restaurant Management system."
    },
    {
        emoji: "🧪",
        name: "Pesticide Management",
        desc: "Batch Expiry & Seed Dealer Billing",
        text: "Hi! I am interested in Aazify Pesticide Management system. I'd like to try it."
    },
    {
        emoji: "🧾",
        name: "FBR Invoicing Software",
        desc: "Tax Compliance Digital Billing System",
        text: "Hi! I want compliance invoicing. Tell me more about Aazify FBR Digital Invoicing."
    },
    {
        emoji: "🚛",
        name: "Transport Management",
        desc: "Fleet Bookings & Driver Account Ledgers",
        text: "Hi! I am interested in Aazify Transport Management system. I'd like to get details."
    },
    {
        emoji: "💬",
        name: "General Inquiry",
        desc: "Chat with us for general or custom queries",
        text: "Hi! I have a general query and would like to discuss my project with you."
    }
];

export default function WhatsAppButton() {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<ProductOption | null>(null);
    const [message, setMessage] = useState("");
    const widgetRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // Auto-show tooltip after 2.5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!isOpen) {
                setShowTooltip(true);
            }
        }, 2500);

        return () => clearTimeout(timer);
    }, [isOpen]);

    // Focus textarea when a product is selected
    useEffect(() => {
        if (selectedProduct && inputRef.current) {
            inputRef.current.focus();
        }
    }, [selectedProduct]);

    // Close on click outside, reset view
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
                setIsOpen(false);
                setSelectedProduct(null);
            }
        }
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    // Handle scroll to fade out tooltip
    useEffect(() => {
        const handleScroll = () => {
            setShowTooltip(false);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleButtonClick = () => {
        setIsOpen(!isOpen);
        setShowTooltip(false);
        if (isOpen) {
            setSelectedProduct(null); // Reset selection when closing
        }
    };

    const handleProductSelect = (product: ProductOption) => {
        setSelectedProduct(product);
        setMessage(product.text);
    };

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        const finalMessage = message.trim() || "Hi Aazify! I'm interested in your services.";
        const encodedText = encodeURIComponent(finalMessage);
        const whatsappUrl = `https://wa.me/923007395147?text=${encodedText}`;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        setIsOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div ref={widgetRef} className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-sans">

            {/* 1. Chat Widget Window */}
            {isOpen && (
                <div
                    className="w-[340px] sm:w-[380px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800/40 bg-white/80 dark:bg-slate-950/85 backdrop-blur-xl transition-all duration-300 ease-out transform translate-y-0 opacity-100 whatsapp-animate-in pointer-events-auto"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-[#0f766e] to-[#14b8a6] p-4 text-white relative overflow-hidden">
                        {/* Background Decorative Blobs */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-white/10 filter blur-lg pointer-events-none" />
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/15 filter blur-lg pointer-events-none" />

                        {selectedProduct && (
                            <button
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-4 left-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors duration-200 z-10 cursor-pointer"
                                aria-label="Back to product catalog"
                            >
                                <BackIcon />
                            </button>
                        )}

                        <button
                            onClick={() => {
                                setIsOpen(false);
                                setSelectedProduct(null);
                            }}
                            className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition-colors duration-200 z-10 cursor-pointer"
                            aria-label="Close chat window"
                        >
                            <CloseIcon />
                        </button>

                        <div className={`flex items-center gap-3 relative z-10 ${selectedProduct ? "pl-8" : ""}`}>
                            <div className="relative">
                                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-lg border border-white/20 text-white shadow-inner">
                                    {selectedProduct ? selectedProduct.emoji : "AZ"}
                                </div>
                                <span className="absolute bottom-0 right-0 flex h-3.5 w-3.5 rounded-full border-2 border-[#0f766e] bg-emerald-400">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-[15px] leading-tight">
                                    {selectedProduct ? selectedProduct.name : "Aazify Support"}
                                </h3>
                                <p className="text-white/85 text-[12px] flex items-center gap-1.5 mt-0.5">
                                    <span>Typically replies in minutes</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Chat Area - Dynamic views based on selection */}
                    {!selectedProduct ? (
                        /* View A: Products Catalog List */
                        <div className="p-4 max-h-[380px] overflow-y-auto bg-slate-50/60 dark:bg-slate-950/20 scrollbar-thin">
                            <div className="space-y-2.5 pt-1">
                                <span className="text-[10.5px] font-bold text-slate-400 dark:text-slate-550 uppercase tracking-wider block mb-2">Our Products:</span>
                                <div className="flex flex-col gap-2.5">
                                    {QUICK_OPTIONS.map((opt, idx) => (
                                        <div
                                            key={idx}
                                            onClick={() => handleProductSelect(opt)}
                                            className="w-full text-left p-3 rounded-2xl border border-slate-100/80 dark:border-slate-800/80 bg-white dark:bg-slate-900/60 hover:border-teal-500/50 hover:bg-slate-50/20 dark:hover:bg-slate-900/80 transition-all duration-200 flex items-start gap-3 relative cursor-pointer group/card shadow-sm hover:shadow-md hover:-translate-y-0.5"
                                        >
                                            {/* Icon/Logo Badge Container */}
                                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-50 to-teal-100/80 dark:from-teal-950/40 dark:to-teal-900/30 text-teal-700 dark:text-teal-350 border border-teal-100/30 dark:border-teal-900/15 flex items-center justify-center text-lg shadow-sm group-hover/card:scale-105 transition-transform duration-300 shrink-0">
                                                {opt.emoji}
                                            </div>

                                            {/* Info */}
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-[13px] font-bold text-slate-900 dark:text-white leading-tight group-hover/card:text-teal-600 dark:group-hover/card:text-teal-450 transition-colors duration-200">
                                                    {opt.name}
                                                </h4>
                                                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed mt-1">
                                                    {opt.desc}
                                                </p>
                                            </div>

                                            {/* Chevron indicator */}
                                            <div className="text-slate-300 dark:text-slate-650 group-hover/card:text-teal-500 transition-all duration-200 transform translate-x-0 group-hover/card:translate-x-0.5 self-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ) : (
                        /* View B: Chat Inbox view */
                        <div className="p-4 max-h-[380px] overflow-y-auto space-y-4 bg-slate-50/60 dark:bg-slate-950/20 scrollbar-thin">
                            <div className="flex gap-2.5 items-start">
                                {/* Small Assistant Avatar */}
                                <div className="w-7 h-7 rounded-full bg-[#0f766e] text-white font-bold text-[10px] flex items-center justify-center shadow-md shrink-0">
                                    AZ
                                </div>
                                <div className="bg-white dark:bg-slate-900 p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100/85 dark:border-slate-800/40 max-w-[85%]">
                                    <p className="text-[13px] text-slate-800 dark:text-slate-200 leading-relaxed">
                                        Excellent choice! Customize your inquiry message below and click the send button to redirect to WhatsApp.
                                    </p>
                                    <span className="text-[9.5px] text-slate-400 dark:text-slate-550 block mt-1 text-right">Aazify Team</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Footer / Composer Area */}
                    {!selectedProduct ? (
                        /* Small Footer Bar for catalog */
                        <div className="p-3 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 text-center">
                            <span className="text-[10px] text-slate-400 dark:text-slate-500 flex items-center justify-center gap-1">
                                🔒 Select a product above to start an inquiry
                            </span>
                        </div>
                    ) : (
                        /* Input Composer Form */
                        <form onSubmit={handleSend} className="p-3 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
                            <div className="relative flex items-center">
                                <textarea
                                    ref={inputRef}
                                    rows={2}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full text-[13.5px] p-2.5 pr-12 rounded-xl border border-slate-200 dark:border-slate-800 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-slate-50 dark:bg-slate-900 dark:text-white resize-none outline-none transition-all placeholder-slate-400"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" && !e.shiftKey) {
                                            e.preventDefault();
                                            handleSend(e);
                                        }
                                    }}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2.5 p-2 rounded-lg bg-[#25D366] text-white hover:bg-[#20ba5a] active:scale-95 transition-all duration-200 shadow-md shadow-emerald-500/10 cursor-pointer"
                                    aria-label="Send message to WhatsApp"
                                >
                                    <SendIcon />
                                </button>
                            </div>
                            <div className="mt-2 text-center flex items-center justify-center gap-2">
                                <span
                                    onClick={() => setSelectedProduct(null)}
                                    className="text-[10px] text-teal-650 hover:underline cursor-pointer font-semibold"
                                >
                                    ← Back to products
                                </span>
                                <span className="text-[10px] text-slate-450 dark:text-slate-500">|</span>
                                <span className="text-[10px] text-slate-400 dark:text-slate-500">
                                    Secure redirect via WhatsApp
                                </span>
                            </div>
                        </form>
                    )}
                </div>
            )}

            {/* 2. Tooltip (Shows before click, disappears on scroll or hover) */}
            {showTooltip && !isOpen && (
                <div
                    onClick={handleButtonClick}
                    className="absolute bottom-20 right-2 mr-1 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-slate-950/90 dark:bg-white/95 text-white dark:text-slate-900 border border-white/10 dark:border-slate-200/20 shadow-xl cursor-pointer select-none transition-all duration-500 animate-bounce pointer-events-auto group hover:bg-slate-900 dark:hover:bg-white"
                >
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[13px] font-semibold tracking-wide whitespace-nowrap">
                        Need help? Chat with us!
                    </span>
                    <span className="text-white/60 dark:text-slate-400 text-xs group-hover:translate-x-0.5 transition-transform duration-200">
                        👋
                    </span>
                </div>
            )}

            {/* 3. Floating Button Container (Glassmorphic Backdrop Blur Ring) */}
            <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 dark:bg-slate-900/10 backdrop-blur-md border border-white/20 dark:border-slate-800/30 shadow-[0_8px_32px_0_rgba(15,118,110,0.06)] pointer-events-none transition-all duration-300 hover:scale-105">

                {/* Vibrant green WhatsApp button with Drop Shadow */}
                <button
                    onClick={handleButtonClick}
                    className="pointer-events-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-[0_6px_20px_rgba(37,211,102,0.35)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer relative z-10 border-none outline-none group"
                    aria-label="Toggle WhatsApp Chat"
                >
                    <WhatsAppIcon className="w-7 h-7 transition-transform duration-300 group-hover:rotate-6" />

                    {/* Ring highlight inside the button */}
                    <div className="absolute inset-0 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </button>

                {/* Small indicator dot on the button when closed */}
                {!isOpen && (
                    <span className="absolute top-4 right-4 flex h-3.5 w-3.5 z-20">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white dark:border-slate-950"></span>
                    </span>
                )}
            </div>

        </div>
    );
}
