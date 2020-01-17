const express = require('express')
const app = express()
const port = 3000

let data = {
    id: null,
    valid: false,
    object: {}
}


// express configuration
app.use(express.json({type: '*/*'}));

// Set your routes
app.get('/', (req, res) => res.send('Hello World!'))

app.get('/:id', function (req, res) {
    let response = {
        success: true,
        error: "",
        message: ""
    }
    if(req.params.id != null || response.params.id != undefined){
        if(data.valid == true && req.params.id == data.id){
            data.valid = false;
            res.send(`${JSON.stringify(data.object)}\n`);
        } else {
            response.success = false;
            response.error = 404;
            response.message = "Not Found"
            res.send(`${JSON.stringify(response)}\n`);
        }
    }
});

app.post('/', function (req, res) {
    
    res.send(`Received object. ${JSON.stringify(req.body)}\n`);
});

app.post('/share', function(req, res){
    let response = {
        success: false,
        link: ""
    }
    data.id = "onetimeshare"
    data.valid = true;
    data.object = req.body;
    response.success = true;
    response.link = "http://localhost:3000/" + data.id;
    res.send(` ${JSON.stringify(response)}\n`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))