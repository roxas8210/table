<template>
    <el-col :span="8" >
        <router-link v-bind:to="{ path: '/company',query: {id: item.id}}">
            <div class="img-border">
                <img :src="this.item.logo">
            </div>
            <p>{{this.item.companyName}}</p>
        </router-link>
    </el-col>
</template>
<script>

export default {
    name: 'company',
    props: ['item','index'],
    data: function() {
        return {
            
        }
    },
    methods: {
        
    }
}
</script>

<style>
.el-col{
    text-align: center;
    height: auto;
    overflow: hidden;
}
.el-col .img-border{
    width: 100%;
    height: 200px;
    overflow: hidden;
}
.el-col img{
    width:100%;
    display: block;
    margin: 0 auto;
}
.el-col p{
    font-size: 18px;
    line-height: 54px;
}
.el-col a{
    text-decoration: none;
}
</style>


