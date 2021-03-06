/* global it, expect, describe */
import * as Eta from '../src/index'
import { EtaConfig } from '../src/config'
import { AstObject } from '../src/parse'

function myPlugin () {
  return {
    processAST: function (ast: Array<AstObject>, env?: EtaConfig) {
      ast.push('String to append')
      return ast
    },
    processFnString: function (str: string, env?: EtaConfig) {
      return str.replace(/@@num@@/, '2352.3')
    }
  }
}

var template = `<%= it.val %> <%= @@num@@ %>.`

describe('Plugins', () => {
  it('Plugins function properly', () => {
    expect(Eta.render(template, { val: 'value' }, { plugins: [myPlugin()] })).toEqual(
      'value 2352.3.String to append'
    )
  })
})
