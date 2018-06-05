"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pub = exports.Pub = function () {
    function Pub(name, firstName, lastName, mail, openDays, start, end, beers) {
        _classCallCheck(this, Pub);

        this.name = name;
        this.owner(firstName, lastName, mail);
        this.openDays = openDays;
        this.openHours(start, end);
        this.beers = beers;
    }

    _createClass(Pub, [{
        key: "owner",
        value: function owner(firstName, lastName, mail) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.mail = mail;
        }
    }, {
        key: "openHours",
        value: function openHours(start, end) {
            this.start = start;
            this.end = end;
        }
    }]);

    return Pub;
}();