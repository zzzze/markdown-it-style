'use strict'
var should = require('should')
var MarkdownIt = require('markdown-it')
var markdownItStyle = require('../')

describe('markdown-it-style', function () {
  it('should add style to the element if the style of the tag is defined', function () {
    var md = new MarkdownIt()
    var styleSheet = {
      'h1': 'color:red'
    }
    md.use(markdownItStyle, styleSheet)
    md.render('# test').should.containEql('<h1 style="color:red">test</h1>')
  })

  it('should not add style to the element if the style of the tag is not defined', function () {
    var md = new MarkdownIt()
    var styleSheet = {}
    md.use(markdownItStyle, styleSheet)
    md.render('# test').should.containEql('<h1>test</h1>')
  })

  it('should add append after style text of the element if its style has been setted', function () {
    var md = new MarkdownIt()
    var styleSheet = {
      'th': 'color:red'
    }
    var markdownText = 
`
| 水果 | 价格 | 数量 |
| --- | --: | :--: |
`
    md.use(markdownItStyle, styleSheet)
    md.render(markdownText).should.containEql('<table>\n<thead>\n<tr>\n<th style="color:red">水果</th>\n' + 
    '<th style="text-align:right ;color:red">价格</th>\n<th style="text-align:center ;color:red">数量</th>\n' + 
    '</tr>\n</thead>\n<tbody></tbody>\n</table>\n')
  })
})
