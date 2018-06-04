var pubService = require("pub-services").services.pubService;

function getListPub(){
    console.log(pubService.listerPubs());
}


function getListPubOpen(){
    console.log(pubService.listerPubsOuverte());
}


module.exports = {
    getListPub: getListPub,
    getListPubOpen: getListPubOpen,
  };
  