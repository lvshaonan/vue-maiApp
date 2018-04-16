import * as types from './mutation-types'

export default {
  [types.ADD](state, num){
    state.count = num
  },
  [types.SET_SINGER](state, data){
    state.singer = data
  }
}