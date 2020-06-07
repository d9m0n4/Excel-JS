import {ExcelComponent} from '@core/ExcelComponent'
import {createTable} from './table.template'
import {resizeHandler} from './table_resize'
// import {$} from ''

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      listeners: ['mousedown']
    })
  }

  toHTML() {
    return createTable()
  }
  onMousedown(event) {
    // console.log(event.target.getAttribute('data-resize'));
    if (event.target.dataset.resize) {
      resizeHandler(this.$root, event)
    }
  }
}
