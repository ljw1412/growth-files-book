<template>
  <div id="app">
    <growth></growth>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Growth from '@/components/growth/preview/index.vue'

@Component({ components: { Growth } })
export default class App extends Vue {}
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

* {
  margin: 0;
  padding: 0;
}
</style>
