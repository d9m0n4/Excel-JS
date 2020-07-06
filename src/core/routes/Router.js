import {$} from '../DOM'
import {ActiveRoute} from './activeRoute'
import {Loader} from '../../components/Loader'

export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided in Router')
    }
    this.$placeholder = $(selector)
    this.routes = routes
    this.loader = new Loader()
    this.page = null
    this.changeHashHandler = this.changeHashHandler.bind(this)
    this.init()
  }

  init() {
    window.addEventListener('hashchange', this.changeHashHandler)
    this.changeHashHandler()
  }

  async changeHashHandler() {
    if (this.page) {
      this.page.destroy()
    }
    this.$placeholder.clear().append(this.loader)
    const Page = ActiveRoute.path.includes('excel') ?
        this.routes.excel :
        this.routes.dashboard
    this.page = new Page(ActiveRoute.param);
    const root = await this.page.getRoot()
    this.$placeholder.clear().append(root)

    this.page.afterRender()
  }

  destroy() {
    window.removeEventListener('hashchange', this.changeHashHandler)
  }
}
