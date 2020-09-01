<template>
  <div class="app-container">
    <router-view name="header" />
    <router-view />
    <div :class="['notify-container', { active: isTooltipShown }]">
      <div class="notification">
        <notification
          :text="tooltipText"
          :type="tooltipType"
          @click="hideTooltip"
        />
      </div>
    </div>
  </div>
</template>

<script>
import notification from "./components/notification";
import { mapState, mapActions } from "vuex";
export default {
  components: { notification },
  methods: {
    ...mapActions({
      hideTooltip: "tooltips/hide",
    }),
  },
  computed: {
    ...mapState("tooltips", {
      isTooltipShown: (state) => state.isShown,
      tooltipText: (state) => state.text,
      tooltipType: (state) => state.type,
    }),
  },
};
</script>

<style lang="postcss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800");
@import "normalize.css";
@import "../styles/mixins.pcss";
@import "../styles/layout/base.pcss";

.page-component {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.page-content {
  padding: 60px 0 20px;
  background: url("../images/bg/admin.jpg") center center / cover no-repeat;
  flex: 1;
}

.page-title {
  margin-right: 60px;
  font-size: 21px;
  font-weight: bold;
  color: $text-color;
}

.page-header {
  display: flex;
  margin-bottom: 60px;
}
</style>

<style lang="postcss" scoped src="./app.pcss"></style>
