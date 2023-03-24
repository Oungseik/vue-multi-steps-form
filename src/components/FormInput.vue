<template>
  <div class="flex flex-col relative">
    <label class="text-marine-blue mt-4" :for="attr.id">{{ attr.label }}</label>
    <input
      class="text-marine-blue my-1 p-2 rounded-md border-2 border-light-gray focus-within:border-purplish-blue"
      :class="{ 'border-strawberry-red': error }"
      :id="attr.id"
      :type="attr.type"
      :value="value"
      ref="elem"
      @input="handleInput"
      :placeholder="attr.placeholder"
    />

    <slot name="error">
      <p v-show="error" class="font-bold text-sm text-strawberry-red absolute top-5 right-0">
        This field is required
      </p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "FormInput",
  props: ["attr", "error", "value"],
  methods: {
    handleInput() {
      this.$emit("inputValue", { id: this.attr.id, value: this.$refs.elem.value });
    }
  }
};
</script>
