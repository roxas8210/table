<template>
    <tr class="row">
        <!--公司名-->
        <td class="col-lg-1">
            <span v-if="!showInput">
                {{item.companyName}}
            </span>
            <input class="col-lg-12" v-if="showInput" type="text" v-model="item.companyName" v-bind:value="item.companyName">
        </td>
        <!--语言版本-->
        <td class="col-lg-1">
            <span v-if="!showInput">
                {{item.lang}}
            </span>
            <input class="col-lg-12" v-if="showInput" type="text" v-model="item.lang" v-bind:value="item.lang">
        </td>
        <!--是否有手机站-->
        <td class="col-lg-1">
            <div v-if="!showInput"> 
               <img v-if="item.wap" src="images/right.png">
                <img v-else src="images/error.png">
           </div>
           <div v-else>
                <select id="wap" v-if="item.wap" v-on:change="optionStatus">
                    <option selected="selected" value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <select id="wap" v-else v-on:change="optionStatus">
                    <option value="yes">yes</option>
                    <option selected="selected" value="no">no</option>
                </select>
           </div>
        </td>
        <!--设计师-->
        <td class="col-lg-1">
            <span v-if="!showInput">
                {{item.designBy}}
            </span>
            <input class="col-lg-12" v-if="showInput" type="text" v-model="item.designBy" v-bind:value="item.designBy">
        </td>
        <!--价格-->
        <td class="col-lg-1">
            <span v-if="!showInput">
                {{item.price}}
            </span>
            <input class="col-lg-12" v-if="showInput" type="text" v-model="item.price" v-bind:value="item.price">
        </td>
        <!--程序完成情况-->
        <td class="col-lg-1">
           <div v-if="!showInput"> 
                <img v-if="item.program" src="images/right.png">
                <img v-else src="images/error.png">
           </div>
           <div v-else>
                <select id="program" v-if="item.program" v-on:change="optionStatus">
                    <option selected="selected" value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <select id="program" v-else v-on:change="optionStatus">
                    <option value="yes">yes</option>
                    <option selected="selected" value="no">no</option>
                </select>
           </div>
        </td>
        <!--资料是否上传-->
        <td class="col-lg-1">
            <div v-if="!showInput"> 
                <img v-if="item.info" src="images/right.png">
                <img v-else src="images/error.png">
           </div>
           <div v-else>
                <select id="info" v-if="item.info" v-on:change="optionStatus">
                    <option selected="selected" value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <select id="info" v-else v-on:change="optionStatus">
                    <option value="yes">yes</option>
                    <option selected="selected" value="no">no</option>
                </select>
           </div>
        </td>
        <!--是否上传测试空间-->
        <td class="col-lg-1">
            <div v-if="!showInput"> 
                <img v-if="item.uploadtest" src="images/right.png">
                <img v-else src="images/error.png">
           </div>
           <div v-else>
                <select id="uploadtest" v-if="item.uploadtest" v-on:change="optionStatus">
                    <option selected="selected" value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <select id="uploadtest" v-else v-on:change="optionStatus">
                    <option value="yes">yes</option>
                    <option selected="selected" value="no">no</option>
                </select>
           </div>
        </td>
        <!--是否上传正式空间-->
        <td class="col-lg-1">
            <div v-if="!showInput"> 
                <img v-if="item.upload" src="images/right.png">
                <img v-else src="images/error.png">
           </div>
           <div v-else>
                <select id="upload" v-if="item.upload" v-on:change="optionStatus">
                    <option selected="selected" value="yes">yes</option>
                    <option value="no">no</option>
                </select>
                <select id="upload" v-else v-on:change="optionStatus">
                    <option value="yes">yes</option>
                    <option selected="selected" value="no">no</option>
                </select>
           </div>
        </td>
        <!--选项-->
        <td v-on:click="option"  class="col-lg-3">
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
      //编辑，详细，删除和完成，4个功能键的触发事件
      option: function (event) {
          if(event.target.id == 'edit') {
              this.showInput = true;
              console.log(this.item);
          }
          if(event.target.id == 'del') {
              this.delEmitter();
          }
          if(event.target.id == 'details') {
              router.push({ path: 'detail',params: {id: this.myitem.id}});
          }
          if(event.target.id == 'complete') {
              this.showInput = false;
              axios.post('http://localhost/thinkphp/public/list/update',this.item).then( res => {
                console.log(res);
            });
          }
      },
      delEmitter: function () {
          this.$emit('delEmit');
      },
      //更改下拉状态
      optionStatus: function (event) {
          let result = event.target.value;
          let theId = event.target.id;
          switch (theId) {
              case 'program':
                  if(result == 'yes') {
                      this.item.program = true;
                  } else {
                      this.item.program = false;
                  }
                  break;
            case 'info':
                  if(result == 'yes') {
                      this.item.info = true;
                  } else {
                      this.item.info = false;
                  }
                  break;
            case 'wap':
                  if(result == 'yes') {
                      this.item.wap = true;
                  } else {
                      this.item.wap = false;
                  }
                  break;
            case 'uploadtest':
                  if(result == 'yes') {
                      this.item.uploadtest = true;
                  } else {
                      this.item.uploadtest = false;
                  }
                  break;
            case 'upload':
                  if(result == 'yes') {
                      this.item.upload = true;
                  } else {
                      this.item.upload = false;
                  }
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
input{
    max-width:100%;
}
td{
    vertical-align: middle !important;
}
</style>

