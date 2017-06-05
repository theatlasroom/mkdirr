const tape = require('tape')
const fs = require('fs')
const testDir = './data'

const mkdirr = require('./src/mkdirr')
const flat = 'flat'
const nested  = 'nested/some/path'

function exists(path){ return fs.existsSync(path) }
function cleanup(){
  [flat, nested].forEach((p) => {
    if (exists(p)) fs.rmdirSync(p)
  })
}

cleanup()

tape('error if there is no path specified', (t) => {
  t.notOk(exists(flat))
  mkdirr.build(flat)
  t.ok(exists(flat))
  t.end()

  cleanup()
})

tape('create a single directory', (t) => {
  t.notOk(exists(nested))
  mkdirr.build(nested)
  t.ok(exists(nested))
  t.end()

  cleanup()
});
