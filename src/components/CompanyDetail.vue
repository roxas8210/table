<template>
<div class="details-container">
    <el-form ref="form" :model="form" label-width="80px" label-position="left">
        <div class="title">
            <i class="el-icon-document"></i>
            <span>公司详情</span>
        </div>
        <el-form-item label="公司名称">
            <el-input v-model="form.companyName"></el-input>
        </el-form-item>
        <el-form-item label="业务员">
            <el-input v-model="form.sales"></el-input>
        </el-form-item>
        <el-form-item label="下单日期">
            <el-col :span="20">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.createDate" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="手机站">
            <el-switch on-text="" off-text="" v-model="form.wap"></el-switch>
        </el-form-item>
        <el-form-item label="语言版本">
            <el-input v-model="form.lang"></el-input>
        </el-form-item>
        <el-form-item label="设计师">
            <el-input v-model="form.designBy"></el-input>
        </el-form-item>
        <el-form-item label="价钱">
            <el-input v-model="form.price">
                 <template slot="append">元</template> 
            </el-input>
        </el-form-item>
        <el-form-item label="测试网址">
            <el-input v-model="form.testaddress"></el-input>
        </el-form-item>
        <el-form-item label="正式网址">
            <el-input v-model="form.webaddress">
                <template slot="prepend">http://</template>
            </el-input>
        </el-form-item>
    
        <div class="title">
            <i class="el-icon-document"></i>
            <span>完成情况</span>
        </div>
        <el-form-item label="程序">
            <el-switch @change="program" on-color="#13ce66" off-color="#ff4949" v-model="form.program"></el-switch>
        </el-form-item>
        <el-form-item label="资料">
            <el-switch on-color="#13ce66" off-color="#ff4949" v-model="form.info"></el-switch>
        </el-form-item>
        <el-form-item label="上传测试">
            <el-switch on-color="#13ce66" off-color="#ff4949" v-model="form.uploadtest"></el-switch>
        </el-form-item>
    
        <el-form-item label="上传正式">
            <el-switch on-color="#13ce66" off-color="#ff4949" v-model="form.upload"></el-switch>
        </el-form-item>
        
        <el-form-item label="完成日期">
            <el-col :span="20">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.finishDate" style="width: 100%;"></el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
    <div class="uploadThumb">
        <label for="inputFile" class="sr-only">上传图片</label>
        <input type="file" id="inputFile" v-on:change="onUpload" class="form-control" placeholder="文件" required>
        <img :src="form.logo">
    </div>
</div>
</template>
<script>
import axios from 'axios'
import company from '../../class/company'
import AV from '../../class/leancloud'
import CompanyModel from '../../class/CompanyModel'

export default {
    name: 'CompanyDetail',
    data: function () {
        return {
            form: {},
            fileList: [],
            companyKey: "",
            newCompany: true,
            headers: {
                'X-LC-Id': 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz',
                'X-LC-Key': '8JzRYWYugrTDC4phdOPCqhB3'
            },
            thumb: ""
        }
    },
    methods: {
        onSubmit() {
            var company = new CompanyModel();
            if(!this.newCompany) {
                console.log('submit!');
                console.log(this.form);
                this.form['price'] = parseInt(this.form['price']);
                company.update(this.companyKey,this.form, res => {
                    console.log(res);
                    if(res.updatedAt) {
                        alert('更新成功');
                        this.$router.push('/');
                    }
                });
            } else{
                console.log(this.form);
                this.form['price'] = parseInt(this.form['price']);
                company.insertCompany(this.form, res => {
                    console.log(res);
                    alert('创建成功');
                    this.$router.push('/');
                });
            }
        },
        handlePreview() {

        },
        handleRemove() {

        },
        program(event) {
            console.log(this.form);
        },
        onUpload(event) {
            let file = event.target.files[0];
            let name = file.name;
            let avFile = new AV.File(name,file);
            avFile.save().then( res => {
                console.log(res);
                this.form.logo = res.attributes.url;
                if(res.id) {
                    alert('上传成功');
                }
            });
        }
    },
    mounted: function () {
        if (this.$route.query.key != undefined) {
            this.companyKey = this.$route.query.key;
            this.newCompany = false;
            var company = new CompanyModel();
            company.get(this.companyKey, res => {
                console.log(res);
                this.form = res;
            });
        } else {
            let newForm = new company();
            this.form = newForm;
        }
    }
}
</script>
<style>
.title {
    width: 100%;
    height: auto;
    overflow: hidden;
    border-bottom: 1px solid #888888;
    padding: 10px;
    margin-bottom: 20px;
}

.title span {
    font-size: 18px;
    line-height: 36px;
    vertical-align: middle;
}
.thumb .el-upload{
    width: 100px;
    text-align: left;
}
.el-upload input{
    display: none;
}
.el-input{
    width: 230px;
}
.el-form{
    max-width: 50%;
    float: left;
}
.uploadThumb{
    width: 50%;
    height: auto;
    overflow: hidden;
    float: right;
}
.uploadThumb img{
    margin-top: 20px;
    width: 100%;
}
</style>


