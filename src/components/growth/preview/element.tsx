import Vue, { CreateElement, VNodeData } from 'vue'

import { LayoutOption, TextPrefixAndSuffix } from './config'

function renderGroupItem(h: CreateElement, children?: LayoutOption[]) {
  if (!children) return
  return children.map(item =>
    renderItem(h, item, { style: item.style, staticClass: item.clazz })
  )
}

// 创建行内文字
function renderTextSpan(
  h: CreateElement,
  options?: string | TextPrefixAndSuffix
) {
  if (!options) return
  if (typeof options === 'string') {
    return <span>{options}</span>
  } else if (typeof options === 'object') {
    const data = {
      class: options.clazz,
      style: options.style
    }
    return <span {...data}>{options.value}</span>
  }
}

// 创建页面元素
function renderItem(
  h: CreateElement,
  options: LayoutOption,
  nativeData: Record<string, any>
) {
  const { type, value, children, prefix, suffix } = options
  const { style, staticClass } = nativeData
  const data: VNodeData = {
    class: [
      staticClass,
      'growth-element',
      { 'growth-element--group': type === 'group' }
    ],
    style
  }
  switch (type) {
    case 'image':
      // 渲染图片类型
      return <img src={value} {...data} />
    case 'group':
      // 渲染复杂布局
      return <div {...data}>{renderGroupItem(h, children)}</div>
    case 'html':
      data.domProps = { innerHTML: value }
      return <div {...data}></div>
    default:
      // 渲染文字布局，可以有前后缀文字。
      return (
        <div {...data}>
          {renderTextSpan(h, prefix)}
          <span>{value}</span>
          {renderTextSpan(h, suffix)}
        </div>
      )
  }
}

export default Vue.extend({
  name: 'GrowthElement',
  functional: true,
  render(h, ctx) {
    const props = ctx.props as LayoutOption
    if (!props.value) {
      props.value = props.defaultValue || ''
    }

    return renderItem(h, props as LayoutOption, ctx.data)
  }
})
