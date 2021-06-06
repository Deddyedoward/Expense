import express from 'express'

// import config server
import expressConfig from './bootstrap/express.js'
import serverStart from './bootstrap/server.js'
import configApp from './config/app.js'

const app = express()

// express.js configuration (middlewares etc.)
expressConfig(app)

// express.js start and listening port
serverStart(app, configApp)