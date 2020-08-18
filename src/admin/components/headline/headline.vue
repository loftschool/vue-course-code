<template>
  <div class="headline-component">
    <div class="container headline-container">
      <slot />
      <div class="title">Панель администрирования</div>
      <div class="buttons">
        <button type="button" class="btn">Выйти</button>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped src="./headline.pcss"></style>
