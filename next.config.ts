import { NextConfig } from 'next'

const config: NextConfig = {
  images: { remotePatterns: [new URL('https://raw.githubusercontent.com/**')] }
}

export default config
