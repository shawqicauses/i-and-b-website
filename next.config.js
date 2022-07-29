const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      ["images", ["ctf", "assets"].join(""), "net"].join(".")
    ]
  }
}

module.exports = nextConfig
