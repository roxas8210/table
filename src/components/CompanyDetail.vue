<template>
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
        <el-form-item label="缩图" class="thumb">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import axios from 'axios'
import company from '../../class/company'
// import Message from 'element-ui'

export default {
    name: 'CompanyDetail',
    data: function () {
        return {
            form: {},
            fileList: [],
            companyKey: "",
            newCompany: true
        }
    },
    methods: {
        onSubmit() {
            if(!this.newCompany) {
                console.log('submit!');
                axios.put(`https://vuetable.wilddogio.com/table/company/${this.companyKey}.json`,
                    this.form
                ).then( res => {
                    console.log(res);
                    if( res.status == 200 ) {
                        this.$router.push('/');
                    }
                });
            } else{
                axios.post(`https://vuetable.wilddogio.com/table/company/${this.companyKey}.json`,
                    this.form
                ).then( res => {
                    console.log(res);
                    if( res.status == 200 ) {
                        this.newCompany = false;
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
        }
    },
    mounted: function () {
        if (this.$route.query.key != undefined) {
            this.companyKey = this.$route.query.key;
            this.newCompany = false;
            axios.get(`https://vuetable.wilddogio.com/table/company/${this.companyKey}.json`).then(res => {
                this.form = res.data;
                console.log(res);
            });
        } else {
            let newForm = new company();
            this.form = newForm;
            // let theWilddog = new wilddogData();
            // console.log('new company');
            // theWilddog.ref.on('value',function(snapshot,prev) {
            //     console.log(snapshot.val());
            // });
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
}
</style>


