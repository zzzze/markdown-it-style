markdown-it-style
====

This is a plugin for the [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.
It can add style to the result html elements.

Install
---
```
npm install markdown-it-style --save-dev
```
or, if using yarn
```
yarn add -D markdown-it-style
```

Use
---
```
var Markdown = require('markdown-it')
var markdowStyle = require('markdown-it-style)
var md = new Markdown()
md.use(markdownStyle, {
  'h1': 'font-size:18px;color:red'
})
md.render('# hello world')  // ===> <h1 style="font-size:18px;color:red">hello world<h1>
```
