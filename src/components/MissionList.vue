<template>
    <!--<tbody>-->
        <!--<tr v-for="(item,index) in table" v-bind:key="item.id">-->
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
                <route-link to="/rout">详细</route-link>
                <span ref="item.id" class="edit">修改</span>
                <span ref="item.id" class="del">删除</span>
                <route-view></route-view>
            </td>
        </tr>
    <!--</tbody>-->
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
          table: [],
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

