<template>
    <tr>
        <td>
            <span v-if="!showInput">
                {{item.companyName}}
            </span>
            <input v-if="showInput" type="text" v-model="item.companyName" v-bind:value="item.companyName">
        </td>
        <td>
            <span v-if="!showInput">
                {{item.lang}}
            </span>
            <input v-if="showInput" type="text" v-model="item.lang" v-bind:value="item.lang">
        </td>
        <td>
            <img v-if="item.wap" src="images/right.png">
            <img v-else src="images/error.png">
            </td>
        <td>
            <span v-if="!showInput">
                {{item.designBy}}
            </span>
            <input v-if="showInput" type="text" v-model="item.designBy" v-bind:value="item.designBy">
        <td>
            <span v-if="!showInput">
                {{item.price}}
            </span>
            <input v-if="showInput" type="text" v-model="item.price" v-bind:value="item.price">
        <td>
            <img v-if="item.program" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <td>
            <img v-if="item.info" src="images/right.png">
            <img v-else src="images/error.png"></td>
        <td>
            <img v-if="item.uploadtest" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <td>
            <img v-if="item.upload" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <td v-on:click="option">
            <span ref="item.id" class="btn btn-primary" id="edit" v-if="!showInput">修改</span>
            <span class="btn btn-success" id="complete" v-else>完成</span>
            <span ref="item.id" id="del" class="btn btn-danger">删除</span>
            <router-link class="btn btn-info" v-bind:to="{ path: '/detail',query:{id: item.id}}">详细</router-link>
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
          if(event.target.id == 'edit') {
              this.showInput = true;
          }
          if(event.target.id == 'del') {
              this.delEmitter();
          }
          if(event.target.id == 'details') {
              router.push({ path: 'detail',params: {id: this.myitem.id}});
          }
          if(event.target.id == 'complete') {
              this.showInput = false;
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
img{
    width: 20px;
}
</style>

