import * as types from './mutation-types'

export default {
  incrementAction(store, num){
    setTimeout(() => {
      store.commit(types.ADD, num)
    }, 2000)
  }
}