import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "Aazify Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Legal</div>
                <h1 className="section-title">
                    Privacy <span>Policy</span>
                </h1>
                <p className="section-sub">
                    We respect your privacy and ensure your data is secure and protected.
                </p>
            </div>

            <div className="legal-content">
                <p>Last updated: April 2026</p>

                <h2>1. Information We Collect</h2>
                <p>
                    We collect information you provide directly to us, such as when you
                    fill out a contact form, subscribe to our newsletter, or communicate
                    with us. This may include:
                </p>
                <ul>
                    <li>Name and contact information (email, phone number)</li>
                    <li>Business details and project requirements</li>
                    <li>Communication preferences</li>
                </ul>

                <h2>2. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul>
                    <li>Respond to your inquiries and provide requested services</li>
                    <li>Send project updates and relevant communications</li>
                    <li>Improve our website and services</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2>3. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to
                    protect your personal data against unauthorized access, alteration,
                    disclosure, or destruction.
                </p>

                <h2>4. Data Sharing</h2>
                <p>
                    We do not sell, trade, or rent your personal information to third
                    parties. We may share information only with trusted service providers
                    who assist us in operating our website and conducting our business.
                </p>

                <h2>5. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access your personal data</li>
                    <li>Request correction of your personal data</li>
                    <li>Request deletion of your personal data</li>
                    <li>Withdraw consent at any time</li>
                </ul>

                <h2>6. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact
                    us at{" "}
                    <a href="mailto:contact@aazify.com" style={{ color: "var(--primary-light)" }}>
                        contact@aazify.com
                    </a>
                    .
                </p>
            </div>
        </>
    );
}
