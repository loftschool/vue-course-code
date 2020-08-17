import Vue from "vue";

const inputComp = {
  props: ['value'],
  template: "#input",
  model: {
    prop: "value",
    event: "keyup"
  }
}

const checkboxComp = {
  template: "#checkbox",
  props: ["checked"],
  model: {
    prop: "checked",
    event: "change"
  }
}

const customGroup = {
  template: "#checkbox-multiple",
  props: ['items'],
  data() {
    return {
      test: this.items
    }
  },
  model: {
    prop: "items",
    event: "itemChange",
  },
  methods: {
    expose() {
      this.$emit("itemChange", this.test);
    }
  }
}

const radioComp = {
  template: "#radio",
  props: ["value", "modelValue"],
  model: {
    event: 'change',
    prop: 'value'
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value);
    }
  }
}

new Vue({
  el: "#controls-component",
  template: "#controls",
  data() {
    return {
      text: "myText",
      bool: true,
      group: ["red", "blue"],
      oneOf: "master"
    }
  },
  components: { inputComp, checkboxComp, customGroup, radioComp }

});