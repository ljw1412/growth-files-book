import { VueConstructor } from 'vue'
import { hyphenate } from '@/utils/string'

import { Resize } from './resize'

const directives = { Resize }

export default (Vue: VueConstructor) => {
  Object.keys(directives).forEach(key => {
    Vue.directive(hyphenate(key), (directives as Record<string, any>)[key])
  })
}
