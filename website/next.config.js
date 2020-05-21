const nextEnv = require('next-env')
const withPWA = require('next-pwa')
const dotenvLoad = require('dotenv-load')
const path = require('path')

dotenvLoad()
 
const withNextEnv = nextEnv()

module.exports = withNextEnv({
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    },
    config.resolve.modules.push(path.resolve('./'))
    
    return config
  },
  env: {
    API_URL: process.env.API_URL
  }
})
