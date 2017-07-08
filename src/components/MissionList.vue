<template>
    <tr>
        <td>
            <span v-if="!showInput">
                {{item.companyName}}
            </span>
            <input v-if="showInput" type="text" v-bind:value="item.companyName">
        </td>
        <td>{{item.lang}}</td>
        <td>{{item.wap}}</td>
        <td>{{item.designBy}}</td>
        <td>{{item.price}}</td>
        <td>{{item.program}}</td>
        <td>{{item.info}}</td>
        <td>{{item.uploadtest}}</td>
        <td>{{item.upload}}</td>
        <td v-on:click="option">
            <!--<span ref="item.id" class="details">详细</span>-->
            <router-link v-bind:to="{ path: '/detail',query:{id: item.id}}">详细</router-link>
            <span ref="item.id" class="edit">修改</span>
            <span ref="item.id" class="del">删除</span>
        </td>
    </tr>
</template>

<<script>
import axios from 'axios'
import VueRouter from 'vue-router'

const rout = {template: '<span>route</span>'}
export default {
  name: 'MissionList',
  props: ['item','index'],
  data: function () {
      return {
          showInput: false,
          myitem: this.item,
          myindex: this.index
      }
  },
  beforeCreate: function () {
    
  },
  methods: {
      option: function (event) {
          console.log(event);          
          if(event.target.className == 'edit') {
              this.showInput = true;
          }
          if(event.target.className == 'del') {
              this.delEmitter();
          }
          if(event.target.className == 'details') {
              router.push({ path: 'detail',params: {id: this.myitem.id}});
          }
      },
      delEmitter: function () {
          this.$emit('delEmit');
      }
  }
}
</script>
<<style>
span{
    cursor: pointer;
}
td{
    text-align:center;
}
</style>

