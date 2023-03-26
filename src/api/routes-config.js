const express = require('express')
const {urlencoded} = require('body-parser')

const userRoutes = require('./routes')


module.exports = app => {
  app.use(urlencoded({extended: false}))
  app.use(express.json())

  app.use(userRoutes)

}