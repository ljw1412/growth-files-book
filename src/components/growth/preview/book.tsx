import { Component, Vue, Prop } from 'vue-property-decorator'
import { CreateElement } from 'vue'
import GrowthPage from './class/Page'
import GrowthBookPage from './page.vue'

@Component({ components: { GrowthBookPage } })
export default class GrowthBook extends Vue {
  @Prop({ type: Array, default: () => [] })
  readonly pages!: GrowthPage[]
  @Prop(Number)
  readonly index!: number

  isFirst = true

  get pageList() {
    const list = []
    const pages = this.pages
    const len = Math.ceil(pages.length / 2)
    for (let i = 0; i < len; i++) {
      list.push(pages.slice(i * 2, (i + 1) * 2))
    }

    return list
  }

  render(h: CreateElement) {
    if (this.isFirst) {
      setTimeout(() => {
        this.isFirst = false
      }, 1000)
    }
    const data = {
      class: ['growth-book', { 'not-animation': this.isFirst }]
    }
    return <div {...data}>{this.renderPage()}</div>
  }

  renderPage() {
    return this.pageList.map((item, index) => {
      const data = {
        class: [
          'growth-pager',
          {
            'is-flipping': this.index > index,
            'is-reverse-flipping': this.index <= index
          }
        ],
        on: {
          animationstart: (e: AnimationEvent) => {
            const el = e.target as HTMLElement
            if (e.animationName === 'flip-page-1') {
              el.style.zIndex = 100 - index + ''
            }
            if (e.animationName === 'flip-page-reverse-1') {
              el.style.zIndex = index + 100 + ''
            }
          },
          animationend: (e: AnimationEvent) => {
            const el = e.target as HTMLElement
            if (!el) return
            if (e.animationName === 'flip-page-1') {
              el.classList.add('is-flipped')
              el.style.zIndex = index + 100 + ''
            }
            if (e.animationName === 'flip-page-reverse-1') {
              el.classList.add('is-reverse-flipped')
              el.style.zIndex = 100 - index + ''
            }
          }
        }
      }

      return (
        <div {...data}>
          {item.map((page, i) => {
            const data = {
              props: { page },
              nativeOn: {
                click: () => {
                  this.$emit('pageTurn', i ? -1 : 1)
                }
              }
            }
            return (
              <growth-book-page key={page.type} {...data}></growth-book-page>
            )
          })}
        </div>
      )
    })
  }
}
