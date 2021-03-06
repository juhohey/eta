/* global it, expect, describe */

import { compile } from '../src/index'
var fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, 'templates/complex.eta')

const complexTemplate = fs.readFileSync(filePath, 'utf8')

describe('Compile test', () => {
  it('parses a simple template', () => {
    var str = compile('hi <%= hey %>')
    expect(str).toBeTruthy()
  })

  it('works with plain string templates', () => {
    var str = compile('hi this is a template')
    expect(str).toBeTruthy()
  })

  // TODO: Update
  it('compiles complex template', () => {
    var str = compile(complexTemplate)
    expect(str).toBeTruthy()
  })

  test('throws with bad inner JS syntax', () => {
    expect(() => {
      compile('<% hi (=h) %>')
    }).toThrow()
  })
})
