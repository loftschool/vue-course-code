import Vue from "vue";

const inputComp = {
  template: "#input",
  props: ['value'],
  model: {
    prop: "value",
    event: "keyup"
  }
}

const checkComp = {
  template: "#checkbox",
  props: ["checked"],
  model: {
    prop: "checked",
    event: "change"
  }
}

const checkGroup = {
  template: "#check-group",
  props: ["items"],
  data() {
    return {
      inner: this.items
    }
  },
  model: {
    prop: "items",
    event: "itemsChange"
  },
  methods: {
    expose() {
      this.$emit("itemsChange", this.inner);
    }
  }
}

const radioComp = {
  template: "#radio",
  props: ["value"],
  model: {
    event: "change",
    prop: "value"
  },
  methods: {
    handleChange(event) {
      this.$emit("change", event.target.value)
    }
  }
}

new Vue({
  template: "#controls",
  el: "#controls-component",
  components: { inputComp, checkComp, checkGroup, radioComp },
  data() {
    return {
      text: "myText",
      yesNo: true,
      group: ["red", "blue"],
      oneOf: "master"
    }
  }
});