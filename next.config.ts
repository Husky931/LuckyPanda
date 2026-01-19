// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            // Exclude Node.js modules from client bundle
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
                path: false,
                os: false
            }
            // Mark Node.js modules as external for client builds
            config.externals = config.externals || []
            if (Array.isArray(config.externals)) {
                config.externals.push({
                    fs: "commonjs fs",
                    path: "commonjs path"
                })
            }
        }
        return config
    }
    // async redirects() {
    //     return [
    //         {
    //             source: "/((?!offline).*)",
    //             destination: "/offline",
    //             permanent: false
    //         }
    //     ]
    // }
}

export default nextConfig
