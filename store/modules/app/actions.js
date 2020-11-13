export default {
  openDrawer: ({ commit }, payload) => {
    commit('SET_DRAWER_STATE', true)
    commit('SET_DRAWER_SELECTED', payload)
  },
}
