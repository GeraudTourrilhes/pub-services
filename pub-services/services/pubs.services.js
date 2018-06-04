var pubs = require("../mocks/pubs.json");

function listerPubs() {

  return pubs;

}

function listerPubsOuverte() {
var date_jour=new Date();
var tab_jour=new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var jour = tab_jour[date_jour.getDay()]);
  var res = [];
  pubs.forEach(pub => {
    if(pub.openDays.includes(jour)
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
