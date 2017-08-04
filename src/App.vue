<template>
  <div class="root">
    <header>
      <img src="./assets/logo.png">
    </header>
    <Sidebar></Sidebar>
    <div class="mission">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import Sidebar from './components/Sidebar.vue'

export default {
  name: 'app',
  components: {
    Sidebar
  },
  data: function () {
    return {
      
    }
  },
  methods: {
  }
}

</script>
<style>
header{
  width: 100%;
  height: 70px;
  background-color: #20272a;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,.3);
  z-index: 99999;
  position: fixed;
  top: 0;
}
header img{
  height: 42px;
  margin-left: 45px;
  margin-top: 15px;
}
h1{
  text-align: center;
}
.mission{
  margin-left: 300px;
  width: calc(100vw - 350px);
  padding: 60px;
  padding-top: 100px;
}
</style>


