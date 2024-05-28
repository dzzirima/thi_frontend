/** @type {import('next').NextConfig} */
const nextConfig = {
        eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
        typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },

};

export default nextConfig;


// const API_URL = process.env.API_URL;
// /** @type {import('next').NextConfig} */


// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "images.pexels.com",
//         },
//       ],
//     },
//     eslint: {
//       // Warning: This allows production builds to successfully complete even if
//       // your project has ESLint errors.
//       ignoreDuringBuilds: true,
//     },
//     typescript: {
//       // !! WARN !!
//       // Dangerously allow production builds to successfully complete even if
//       // your project has type errors.
//       // !! WARN !!
//       ignoreBuildErrors: true,
//     },
    




//     // reactStrictMode: true,
//     // async rewrites() {
//     //   return [
//     //     {
//     //       source: "/api/:path*",
//     //       destination: `⁠${API_URL}/:path*`,
//     //     },
//     //   ];
//     // },
  
  
// };


  
//   module.exports = nextConfig;
  


