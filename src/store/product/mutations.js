// state = user module 的 state
// this.state = vuex root state
// this.state.module名 = 其他 module 的 state
export const search = (state, data) => {
  state.keywords = data
}

export const updateKeywords = (state, data) => {
  state.searchBar = data
}
