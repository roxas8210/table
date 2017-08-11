var APP_ID = 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz';
var APP_KEY = '8JzRYWYugrTDC4phdOPCqhB3';
var AV = require('leancloud-storage');

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

module.exports = AV;