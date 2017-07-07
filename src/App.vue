<template>
  <div class="root">
    <h1>做单记录</h1>
    <div class="mission">
      <Mission v-bind:test="test"></Mission>
    </div>
  </div>
</template>

<script>
import Mission from './components/Mission.vue'
export default {
  name: 'app',
  components: {
    Mission
  },
  data: function () {
    return {
      
    }
  },
  methods: {
  }
}

</script>
<<style>
h1{
  text-align: center;
}
</style>


