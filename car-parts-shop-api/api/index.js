const express = require('express')
const router = express.Router()

require('./routes/user')(router)
require('./routes/carPart')(router)

module.exports = router