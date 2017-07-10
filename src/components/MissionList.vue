<template>
    <tr>
        <!--公司名-->
        <td>
            <span v-if="!showInput">
                {{item.companyName}}
            </span>
            <input v-if="showInput" type="text" v-model="item.companyName" v-bind:value="item.companyName">
        </td>
        <!--语言版本-->
        <td>
            <span v-if="!showInput">
                {{item.lang}}
            </span>
            <input v-if="showInput" type="text" v-model="item.lang" v-bind:value="item.lang">
        </td>
        <!--是否有手机站-->
        <td>
            <img v-if="item.wap" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <!--设计师-->
        <td>
            <span v-if="!showInput">
                {{item.designBy}}
            </span>
            <input v-if="showInput" type="text" v-model="item.designBy" v-bind:value="item.designBy">
        </td>
        <!--价格-->
        <td>
            <span v-if="!showInput">
                {{item.price}}
            </span>
            <input v-if="showInput" type="text" v-model="item.price" v-bind:value="item.price">
        </td>
        <!--程序完成情况-->
        <td>
           <div v-if="!showInput"> 
                <img v-if="item.program" src="images/right.png">
                <img v-else src="images/error.png">
           </div>
           <div v-else>
                <select id="program" v-if="item.program" v-on:change="optionStatus">
                    <option selected="selected">yes</option>
                    <option>no</option>
                </select>
                <select id="program" v-else v-on:change="optionStatus">
                    <option>yes</option>
                    <option selected="selected">no</option>
                </select>
           </div>
        </td>
        <!--资料是否上传-->
        <td>
            <img v-if="item.info" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <!--是否上传测试空间-->
        <td>
            <img v-if="item.uploadtest" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <!--是否上传正式空间-->
        <td>
            <img v-if="item.upload" src="images/right.png">
            <img v-else src="images/error.png">
        </td>
        <!--选项-->
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
      },
      optionStatus: function (event) {
          console.log(event);
          let result = event.target.value;
          console.log(result);
          let theId = event.target.id;
          switch (theId) {
              case 'program':
                  if(result == 'yes') {
                      this.item.program = true;
                  } else {
                      this.item.program = false;
                  }
                  console.log(this.item.program);
                  break;
          
              default:
                  break;
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
img{
    width: 20px;
}
</style>

