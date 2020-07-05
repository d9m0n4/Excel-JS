import {DEFAULT_STYLES, defaultTitle} from '../constants'
import {clone} from '../core/utils'

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: DEFAULT_STYLES,
  openedDate: new Date().toJSON()
}

const normalize = state => ({
  ...state,
  currentStyles: DEFAULT_STYLES,
  currentText: ''
})

export function normalizeInitialState(state) {
  return state ? normalize(state) : clone(defaultState)
}
