export const state = () => ({
  currentUser: null
})

export const actions = {
  loginSuccess ({ commit }, user) {
    commit('loginSuccess', user)
  },
  loginFail ({ commit }, message) {
    commit('loginFail', message)
  }
}
export const mutations = {
  loginSuccess (state, user) {
    state.currentUser = user
  },
  loginFail (state, message) {
    state.message = message
  }
}
