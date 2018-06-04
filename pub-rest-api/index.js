const express = require('express');
const pubService = require('pub-services');
const app = express();

app.get('/pubs', function (req, res) {
    const pubs = pubService.getList();
    
    res.status(200);
    res.end(JSON.stringify(pubs));
    
})

app.get('/pubs/opened', function (req, res) {
    const pubs = pubService.getListOpen();
    
    res.status(200);
    res.end(JSON.stringify(pubs));
    
})
app.listen(3000);