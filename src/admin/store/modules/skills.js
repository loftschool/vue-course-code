export default {
  namespaced: true,
  actions: {
    async add({ commit }, skill) {
      try {
        const { data } = await this.$axios.post('/skills', skill);
        commit("categories/ADD_SKILL", data, { root: true })
      } catch (error) {
        throw new Error("Ошибка")
      }
    },
    async remove({commit}, skillToRemove) {
      try {
        const { data } = await this.$axios.delete(`/skills/${skillToRemove.id}`);
        commit("categories/REMOVE_SKILL", skillToRemove, { root: true })
      } catch (error) {
        console.log(error);
        throw new Error("Ошибка")
      }
    },
    async edit({commit}, skillToEdit) {
      try {
        const { data } = await this.$axios.post(`/skills/${skillToEdit.id}`, skillToEdit);
        commit("categories/EDIT_SKILL", data.skill, { root: true })
      } catch (error) {
        console.log(error);
        throw new Error("Ошибка")
      }
    }
  }
}