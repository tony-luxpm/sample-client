const express = require('express');
const router = express.Router();
const app = express();
const port = 5000;
app.use("/", router);
app.use(express.urlencoded({ extended: false}));
app.use(express.json);


require('../eureka-helper/eureka-helper').registerWithEureka('sample-client', port)
console.log(`sample client service listening on port ${port}`);

router.get('/hello', (req,res) => {
    res.status(200).send("sample client app")
});

router.post('/hello/post', (req, res) => {
    res.status(201).send(`hello ${req.body}`)
})

app.listen(port, ()=> {
    console.log(`Started on port ${port}`);
});

