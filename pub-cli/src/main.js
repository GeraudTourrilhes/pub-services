var pubService = require("pub-services");

function getListPub(){
    console.log(pubService.getList());
}


function getListPubOpen(){
    console.log(pubService.getListOpen());
}


module.exports = {
    getListPub: getListPub,
    getListPubOpen: getListPubOpen,
  };
  