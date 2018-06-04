var pubs = require("../mocks/pubs.json");

function listerPubs() {

  return pubs;

}

function listerPubsOuverte(jour) {
  var res = [];
  pubs.forEach(pub => {
    if(pub.openDays.includes(jour))
    {
      res.push(pub);
    }
    
  });
  return res;
}


module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverte: listerPubsOuverte,
};
