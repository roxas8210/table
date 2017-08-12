<template>
    <el-col :span="8">
        <div class="img-border">
            <el-progress type="circle" :percentage="this.process" :status="this.status"></el-progress>
        </div>
        <div class="name">
            <router-link v-bind:to="{ path: '/company',query: {key: this.myKey}}">
                {{this.item.companyName}}
            </router-link>
        </div>
    </el-col>
</template>
<script>

export default {
    name: 'company',
    props: ['item', 'index', 'myKey'],
    data: function () {
        return {
            status: 'exception'
        }
    },
    methods: {

    },
    computed: {
        process: function () {
            let process = 0;
            if (this.item.upload) {
                process = 100;
                this.status = 'success';
            } else {
                if (this.item.program) {
                    process += 25;
                }
                if (this.item.info) {
                    process += 25;
                }
                if (this.item.uploadtest) {
                    process += 25;
                }
                this.status = 'exception';
            }
            return process;
        }
    },
    mounted: function () {

    }
}
</script>

<style>
.el-col {
    text-align: center;
    height: auto;
    overflow: hidden;
    margin-bottom: 10px;
}

.el-col .img-border {
    width: 100%;
    height: auto;
    overflow: hidden;
}

.el-col img {
    width: 100%;
    display: block;
    margin: 0 auto;
}

.el-col a {
    font-size: 18px;
    line-height: 54px;
    color: #444444;
}

.el-col .name{
    width: 100%;
    height: auto;
    overflow: hidden;
    text-align: center;
}

.el-col a {
    text-decoration: none;
    color: #444444;
}
</style>


