const mkdirr = require('./src/mkdirr')
const path = require('path')

const targetPath = 'data/some/path'
mkdirr.make(targetPath)
