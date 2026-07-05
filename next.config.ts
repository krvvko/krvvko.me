import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        // Serve the resume inline so it opens in the browser (new tab)
        // instead of being downloaded as an attachment.
        source: "/Resume.pdf",
        headers: [{ key: "Content-Disposition", value: "inline" }],
      },
    ];
  },
};

export default nextConfig;
