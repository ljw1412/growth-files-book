<template>
  <div v-resize="onResize"
    class="growth-preview"
    :style="{fontSize:baseFontSize + 'px'}">

    <growth-book :class="{'not-animation':isPrint}"
      :pages="pages"
      :index="index"
      @pageTurn="pageTurn"></growth-book>

    <div class="growth-preview__action">
      <button @click="print">打印</button>
      <button @click="pageTurn(-1)">上一页</button>
      <button @click="pageTurn(1)">下一页</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import GrowthRecord from './class/GrowthRecord'
import GrowthBook from './book'

@Component({ components: { GrowthBook } })
export default class GrowthPreview extends Vue {
  growthRecord: GrowthRecord | null = null
  width = 0
  height = 0
  baseFontSize = 0
  isPrint = false

  get pages() {
    return this.growthRecord ? this.growthRecord.pages : []
  }

  get index() {
    return this.growthRecord ? this.growthRecord.index : 0
  }

  pageTurn(step: number) {
    this.growthRecord && this.growthRecord.pageTurn(step)
  }

  onResize() {
    this.width = document.body.clientWidth
    this.height = document.body.clientHeight
    if (this.width > 645) {
      this.baseFontSize = (this.height / 800) * 100
    } else {
      this.baseFontSize = (this.width / 565.6) * 100
    }
  }

  print() {
    this.isPrint = true
    this.growthRecord!.index = 0
    setTimeout(() => {
      window.print()
      this.isPrint = false
    }, 300)
  }

  async mounted() {
    const growthRecord = new GrowthRecord({
      campusid: 1615,
      growthid: '7a2b334a4cd23d105c3dca590e643970',
      stuid: 5000001
    })
    await growthRecord.fetchBaseData()
    this.growthRecord = growthRecord
    await this.$nextTick()
  }
}
</script>

<style lang="scss">
.growth-preview {
  position: relative;
  display: flex;
  height: 100%;
  overflow: hidden;
  line-height: 1;
  &__action {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: 999;
  }
}

.growth-book {
  user-select: none;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
  transform-origin: center;
  width: 63.6363vh;
  height: 90vh;

  &.not-animation {
    > * {
      animation-duration: 0s !important;
    }
  }
}

.growth-pager {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: left;
  transform-style: preserve-3d;
  $flipped-duration: 0.75s;

  &.is-flipping {
    animation: flip-page-1 $flipped-duration linear forwards;
  }
  &.is-flipped {
    animation: flip-page-2 $flipped-duration linear forwards;
    .growth-page:nth-child(2n) {
      z-index: 20;
    }
  }
  &.is-reverse-flipping {
    animation: flip-page-reverse-1 $flipped-duration linear forwards;
  }
  &.is-reverse-flipped {
    animation: flip-page-reverse-2 $flipped-duration linear forwards;
  }
}

.growth-page {
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.08);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: #fff;
  transform: translateZ(0);

  &:nth-child(2n - 1) {
    z-index: 10;
    transform: translateZ(1px);
  }
  &:nth-child(2n) {
    transform: translateZ(0) rotateY(180deg);
  }
}

.growth-element {
  position: absolute;
  &--group .growth-element {
    position: relative;
  }
}

@keyframes flip-page-1 {
  from {
    transform: perspective(1000px) rotateY(0);
  }
  to {
    transform: perspective(1000px) rotateY(-90deg);
  }
}

@keyframes flip-page-2 {
  from {
    transform: perspective(1000px) rotateY(-90deg);
  }
  to {
    transform: perspective(1000px) rotateY(-180deg);
  }
}

@keyframes flip-page-reverse-1 {
  from {
    transform: perspective(1000px) rotateY(-180deg);
  }
  to {
    transform: perspective(1000px) rotateY(-90deg);
  }
}

@keyframes flip-page-reverse-2 {
  from {
    transform: perspective(1000px) rotateY(-90deg);
  }
  to {
    transform: perspective(1000px) rotateY(0);
  }
}

@media screen and (max-width: 645px) {
  .growth-book {
    height: 141.42vw;
    top: 0;
    left: 0;
    transform: none;
    margin: auto;
  }

  .growth-pager {
    margin: auto;
  }
}

@media print {
  .growth-preview {
    font-size: 150px !important;
    overflow: initial;
  }

  .growth-book {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: none;
  }

  .growth-pager {
    position: relative;
    width: 100%;
    height: initial;
    margin: auto;
  }

  .growth-page {
    position: relative;
    width: 100vw;
    height: 100vh;
    &:nth-child(2n) {
      transform: none;
    }
  }

  .growth-preview__action {
    display: none;
  }
}
</style>
