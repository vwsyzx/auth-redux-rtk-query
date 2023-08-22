const express = require('express')
const func = require('../func/func')

const route = express()

route.post('/regis', (req, res) => func.regis(req, res))
route.post('/login', (req, res) => func.login(req, res))
route.get('/refresh', (req, res) => func.refresh(req, res))

module.exports = route