<template>
  <div class="works-page-component page-component">
    <div class="page-content">
      <div class="container">
        <div class="page-header">
          <div class="page-title">
            Блок "Работы"
          </div>
        </div>
        <div class="form">
          <app-form @submit="handleSubmit" />
        </div>
        <ul class="cards">
          <li class="item" v-for="work in works" :key="work.id">
            <work-card
              :work="work"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import appForm from "../../components/form";
import workCard from "../../components/workCard";
import { mapState, mapActions } from "vuex";

export default {
  components: { appForm, workCard },
  computed: {
    ...mapState("works", {
      works: (state) => state.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchWorks: "works/fetch"
    }),
    async handleSubmit(newWork) {
      await this.addNewWork();
    },
  },
  mounted() {
    this.fetchWorks();
  }
};
</script>

<style scoped lang="postcss" src="./works.pcss"></style>
