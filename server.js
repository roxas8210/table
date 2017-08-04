var express = require('express');
var Mock = require('mockjs');
var app = express();

var originalRes = Mock.mock({
    "data|100":[{
        "id": '@id',
        "companyName":"@name",
        "logo": "@image",
        "lang": "@name",
        "wap": "@boolean",
        "designBy": "@name",
        "price": "@natural",
        "program": "@boolean",
        "info": "@boolean",
        "uploadtest": "@boolean",
        "testaddress": "@url",
        "upload": "@boolean",
        "webaddress": "@url",
        "createDate": "@date",
        "sales": "@name"
    }]
});

var indexRes = {
    "data": originalRes.data.slice(0,9),
    "count": 100
}

function getPages(obj,page,size) {
    var allPage = obj.length;
    var endPage = parseInt(allPage/9);
    let res = obj.slice(parseInt(page) - 1,parseInt(page) + parseInt(size) - 1);    
    return res;
}

//根路径显示前9条信息
app.all('*',function(req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

app.get('/',function(req,res) {
    res.send(indexRes);
});

app.get('/company',function(req,res) {
    if(req.query.id == undefined ) {
        let pageSize = req.query;
        let result = getPages(originalRes.data,pageSize.page,pageSize.size);
        res.send(result);
    } else{
        let id = req.query.id;
        originalRes.data.map(function(element,index) {
            if(element['id'] == id) {
                res.send(element);
            }
        });
    }
});

app.listen(4040);