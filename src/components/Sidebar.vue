<template>
    <el-menu :collapse="isCollapse" theme="dark">
        <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span><router-link v-bind:to="{path: '/'}">首页</router-link></span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span><router-link v-bind:to="{path: '/company'}">添加</router-link></span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span>设置</span>
        </el-menu-item>
    </el-menu>
</template>
<script>
export default {
    name: 'Sidebar',
    data: function () {
        return {
            isCollapse: false
        }
    },
    methods: {

    }
}
</script>
<style>
.el-menu{
    width: 300px;
    height: calc(100vh - 70px);
    overflow: hidden;
    position: fixed;
    left: 0;
    top: 70px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
}
a{
    color: #bfcbd9;
}
</style>


