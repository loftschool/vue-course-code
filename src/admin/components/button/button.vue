<template>
  <component 
    :is="type"
    v-bind="$attrs"
    v-on="$listeners"
  /> 
</template>

<script>
  import defaultBtn from "./types/defaultBtn";
  import iconedBtn from "./types/iconedBtn";
  import squareBtn from "./types/squareBtn";
  import roundBtn from "./types/roundBtn";

  export default {
  props: {
    type: {
      type: String,
      default: "default"
    }
  },
  components: {
    default: defaultBtn,
    square: squareBtn,
    iconed: iconedBtn,
    round: roundBtn
  }
}
</script>