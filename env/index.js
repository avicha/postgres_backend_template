const fs = require('fs')
const path = require('path')

const env = process.env
const NODE_ENV = env.NODE_ENV || 'development'
const envFile = path.join(__dirname, `${NODE_ENV}.env`)

if (fs.existsSync(envFile)) {
  const envContent = fs.readFileSync(envFile, {
    encoding: 'utf8'
  })
  envContent.split('\n').forEach(line => {
    if (line) {
      env[line.split('=')[0]] = line.split('=')[1]
    }
  })
}
module.exports = env