import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

if (process.env.NEXT_PUBLIC_TEMPO) {
  nextConfig["experimental"] = {
    // NextJS 13.4.8 up to 14.1.3:
    swcPlugins: [
      [require.resolve("tempo-devtools/swc/0.86"), {}],
      [require.resolve("tempo-devtools/swc/0.90"), {}]
    ]

    // NextJS 15+ (Not yet supported, coming soon)
  };
}

export default nextConfig;

