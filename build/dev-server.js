require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
  // automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
  // Define HTTP proxies to your custom API backend
  // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
  })
  // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function(context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})



var appData = require('../db.json')
var check_in = appData.check_in
var case_list = appData.case_list

var apiRoutes = express.Router()
// apiRoutes.get('/check_in', function(req, res) {

//   res.json({
//     data: check_in
//   })
// })

apiRoutes.get('/case_list', function(req, res) {
  var page_size = parseInt(req.query.page_size) || 5
  var page = parseInt(req.query.page) || 1 
  var key = req.query.key
  var select = req.query.select

  var index = (page-1) * page_size;

  var result = case_list.slice(index, index+page_size)

    console.log(result)
  res.json({
    data: result,
    page_index: page,
    total: case_list.length
  })
})

app.use('/api', apiRoutes)

// var apiServer = express()
// var bodyParser = require('body-parser')
// apiServer.use(bodyParser.urlencoded({ extended: true }))
// apiServer.use(bodyParser.json())
// var apiRouter = express.Router()
// var fs = require('fs')
// apiRouter.route('/:apiName')
//   .all(function(req, res) {
//     console.log(req)
//     fs.readFile('./db.json', 'utf-8', function(err, data) {
//       if (err) {
//         throw err
//       }
//       var data = JSON.parse(data)
//       if (data[req.params.apiName]) {
//         res.json(data[req.params.apiName])
//       } else {
//         res.send('no souch api name')
//       }
//     })
//   })
// apiServer.use('/api', apiRouter)
// apiServer.listen(port + 1, function(err) {
//   if (err) {
//     console.log(err)
//     return
//   }
//   console.log('Listening at http://localhost:' + (port + 1) + '\n')
// })



var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}