<template>
  <div class="app-container">
    <headline>
      <user />
    </headline>
    <div class="page-content">
      <div class="container">
        <div class="header">
          <div class="title">Блок "Обо мне"</div>
          <iconed-btn type="iconed" title="Добавить группу" />
        </div>
        <ul class="cards">
          <li class="card-item">
            <category />
          </li>
        </ul>

      </div>
    </div>
  </div>
</template>

<script>
import headline from "./components/headline";
import user from "./components/user";
import iconedBtn from "./components/button/types/iconedBtn";
import category from "./components/category";

export default {
  components: {
    headline,
    user,
    iconedBtn,
    category
  },
};
</script>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
</style>

<style lang="postcss" scoped src="./app.pcss"></style>
