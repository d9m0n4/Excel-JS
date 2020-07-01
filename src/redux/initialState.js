import {storage} from '../core/utils'
import {DEFAULT_STYLES, defaultTitle} from '../constants'

const defaultState = {
  title: defaultTitle,
  colState: {},
  rowState: {},
  dataState: {},
  stylesState: {},
  currentText: '',
  currentStyles: DEFAULT_STYLES
}

const normalize = state => ({
  ...state,
  currentStyles: DEFAULT_STYLES,
  currentText: ''
})

export const initialState = storage('excel-state') ?
    normalize(storage('excel-state')) : defaultState
