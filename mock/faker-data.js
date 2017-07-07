module.exports = function () {
 var faker = require("faker");
 faker.locale = "zh_CN";
 var _ = require("lodash");
 return {
     people: _.times(50, function (n) {
         return {
             id: n,
             companyName: faker.company.companyName(),
             lang: faker.name.findName(),
             wap: faker.random.boolean(),
             designBy: faker.name.findName(),
             price: faker.commerce.price(),
             program: faker.random.boolean(),
             info: faker.random.boolean(),
             uploadtest: faker.random.boolean(),
             testaddress: faker.internet.avatar(),
             upload: faker.random.boolean(),
             webaddress: faker.internet.avatar()
         }
     }),
     address: _.times(100, function (n) {
         return {
             id: faker.random.uuid(),
             city: faker.address.city(),
             county: faker.address.county()
         }
     })
 }
}