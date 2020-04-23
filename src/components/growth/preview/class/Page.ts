import config, { moduleBackground, LayoutOption } from '../config'

export interface ConstructorOptions {
  data?: Record<string, any>
  title?: string
  type: string
  moduleid: string
}

export default class GrowthPage {
  data: Record<string, any> = {}
  title = ''
  type = ''
  moduleid = ''
  background = {}
  layout: LayoutOption[] = []

  constructor({ data, title = '', type, moduleid }: ConstructorOptions) {
    this.data = Object.assign({ pageTitle: title }, data)
    this.title = title
    this.type = type
    this.moduleid = moduleid
  }

  configAssignValue(pageConfig: LayoutOption[]) {
    pageConfig.forEach(item => {
      if (item.prop) {
        // 从本页数据中获取对应字段的值
        let value = this.data[item.prop]
        if (item.format) {
          // 对取到的值进行格式化
          value = item.format(value)
        }
        item.value = value
      }
      if (item.children) {
        this.configAssignValue(item.children)
      }
    })
  }

  updateLayout() {
    // 从配置文件中获取对应类型的页面配置
    const pageConfig = config[this.type as keyof typeof config] || []

    this.configAssignValue(pageConfig)

    this.layout = pageConfig
  }

  // 从配置文件中获取对应类型的页面背景
  updateBackground() {
    this.background =
      moduleBackground[this.type as keyof typeof moduleBackground] || {}
  }

  // 更新本页数据
  update() {
    this.updateLayout()
    this.updateBackground()
  }
}
