<template>
<div class="table-responsive">
    <table class="table table-condensed">
        <thead>
            <tr>
                <td>公司名</td>
                <td>语言</td>
                <td>手机站</td>
                <td>设计</td>
                <td>价格</td>
                <td>程序完成情况</td>
                <td>资料上传情况</td>
                <td>是否上传测试空间</td>
                <!--<td>测试空间网址</td>-->
                <td>是否上传正式空间</td>
                <!--<td>网址</td>-->
                <td>选项</td>
            </tr>
        </thead>
        <tbody>
            <tbody is="MissionList" v-for="(item,index) in table" v-bind:key="item.id" v-bind:item="item" v-bind:index="index"></tbody>  
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
            table: []
        }
    },
    components: {
        MissionList
    },
    methods: {
    },
    beforeCreate:function() {
        axios.get('http://localhost:3000/people').then((res) => {
            this.table = res.data;
        });
    }
}
</script>

