/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI: "mongodb+srv://sparshgoel:helloworld@movieapp.indvg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    JWT_SECRET: "fasjlfkffjslkdfj",
    API_KEY: "60dbf630"
  }
}

module.exports = nextConfig
