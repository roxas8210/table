<template>
    <el-col :span="8">
        <router-link v-bind:to="{ path: '/company',query: {key: this.myKey}}">
            <div class="img-border">
                <!-- <img :src="this.item.logo"> -->
                <el-progress type="circle" :percentage="this.process" :status="this.status"></el-progress>
            </div>
            <p>{{this.item.companyName}}</p>
        </router-link>
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
}

.el-col .img-border {
    width: 100%;
    height: 200px;
    overflow: hidden;
}

.el-col img {
    width: 100%;
    display: block;
    margin: 0 auto;
}

.el-col p {
    font-size: 18px;
    line-height: 54px;
}

.el-col a {
    text-decoration: none;
}
</style>


