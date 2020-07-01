import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.store = options.store
    this.unsubscribers = []
    this.prepare()
    this.storeSub = null
  }

  prepare() {}

  toHTML() {
    return ''
  }

  $emit(event, ...args) {
    this.emitter.emit(event, ...args) // уведомление слушателей
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }
  // приходят только те изменения на которые мы подпитсались
  storeChanged() {}

  isWatching(key) {
    return this.subscribe.includes(key)
  }
  // $subscribe(fn) {
  //   this.storeSub = this.store.subscribe(fn)
  // }
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  init() {
    this.initDOMListeners()
  }

  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
    // this.storeSub.unsubscribe()
  }
}
