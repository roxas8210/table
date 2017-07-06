<template>
  <div class="root">
    <p v-on:click="add">{{test}}</p>
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
      test: 'test'
    }
  },
  methods: {
    add: function () {
      let theNum = this.test + '1';
      this.test = theNum;
    }
  }
}

</script>

