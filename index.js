var styleSheet = null

var markdownItStyle = function (md, _styleSheet) {
  styleSheet = _styleSheet || {}
  md.core.ruler.push('markdown-it-style', parseBlock)
}

function getStyle (token) {
  return styleSheet[token.tag] || ''
}

function setStyle (token) {
  var style = getStyle(token)
  if (style) {
    if (token.attrGet('style')) {
      style = ';' + style
      token.attrJoin('style', style)
    } else {
      token.attrPush(['style', style])
    }
  }
}

function parseBlock (state) {
  state.tokens.forEach(function (token) {
    if (/_open$/.test(token.type)) {
      setStyle(token)
    }
  })
}

module.exports = markdownItStyle
