<template>
  <div>
    <input type="checkbox" :checked="value" ref="myCheckbox" :id="attr.id" @input="handleInput" />
    <label :for="attr.id">
      <div>
        <p>{{ attr.title }}</p>
        <p class="desc">{{ attr.desc }}</p>
      </div>
      <p class="price">${{ attr[planType].price }}{{ attr[planType].unit }}</p>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["attr", "value", "price", "unit", "planType"],
  methods: {
    handleInput() {
      this.$emit("check", { addons: this.attr.id, selected: this.$refs.myCheckbox.checked });
    }
  },
  mounted() {
    console.log(this.attr);
    console.log(this.price);
  }
};
</script>
