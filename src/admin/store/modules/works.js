export default {
  namespaced: true,
  state: {
    data: [],
  },
  mutations: {
    ADD_WORK(state, newWork) {
      state.data.push(newWork);
    },
    SET_WORKS(state, works) {
      console.log(works)
      state.data = works
    }
  },
  actions: {
    async add({ commit }, newWork) {
      const formData = new FormData();
      Object.keys(newWork).forEach((item) => {
        formData.append(item, newWork[item]);
      });

      for (let entry of formData.entries()) {
        console.log(entry)
      }

      try {
        const { data } = await this.$axios.post("/works", formData);
        commit("ADD_WORK", data);
      } catch (error) {
        console.log("error");
      }
    },

    async fetch({commit}) {
      try {
        const { data } = await this.$axios.get("/works/1");
        commit("SET_WORKS", data);
      } catch (error) {
        console.log("error");
      }
    }
  },
};
