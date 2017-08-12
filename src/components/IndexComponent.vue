<template>
    <div class="index-main">
        <el-row :gutter="20">
            <company v-for="(item,key,index) in this.$store.state.table" v-bind:key="item.objectId" v-bind:item="item" v-bind:index="index" v-bind:myKey="item.objectId"></company>
        </el-row>
        <el-pagination layout="prev, pager, next" :total="total" :page-size="9" @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script>
import axios from 'axios'
import company from './company.vue'
import CompanyModel from '../../class/CompanyModel'

export default {
    name: 'IndexComponent',
    data: function () {
        return {
            total: 0
        }
    },
    components: {
        company
    },
    methods: {
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            axios.get(`http://localhost:4040/company?page=${val}&size=9`).then(res => {
                this.$store.state.table = res.data;
            });
        }
    },
    computed: {

    },
    mounted: function () {
        var company = new CompanyModel();
        company.query( res => {
            console.log(res);
            this.$store.state.table = res;
        });
    },
    updated: function() {
        
    }
}
</script>
<style>
.el-pagination {
    text-align: center;
}
</style>

