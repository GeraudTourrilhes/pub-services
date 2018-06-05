"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listerPubs = listerPubs;
exports.listerPubsOuverte = listerPubsOuverte;

var _Pub = require("../entite/Pub.js");

var Pub = _interopRequireWildcard(_Pub);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var pubsJSON = require("../../mocks/pubs.json");
function listerPubs() {

  var pubs = [];
  pubsJSON.forEach(function (pub) {

    pubs.push(new Pub.Pub(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers));
  });

  return pubs;
}

function listerPubsOuverte() {
  var date_jour = new Date();
  var tab_jour = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
  var jour = tab_jour[date_jour.getDay()];
  var res = [];
  pubsJSON.forEach(function (pub) {
    if (pub.openDays.includes(jour)) {
      res.push(new Pub.Pub(pub.name, pub.owner.firstName, pub.owner.lastName, pub.owner.mail, pub.openDays, pub.openHours.start, pub.openHours.end, pub.beers));
    }
  });
  return res;
}