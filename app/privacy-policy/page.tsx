const PrivacyPolicy = () => {
    return (
        <div className="mx-auto max-w-4xl px-4 py-8">
            <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
            <p className="mb-6 text-gray-600">
                Last Updated: {new Date().toLocaleDateString()}
            </p>

            <div className="prose max-w-none">
                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        1. Introduction
                    </h2>
                    <p className="mb-4">
                        Welcome to SnackBox Delights (&quot;we,&quot;
                        &quot;our,&quot; or &quot;us&quot;). We are committed to
                        protecting your privacy and ensuring the security of
                        your personal information. This Privacy Policy explains
                        how we collect, use, disclose, and safeguard your
                        information when you visit our website or subscribe to
                        our snack box service.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        2. Information We Collect
                    </h2>
                    <p className="mb-4">
                        We may collect the following types of information:
                    </p>
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                        <li>
                            <strong>Personal Information:</strong> Name, email
                            address, phone number, shipping address, and payment
                            information when you create an account or place an
                            order.
                        </li>
                        <li>
                            <strong>Subscription Preferences:</strong> Your
                            snack preferences, dietary restrictions, and
                            subscription frequency.
                        </li>
                        <li>
                            <strong>Usage Data:</strong> Information about how
                            you interact with our website, including IP address,
                            browser type, pages visited, and time spent on
                            pages.
                        </li>
                        <li>
                            <strong>Customer Support:</strong> Records of your
                            communications with our customer service team.
                        </li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        3. How We Use Your Information
                    </h2>
                    <p className="mb-4">
                        We use the information we collect for the following
                        purposes:
                    </p>
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                        <li>
                            To process and fulfill your snack box subscriptions
                        </li>
                        <li>
                            To personalize your snack selections based on your
                            preferences
                        </li>
                        <li>
                            To communicate with you about your account, orders,
                            and promotions
                        </li>
                        <li>To improve our website, products, and services</li>
                        <li>To prevent fraud and enhance security</li>
                        <li>To comply with legal obligations</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        4. Sharing of Information
                    </h2>
                    <p className="mb-4">We may share your information with:</p>
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                        <li>
                            <strong>Service Providers:</strong> Third parties
                            who help us operate our business (e.g., payment
                            processors, shipping carriers, IT services).
                        </li>
                        <li>
                            <strong>Business Partners:</strong> Snack brands
                            included in your boxes (only with your consent for
                            specific promotions).
                        </li>
                        <li>
                            <strong>Legal Requirements:</strong> When required
                            by law or to protect our rights.
                        </li>
                    </ul>
                    <p>
                        We never sell your personal information to third
                        parties.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        5. Data Security
                    </h2>
                    <p className="mb-4">
                        We implement appropriate technical and organizational
                        measures to protect your personal information. This
                        includes encryption, secure servers, and limited access
                        to your data. However, no method of transmission over
                        the Internet is 100% secure.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        6. Your Rights
                    </h2>
                    <p className="mb-4">
                        Depending on your location, you may have the right to:
                    </p>
                    <ul className="mb-4 list-disc space-y-2 pl-6">
                        <li>
                            Access, correct, or delete your personal information
                        </li>
                        <li>Object to or restrict processing of your data</li>
                        <li>Withdraw consent (where applicable)</li>
                        <li>Receive your data in a portable format</li>
                    </ul>
                    <p>
                        To exercise these rights, please contact us at
                        privacy@snackboxdelights.com.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        7. Cookies and Tracking
                    </h2>
                    <p className="mb-4">
                        We use cookies and similar technologies to enhance your
                        browsing experience, analyze site traffic, and
                        personalize content. You can manage your cookie
                        preferences through your browser settings.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        8. Children&apos;s Privacy
                    </h2>
                    <p className="mb-4">
                        Our services are not directed to children under 13. We
                        do not knowingly collect personal information from
                        children under 13. If we become aware of such
                        collection, we will take steps to delete the
                        information.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="mb-4 text-xl font-semibold">
                        9. Changes to This Policy
                    </h2>
                    <p className="mb-4">
                        We may update this Privacy Policy periodically. We will
                        notify you of significant changes by posting the new
                        policy on our website and updating the &quot;Last
                        Updated&quot; date.
                    </p>
                </section>

                <section>
                    <h2 className="mb-4 text-xl font-semibold">
                        10. Contact Us
                    </h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy,
                        please contact us at:
                    </p>
                    <address className="not-italic">
                        SnackBox Delights
                        <br />
                        Attn: Privacy Officer
                        <br />
                        123 Snack Street
                        <br />
                        Foodville, FC 12345
                        <br />
                        Email: privacy@snackboxdelights.com
                        <br />
                        Phone: (123) 456-7890
                    </address>
                </section>
            </div>
        </div>
    )
}

export default PrivacyPolicy
