const express = require('express');
const router = express.Router();
const app = express();
const port = 5000;
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use("/", router);

require('../eureka-helper/eureka-helper').registerWithEureka('sample-client', port)
console.log(`sample client service listening on port ${port}`);

router.get('/hello', (req,res) => {
    res.status(200).send("sample client app")
});

router.post('/hello/post', (req, res) => {
    const {body} = req
    console.log('body', body)
    res.status(201).send(`hello ${JSON.stringify(body)}`)
})

app.listen(port, ()=> {
    console.log(`Started on port ${port}`);
});

