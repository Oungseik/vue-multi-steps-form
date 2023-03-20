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
      this.$emit("inputValue", { id: this.attr.id, value: this.$refs.elem.value })
    }
  }
}
</script>

<style scoped>
.error {
  position: relative;
}

.error-text {
  font-size: 0.75rem;
  color: var(--primary-strawberry-red);
  font-weight: bold;
  position: absolute;
  top: 0;
  right: 0;
  display: none;
}

.error .error-text {
  display: block;
}

label {
  display: block;
  font-size: 0.875rem;
  margin-top: 16px;
}

input {
  display: block;
  outline: none;
  border: 1px solid var(--light-gray);
  width: 100%;
  padding: 8px 16px;
  border-radius: 3px;
  font-family: inherit;
}

.error input {
  border: 1px solid var(--primary-strawberry-red);
}
</style>
