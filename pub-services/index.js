var pubService = require("./services/pubs.services");

function getListPubs()
{
    console.log(pubService.listerPubs());
}

function getListPubsOpen()
{
    console.log(pubService.listerPubsOuverte());
}

module.exports = {
    services:{
        pubService: pubService
    }
  };
  

