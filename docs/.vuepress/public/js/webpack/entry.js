entry: '../app.js'

entry: ['../index.js', '../main.js']

entry: {
  app: '../app.js',
  web: '../web.js'
},

entry: () => './app.js'

entry: () => new Promise((res) => {res('./app.js')})