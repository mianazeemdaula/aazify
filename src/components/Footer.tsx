import Link from "next/link";

export default function Footer() {
    return (
        <footer className="main-footer">
            <div className="footer-grid">
                <div className="footer-brand">
                    <Link href="/" className="nav-logo" style={{ fontSize: "1.8rem" }}>
                        Aazify
                    </Link>
                    <p>
                        We don&apos;t just build software — we create digital solutions
                        that drive success. From startups to growing businesses, we help
                        turn your ideas into powerful, scalable products.
                    </p>
                </div>
                <div>
                    <h4>Products</h4>
                    <ul>
                        <li><Link href="/products">Cold Store</Link></li>
                        <li><Link href="/products">Point of Sale</Link></li>
                        <li><Link href="/products">Commission Shop</Link></li>
                        <li><Link href="/products">Restaurant Management</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Company</h4>
                    <ul>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/services">Services</Link></li>
                        <li><Link href="/portfolio">Portfolio</Link></li>
                        <li><Link href="/team">Our Team</Link></li>
                        <li><Link href="/reviews">Client Reviews</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                    </ul>
                </div>
                <div>
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link href="/faqs">FAQs</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                        <li><Link href="/terms">Terms &amp; Conditions</Link></li>
                        <li><Link href="/cookies">Cookies Policy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <span>&copy; {new Date().getFullYear()} Aazify.com — All rights reserved.</span>
                <div className="footer-socials">
                    <a href="https://wa.me/923007395147" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">💬</a>
                    <a href="https://www.facebook.com/aazify" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
                    <a href="https://www.instagram.com/aazify_" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📸</a>
                    <a href="https://www.youtube.com/@aazify.official" target="_blank" rel="noopener noreferrer" aria-label="YouTube">▶️</a>
                    <a href="https://www.tiktok.com/@aazify" target="_blank" rel="noopener noreferrer" aria-label="TikTok">🎵</a>
                    <a href="https://www.pinterest.com/aazifycom/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest">📌</a>
                </div>
                <span>Crafted with ❤️ by AAZ Developers</span>
            </div>
        </footer>
    );
}
