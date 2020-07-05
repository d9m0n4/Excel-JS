export class Page {
  constructor(params) {
    this.params = params
  }

  getRoot() {
    throw new Error('noo method @GET ROOT@')
  }

  afterRender() {
  }

  destroy() {

  }
}
