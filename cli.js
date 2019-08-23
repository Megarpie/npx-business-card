#!/usr/bin/env node

const pkg = require('.')
const minimist = require('minimist')

const options = {
  alias: { json: 'j' }
}
const argv = minimist(process.argv.slice(2), options)

console.log(pkg(argv))