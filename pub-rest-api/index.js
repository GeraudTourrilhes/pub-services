const express = require('express');
const pubService = require('pub-services').services.pubService;
const app = express();

app.get('/pubs', function (req, res) {
    const pubs = pubService.listerPubs();
    
    res.status(200);
    res.end(JSON.stringify(pubs));
    
})

app.get('/pubs/opened', function (req, res) {
    const pubs = pubService.listerPubsOuverte();
    
    res.status(200);
    res.end(JSON.stringify(pubs));
    
})
app.listen(3000);