export class Page {
  constructor(params) {
    this.params = params || Date.now().toString()
  }

  getRoot() {
    throw new Error('noo method @GET ROOT@')
  }

  afterRender() {
  }

  destroy() {

  }
}
