var AV = require('./leancloud');


function CompanyModel() {

    //构建company表单对象
    var CompanyObj = AV.Object.extend('company');

    //新建company表单对象实例
    this.company = new CompanyObj();
}

//向company表新增数据
CompanyModel.prototype.insertCompany = function(companyObj,success,fail) {
    for( let key in companyObj ) {
        this.company.set(key,companyObj[key]);
    }
    this.company.save().then(success,fail);
}

//删除company表数据
CompanyModel.prototype.destroy = function(id,success,fail) {
    var CompanyWithoutData = AV.Object.createWithoutData('company',id);
    CompanyWithoutData.destroy().then(success,fail);
}

//查询company表全部数据
//返回queryData为全部数据数组
CompanyModel.prototype.query = function(success,fail) {
    var query = new AV.Query('company');
    query.find().then(res => {
        var queryData = new Array();
        res.map((element,index) => {
            element.attributes.objectId = element.id;
            queryData.push(element.attributes);
        });
        success(queryData);
    },fail);
}

//查询company表单的一条数据
CompanyModel.prototype.get = function(id,success,fail) {
    var query = new AV.Query('company');
    query.get(id).then(res => {
        var getData = res.attributes;
        delete(getData.updatedAt);
        success(getData);
    },fail);
}

//更新company表单的一条数据
CompanyModel.prototype.update = function(id,dataObj,success,fail) {
    var companyUpdate = AV.Object.createWithoutData('company',id);
    for( let key in dataObj ) {
        companyUpdate.set(key,dataObj[key]);
    }
    AV.Object.saveAll(companyUpdate).then(success,fail);
}

module.exports = CompanyModel;