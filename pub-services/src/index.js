import * as pubService from "./services/pubs.services";


console.log(pubService.listerPubs());
console.log(pubService.listerPubsOuverte());


module.exports = {
    services:{
        pubService: pubService
    }
  };
  

