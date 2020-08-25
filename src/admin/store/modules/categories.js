export default {
  namespaced: true,
  state: {
    data: []
  },
  actions: {
    create(store, title) {
      console.log(title);
    }
  }
}