const tape = require('tape')
const fs = require('fs')

const mkdirr = require('./index')
const flat = 'flat'

function exists (path) { return fs.existsSync(path) }
function cleanup (path) {
  fs.rmdirSync(path)
}

tape('exports a single function', (t) => {
  t.equals(typeof mkdirr.build, 'function')
  t.end()
});

tape('create a single dir', (t) => {
  t.notOk(exists(flat))
  mkdirr.build(flat)
  t.ok(exists(flat))
  cleanup(flat)
  t.end()
})

tape('create a single directory', (t) => {
  const nested = 'nested/some/path'
  t.notOk(exists(nested))
  mkdirr.build(nested)
  t.ok(exists(nested))
  // TODO: recursive rmdir 😂
  cleanup('nested/some/path')
  cleanup('nested/some')
  cleanup('nested')
  t.end()
})
