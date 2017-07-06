<template>
    <table>
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
                <td>测试空间网址</td>
                <td>是否上传正式空间</td>
                <td>网址</td>
            </tr>
        </thead>
        <tbody>
            <tr v-on:click="addTest">
                <td>{{test}}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    name: 'mission',
    props: ['test'],
    data: function () {
        return {
            fatherTest: this.test
        }
    },
    methods: {
        addTest: function () {
            let theNum = this.fatherTest + '1';
            this.fatherTest = theNum;
        }
    }
}
</script>

