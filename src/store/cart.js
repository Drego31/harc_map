export default {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    push: (state, payload) => state.list.push(payload),
  },
  actions: {
    push ({ rootGetters, commit }, id) {
      const article = rootGetters['products/articleById'](id)
      console.log(article)
      commit('push', { ...article })
    },
  },
}
