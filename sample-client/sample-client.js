const express = require('express');
const app = express();
const port = 5000;
require('../eureka-helper/eureka-helper').registerWithEureka('sample-client', port)
console.log(`Threats service listening on port ${port}`);

app.get('/', function(req,res) {
    res.send("sample client app")
})

app.listen(port);

