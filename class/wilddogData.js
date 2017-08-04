import * as wilddog from 'wilddog';

var config = {
    syncURL: "https://vuetable.wilddogio.com"
}

wilddog.initializeApp(config);

var ref = wilddog.sync().ref();

function wilddogData() {
    this.ref = ref;
}

module.exports = wilddogData;