<template>
  <div class="about-page-component">
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-button
            type="iconed"
            v-if="emptyCatIsShown === false"
            @click="emptyCatIsShown = true"
            title="Добавить группу"
          />
        </div>
        <ul class="skills">
          <li class="item" v-if="emptyCatIsShown">
            <category 
              @remove="emptyCatIsShown = false" 
              @approve="createCategory"
              empty 
            />
          </li>
          <li class="item" v-for="category in categories" :key="category.id">
            <category :title="category.category" :skills="category.skills" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import button from "../../components/button";
import category from "../../components/category";
import { mapActions } from "vuex";

export default {
  components: {
    iconedButton: button,
    category,
  },
  data() {
    return {
      categories: [],
      emptyCatIsShown: false,
    };
  },
  methods: {
    ...mapActions({
      createCategoryAction: "categories/create"
    }),
    createCategory(categoryTitle) {
      this.createCategoryAction(categoryTitle);
    }
  },
  created() {
    this.categories = require("../../data/categories.json");
  },
};
</script>

<style lang="postcss" scoped src="./about.pcss">
</style>