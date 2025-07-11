// next.config.mjs
const isGithubPages = process.env.NODE_ENV === 'production';
const repoName = 'your-repo-name'; // 🔁 replace with your repo name

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // ⬅️ required for static export
  trailingSlash: true,
  basePath: isGithubPages ? `/${repoName}` : '',
  assetPrefix: isGithubPages ? `/${repoName}/` : '',
};

export default nextConfig;
