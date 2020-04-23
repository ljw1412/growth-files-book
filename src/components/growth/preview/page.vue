<template>
  <div class="growth-page"
    :style="[
      {'background-image':`url(${page.background.url})`},
      page.background.style
    ]">
    <growth-element v-for="item of page.layout"
      v-bind="item"
      :key="item.moduleid"></growth-element>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import growthElement from './element'
import GrowthPage from './class/Page'

@Component({ components: { growthElement } })
export default class GrowthBookPage extends Vue {
  @Prop({ type: Object, default: () => ({}) })
  readonly page!: GrowthPage
}
</script>

<style lang="scss">
</style>
