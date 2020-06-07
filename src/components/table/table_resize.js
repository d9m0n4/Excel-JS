import {$} from '../../core/DOM'

export function resizeHandler($root, event) {
  const $resizer = $(event.target)
  // const $parent = $resizer.$el.parenNode
  // const $parent = $resizer.$el.closest()
  const $parent = $resizer.closest('[data-type="resizable"]')
  const coords = $parent.getCoords()
  const type = $resizer.data.resize
  const sideProp = type === 'col' ? 'bottom' : 'right'

  $resizer.css({
    opacity: 1,
    [sideProp]: '-5000px'
  })

  let value

  document.onmousemove = e => {
    if (type === 'col') {
      const delta = Math.floor(e.pageX - coords.right)
      value = coords.width + delta
      $resizer.css({
        right: -delta + 'px'
      })
    } else {
      const delta = e.pageY - coords.bottom
      value = coords.height + delta
      $resizer.css({
        bottom: -delta + 'px'
      })
    }
  }

  document.onmouseup = e => {
    document.onmousemove = null
    document.onmouseup = null

    if (type === 'col') {
      $parent.css({width: value + 'px'})
      $root.findAll(`[data-col="${$parent.data.col}"]`)
          .forEach(el => el.style.width = value + 'px')
    } else {
      $parent.css({height: value + 'px'})
    }

    $resizer.css({
      bottom: 0,
      opacity: 0,
      right: 0
    })
  }
}
