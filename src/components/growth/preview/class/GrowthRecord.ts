import GrowthPage, {
  ConstructorOptions as PageConstructorOptions
} from './Page'

interface ConstructorOptions {
  campusid: number | string
  stuid: number | string
  growthid: string
}

export default class GrowthRecord {
  campusid?: number | string
  stuid?: number | string
  growthid?: string

  index = 0
  // 这本成长记录的书页列表
  pages: GrowthPage[] = []

  constructor({ campusid, stuid, growthid }: ConstructorOptions) {
    this.campusid = campusid
    this.stuid = stuid
    this.growthid = growthid
    this.getIndexByStore()
  }

  get pageCount() {
    return Math.ceil(this.pages.length / 2)
  }

  getIndexByStore() {
    this.index = parseInt(
      sessionStorage.getItem('growthPage' + this.growthid) || '0'
    )
  }

  pageTurn(step: number) {
    const index = this.index + step
    this.index = Math.max(Math.min(index, this.pageCount), 0)
    sessionStorage.setItem('growthPage' + this.growthid, this.index + '')
  }

  addBackPage() {
    if (!(this.pages.length % 2)) {
      this.pages.push(new GrowthPage({ moduleid: '0', type: '' }))
    }
    this.pages.push(new GrowthPage({ moduleid: '-1', type: 'BACK_COVER' }))
  }

  // 获取成长记录
  reFindBook() {
    const data = require('@/data.json') as PageConstructorOptions[]
    this.pages = data.map(item => new GrowthPage(item))
    this.addBackPage()
  }
  // 更新所有页面的内部数据
  updatePages() {
    this.pages.forEach(page => {
      page.update()
    })
  }

  // 获取基础数据
  fetchBaseData() {
    this.reFindBook()
    this.updatePages()
  }
}
