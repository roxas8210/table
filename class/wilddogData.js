var wilddog = require('wilddog');

function wilddogData() {
    this.config = {
        syncURL: "https://vuetable.wilddogio.com"
    };
    this.app = wilddog.initializeApp(this.config);
    this.ref = wilddog.sync().ref('table/company');
}
    // var config = {
    //     syncURL: "https://vuetable.wilddogio.com"
    // };
    // var app = wilddog.initializeApp(this.config);
    // var rootRef = wilddog.sync().ref('table/company');

module.exports = wilddogData;