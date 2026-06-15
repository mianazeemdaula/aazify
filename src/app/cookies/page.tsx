import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cookies Policy",
    description: "Aazify Cookies Policy — how we use cookies to improve your browsing experience.",
    alternates: {
        canonical: "https://aazify.com/cookies",
    },
};

export default function CookiesPage() {
    return (
        <>
            <div className="page-header">
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />
                <div className="section-tag">Legal</div>
                <h1 className="section-title">
                    Cookies <span>Policy</span>
                </h1>
                <p className="section-sub">
                    We use cookies to improve your browsing experience.
                </p>
            </div>

            <div className="legal-content">
                <p>Last updated: April 2026</p>

                <h2>1. What Are Cookies</h2>
                <p>
                    Cookies are small text files stored on your device when you visit a
                    website. They help websites remember your preferences and improve
                    your browsing experience.
                </p>

                <h2>2. How We Use Cookies</h2>
                <p>We use cookies for the following purposes:</p>
                <ul>
                    <li>
                        <strong>Essential Cookies:</strong> Required for the website to
                        function properly, such as navigation and access to secure areas.
                    </li>
                    <li>
                        <strong>Analytics Cookies:</strong> Help us understand how visitors
                        interact with our website so we can improve the user experience.
                    </li>
                    <li>
                        <strong>Preference Cookies:</strong> Remember your settings and
                        preferences for a better experience on return visits.
                    </li>
                </ul>

                <h2>3. Third-Party Cookies</h2>
                <p>
                    Some cookies may be placed by third-party services we use, such as
                    analytics providers. These third parties have their own privacy
                    policies.
                </p>

                <h2>4. Managing Cookies</h2>
                <p>
                    You can control and manage cookies through your browser settings.
                    Most browsers allow you to refuse cookies or delete existing cookies.
                    Please note that disabling cookies may affect the functionality of
                    our website.
                </p>

                <h2>5. Contact</h2>
                <p>
                    If you have any questions about our use of cookies, please contact us
                    at{" "}
                    <a href="mailto:contact@aazify.com" style={{ color: "var(--primary-light)" }}>
                        contact@aazify.com
                    </a>
                    .
                </p>
            </div>
        </>
    );
}
