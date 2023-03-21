<template>
  <div :class="{ error: error === true }">
    <label :for="attr.id">{{ attr.label }}</label>
    <input
      :id="attr.id"
      :type="attr.type"
      :value="value"
      ref="elem"
      @input="handleInput"
      :placeholder="attr.placeholder"
    />
    <slot name="error">
      <p class="error-text">This field is required</p>
    </slot>
  </div>
</template>

<script>
export default {
  props: ["attr", "error", "value"],
  methods: {
    handleInput() {
      this.$emit("inputValue", { id: this.attr.id, value: this.$refs.elem.value });
    }
  }
};
</script>
