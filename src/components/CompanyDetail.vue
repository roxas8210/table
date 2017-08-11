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
            <el-col :span="10">
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
            <el-col :span="10">
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
        <el-button type="primary" @click="onUpload">上传</el-button>
    </div>
</div>
</template>
<script>
import axios from 'axios'
import company from '../../class/company'
import AV from '../../class/leancloud'

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
            }
        }
    },
    methods: {
        onSubmit() {
            if(!this.newCompany) {
                console.log('submit!');
                console.log(this.form);
                this.form['price'] = parseInt(this.form['price']);
                axios({
                    method: 'put',
                    url: `https://api.leancloud.cn/1.1/classes/company/${this.companyKey}`,
                    headers: {
                        'X-LC-Id': 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz',
                        'X-LC-Key': '8JzRYWYugrTDC4phdOPCqhB3',
                        'Content-Type': 'application/json'
                    },
                    data: this.form
                }).then( res => {
                    console.log(res);
                    this.$router.push('/');
                });
            } else{
                console.log(this.form);
                this.form['price'] = parseInt(this.form['price']);
                axios({
                    method: 'post',
                    url: 'https://api.leancloud.cn/1.1/classes/company',
                    headers: {
                        'X-LC-Id': 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz',
                        'X-LC-Key': '8JzRYWYugrTDC4phdOPCqhB3',
                        'Content-Type': 'application/json'
                    },
                    data: this.form
                }).then( res => {
                    if(res.statusText == 'Created') {
                        alert('创建成功');
                        this.$router.push('/');
                    }
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
            console.log(avFile);
        }
    },
    mounted: function () {
        if (this.$route.query.key != undefined) {
            this.companyKey = this.$route.query.key;
            this.newCompany = false;
            axios({
                method: 'get',
                url: `https://api.leancloud.cn/1.1/classes/company/${this.companyKey}`,
                headers: {
                    'X-LC-Id': 'qGOBof4CmqXzgG91fjM6d1TJ-gzGzoHsz',
                    'X-LC-Key': '8JzRYWYugrTDC4phdOPCqhB3',
                },
            }).then( res => {
                console.log(res);
                this.form = res.data;
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
</style>


