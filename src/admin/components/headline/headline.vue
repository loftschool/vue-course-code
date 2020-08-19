<template>
  <div class="headline-component">
    <div class="container headline-container">
      <slot />
      <div class="title">{{title}}</div>
      <div class="buttons">
        <button type="button" class="btn">Выйти</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Панель администрирования"
    }
  }
}
</script>

<style lang="postcss" scoped src="./headline.pcss"></style>
