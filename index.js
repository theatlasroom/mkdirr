const mkdirr = require('./src/mkdirr')

// const targetPath = 'data/some/path'
// mkdirr.make(targetPath)

const fs = require('fs')
const path = require('path')

function exists(target){
  return fs.existsSync(target);
}

function create(target){
  fs.mkdirSync(target);
}

function build(targetPath){
  if (!targetPath && targetPath.length) throw Error(`No path supplied ie 'some/example/path'`)
  const chunks = targetPath ? String(targetPath).split(path.sep) : []
  if (chunks.length < 2){
    create(chunks[0])
    return;
  }

  let p = (path.isAbsolute(targetPath)) ? path.sep : '';


  while (chunks && chunks.length){
    c = chunks.shift()
    p = path.join(p, c);
    if (!exists(p)) create(p)
  }
}

module.exports = {
  build
}
