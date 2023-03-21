<template>
  <div>
    <input type="checkbox" :checked="value" ref="myCheckbox" :id="attr.id" @input="handleInput" />
    <label :for="attr.id">
      <div>
        <p>{{ attr.title }}</p>
        <p class="desc">{{ attr.desc }}</p>
      </div>
      <p class="price">{{ attr.price }}</p>
    </label>
  </div>
</template>

<script>
export default {
  props: ["attr", "value"],
  methods: {
    handleInput() {
      this.$emit("check", { addons: this.attr.id, selected: this.$refs.myCheckbox.checked });
    }
  }
};
</script>
