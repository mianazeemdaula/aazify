import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms & Conditions",
    description: "Aazify Terms & Conditions — by using our services, you agree to our terms and guidelines.",
};

export default function TermsPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Legal</div>
                <h1 className="section-title">
                    Terms & <span>Conditions</span>
                </h1>
                <p className="section-sub">
                    By using our services, you agree to our terms and guidelines.
                </p>
            </div>

            <div className="legal-content">
                <p>Last updated: April 2026</p>

                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing and using the Aazify website and services, you accept
                    and agree to be bound by the terms and provisions of this agreement.
                    If you do not agree, please do not use our services.
                </p>

                <h2>2. Services</h2>
                <p>
                    Aazify provides custom software development, web and mobile
                    application development, business automation, and AI solutions. The
                    specific scope, timeline, and deliverables for each project will be
                    outlined in a separate project agreement.
                </p>

                <h2>3. Intellectual Property</h2>
                <p>
                    All intellectual property rights for custom projects will be
                    transferred to the client upon full payment, unless otherwise stated
                    in the project agreement. Aazify retains the right to use project
                    screenshots and descriptions in its portfolio.
                </p>

                <h2>4. Payment Terms</h2>
                <p>
                    Payment terms will be defined in individual project agreements.
                    Standard terms include milestone-based payments. Late payments may
                    result in project delays.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                    Aazify shall not be liable for any indirect, incidental, special, or
                    consequential damages resulting from the use or inability to use our
                    services. Our total liability shall not exceed the amount paid by the
                    client for the specific service in question.
                </p>

                <h2>6. Confidentiality</h2>
                <p>
                    Both parties agree to maintain the confidentiality of proprietary
                    information shared during the course of the project. This obligation
                    continues after the termination of services.
                </p>

                <h2>7. Termination</h2>
                <p>
                    Either party may terminate the service agreement with written notice.
                    The client remains responsible for payment for work completed up to
                    the date of termination.
                </p>

                <h2>8. Changes to Terms</h2>
                <p>
                    Aazify reserves the right to modify these terms at any time. Changes
                    will be posted on this page with an updated date.
                </p>

                <h2>9. Contact</h2>
                <p>
                    For questions about these terms, contact us at{" "}
                    <a href="mailto:contact@aazify.com" style={{ color: "var(--primary-light)" }}>
                        contact@aazify.com
                    </a>
                    .
                </p>
            </div>
        </>
    );
}
