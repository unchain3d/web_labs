var express = require('express');
var fs = require("fs");


var app = express();
app.use(express.json());
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});


app.get('/listChainsaws', function (req, res) {
    fs.readFile( __dirname + "/chainsaws.json", 'utf8', function (err, data) {
        console.log( data );
        res.send(JSON.parse(data));
    });
})


app.post('/addChainsaw', function (req, res) {
    fs.readFile( __dirname + "/chainsaws.json", 'utf8', function (err, data) {
        var chainsaws = JSON.parse(data);
        var newChainsaw = req.body;
        chainsaws.push(newChainsaw);
        fs.writeFile(__dirname + "/chainsaws.json", JSON.stringify(chainsaws), (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
        console.log(newChainsaw);
        res.end(newChainsaw);
    });
})


app.get('/:id', function (req, res) {
    fs.readFile( __dirname + "/chainsaws.json", 'utf8', function (err, data) {
        var chainsaws = JSON.parse(data);
        var chainsaw = chainsaws[req.params.id - 1];
        console.log( chainsaw );
        res.end(chainsaw);
    });
})

app.delete('/deleteChainsaw/:id', function (req, res) {
    fs.readFile( __dirname + "/chainsaws.json", 'utf8', function (err, data) {
        data = JSON.parse( data );
        delete data[req.params.id - 1];

        console.log( data );
        res.end(data);
    });
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})