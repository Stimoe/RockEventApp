var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var Carte = (function () {
    function Carte() {
    }
    Carte = __decorate([
        core_1.Component({
            selector: 'carte',
            template: "  \n<div class=\"card\">\n    <div class=\"card-image waves-effect waves-block waves-light\">\n      <img class=\"activator\" src=\"images/office.jpg\">\n    </div>\n    <div class=\"card-content\">\n      <span class=\"card-title activator grey-text text-darken-4\">Card Title<i class=\"material-icons right\">more_vert</i></span>\n      <p><a href=\"#\">This is a link</a></p>\n    </div>\n    <div class=\"card-reveal\">\n      <span class=\"card-title grey-text text-darken-4\">Card Title<i class=\"material-icons right\">close</i></span>\n      <p>Here is some more information about this product that is only revealed once clicked on.</p>\n    </div>\n  </div>\n            "
        }), 
        __metadata('design:paramtypes', [])
    ], Carte);
    return Carte;
})();
exports.Carte = Carte;
//# sourceMappingURL=Carte.js.map