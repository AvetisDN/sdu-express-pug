/*
* Modules import
 */
const express = require('express')
const path = require('path')
const sass = require('node-sass-middleware')

const router = require('./router')
/*
* App Init
 */
const app = express()
const port = process.env.PORT || 8000

/*
* App Config
 */
app.set('view engine', 'pug')
app.use(sass({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public'),
    debug: true,
    outputStyle: 'compressed'
}))
app.use(express.static('public'))
app.use(router)
/*
* Server Ignition
 */
app.listen(port, () => {
    console.log(`App is running at port ${port}`)
})
