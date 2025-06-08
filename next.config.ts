// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    async redirects() {
        return [
            {
                source: "/((?!offline).*)",
                destination: "/offline",
                permanent: false
            }
        ]
    }
}

export default nextConfig
