"use client"
import Script from "next/script"

const GoogleAnalytics = ({ gaTrackingId }: { gaTrackingId: string }) => {
    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
                strategy="lazyOnload"
            />

            <Script id="google-analytics" strategy="lazyOnload">
                {`
        window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

        const isInternal = document.cookie.includes('lpt_internal=1');

        if (isInternal) {
            gtag('set', 'user_properties', { internal_user: '1' });
        }

        gtag('config', '${gaTrackingId}', {
          page_path: window.location.pathname,
        });
        `}
            </Script>
        </>
    )
}

export default GoogleAnalytics
