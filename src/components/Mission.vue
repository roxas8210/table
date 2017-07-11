<template>
<div>
    <div class="add-btn">
        <input type="button" class="btn btn-warning" value="添加" v-on:click="add">
    </div>
    <table class="table table-condensed">
        <thead>
            <tr class="row">
                <td class="col-lg-1">公司名</td>
                <td class="col-lg-1">语言</td>
                <td class="col-lg-1">手机站</td>
                <td class="col-lg-1">设计</td>
                <td class="col-lg-1">价格</td>
                <td class="col-lg-1">程序完成情况</td>
                <td class="col-lg-1">资料上传情况</td>
                <td class="col-lg-1">是否上传测试空间</td>
                <td class="col-lg-1">是否上传正式空间</td>
                <td class="col-lg-3">选项</td>
            </tr>
        </thead>
        <tbody>
            <tr v-if="addStatus" class="row">
                 <!--公司名-->
                <td class="col-lg-1">
                    <input class="col-lg-12" type="text" v-model="newMission.companyName" >
                </td>
                <!--语言版本-->
                <td class="col-lg-1">
                    <input class="col-lg-12" type="text" v-model="newMission.lang" >
                </td>
                <!--是否有手机站-->
                <td class="col-lg-1">
                    <select id="wap" v-on:change="optionStatus">
                        <option value="yes">yes</option>
                        <option selected="selected" value="no">no</option>
                    </select>
                </td>
                <!--设计师-->
                <td class="col-lg-1">
                    <input class="col-lg-12" type="text" v-model="newMission.designBy" >
                </td>
                <!--价格-->
                <td class="col-lg-1">
                    <input class="col-lg-12" type="text" v-model="newMission.price" >
                </td>
                <!--程序完成情况-->
                <td class="col-lg-1">
                    <select id="program" v-on:change="optionStatus">
                        <option value="yes">yes</option>
                        <option selected="selected" value="no">no</option>
                    </select>
                </td>
                <!--资料是否上传-->
                <td class="col-lg-1">
                    <select id="info" v-on:change="optionStatus">
                        <option value="yes">yes</option>
                        <option selected="selected" value="no">no</option>
                    </select>
                </td>
                <!--是否上传测试空间-->
                <td class="col-lg-1">
                    <select id="uploadtest" v-on:change="optionStatus">
                        <option value="yes">yes</option>
                        <option selected="selected" value="no">no</option>
                    </select>
                </td>
                <!--是否上传正式空间-->
                <td class="col-lg-1">
                    <select id="upload" v-on:change="optionStatus">
                        <option value="yes">yes</option>
                        <option selected="selected" value="no">no</option>
                    </select>
                </td>
                <!--选项-->
                <td class="col-lg-3">
                    <span class="btn btn-success" v-on:click="complete">完成</span>
                </td>
            </tr>
            <tbody is="MissionList" v-for="(item,index) in table" v-bind:key="item.id" v-bind:item="item" v-bind:index="index" v-on:delEmit="del(index)"></tbody>  
        </tbody>
    </table>
</div>
</template>

<script>
import MissionList from './MissionList.vue'
import axios from 'axios'

export default {
    name: 'mission',
    props: ['test'],
    data: function () {
        return {
            table: [],
            addStatus: false,
            newMission : {
                companyName: ' ',
                lang: '中文',
                wap: false,
                designBy: ' ',
                price: 0,
                program: false,
                info: false,
                uploadtest: false,
                testaddress: ' ',
                upload: false,
                webaddress: ' '
            },
            // originMission : {
            //     companyName: '',
            //     lang: '中文',
            //     wap: false,
            //     designBy: '',
            //     price: 0,
            //     program: false,
            //     info: false,
            //     uploadtest: false,
            //     testaddress: '',
            //     upload: false,
            //     webaddress: ''
            // }
        }
    },
    components: {
        MissionList
    },
    methods: {
        del:function(arg) {
            let theIndex = arg;
            let newTable = this.table;
            newTable.splice(theIndex,1);
            this.table = newTable;
        },
        add:function() {
            if(this.addStatus === true) {
                alert('请先完成添加');
            } else {
                this.addStatus = true;   
            }
        },
        originMission:function() {
            this.companyName = '';
            this.lang = '中文';
            this.wap = false;
            this.designBy = '';
            this.price = 0;
            this.program = false;
            this.info = false;
            this.uploadtest = false;
            this.testaddress = '';
            this.upload = false;
            this.webaddress = '';
        },
        optionStatus: function (event) {
            let result = event.target.value;
            let theId = event.target.id;
            switch (theId) {
                case 'program':
                    if(result == 'yes') {
                        this.newMission.program = true;
                    } else {
                        this.newMission.program = false;
                    }
                    break;
                case 'info':
                    if(result == 'yes') {
                        this.newMission.info = true;
                    } else {
                        this.newMission.info = false;
                    }
                    break;
                case 'wap':
                    if(result == 'yes') {
                        this.newMission.wap = true;
                    } else {
                        this.newMission.wap = false;
                    }
                    break;
                case 'uploadtest':
                    if(result == 'yes') {
                        this.newMission.uploadtest = true;
                    } else {
                        this.newMission.uploadtest = false;
                    }
                    break;
                case 'upload':
                    if(result == 'yes') {
                        this.newMission.upload = true;
                    } else {
                        this.newMission.upload = false;
                    }
                    break;
                default:
                    break;
            }
        },
        complete:function() {
            this.addStatus = false;
            this.table.push(this.newMission);
            axios.post('http://localhost/thinkphp/public/list/add',this.newMission).then( res => {
                console.log(res);
            });
            let copyMission = new this.originMission();
            this.newMission = copyMission;
        }
    },
    beforeCreate:function() {
        axios.get('http://localhost/thinkphp/public/list').then((res) => {
            this.table = res.data;
        });
    }
}
</script>
<<style>
.add-btn{
    width:71%;
    height: auto;
    overflow: hidden;
    margin: 0 auto;
}
.add-btn input{
    float: right;
}
</style>

