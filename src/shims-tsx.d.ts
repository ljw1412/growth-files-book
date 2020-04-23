import Vue, { VNode } from 'vue'

declare global {
  interface Element {
    _onWindowResize?: {
      callback: () => void
      options?: boolean | AddEventListenerOptions
    }
  }

  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
