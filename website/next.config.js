const nextEnv = require('next-env')
const dotenvLoad = require('dotenv-load')
const path = require('path')

dotenvLoad()
 
const withNextEnv = nextEnv()

module.exports = withNextEnv({
  env: {
    API_URL: process.env.API_URL
  },
  webpack: (config) => {
    config.node = {
      fs: 'empty',
    },
    config.resolve.modules.push(path.resolve('./'))
    
    return config
  }
})
