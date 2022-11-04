// rewrite environment file for angular frontend project with env variables provided
const { writeFile } = require('fs')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()

const targetFile = path.join(__dirname, '..', 'udagram-frontend', 'src', 'environments', 'environment.ts')

if (!process.env.URL) {
  console.log('please provide URL environmental param pointing to api host')
  process.exit(-1)
}

const content = `
export const environment = {
  production: true,
  appName: 'Udagram Frontend',
  apiHost: '${process.env.URL}'
};
`

writeFile(targetFile, content, function (err) {
  if (err) {
    console.log('Error occured during overriding Environment file', err)
    process.exit(-1)
  }
})