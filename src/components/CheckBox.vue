<template>
  <div class="mt-4">
    <input
      class="peer hidden"
      type="checkbox"
      :checked="value"
      ref="myCheckbox"
      :id="attr.id"
      @input="handleInput"
    />
    <label
      :for="attr.id"
      class="flex justify-between items-center border-2 border-light-gray p-4 rounded-lg peer-checked:border-purplish-blue"
    >
      <div>
        <p class="font-bold">{{ attr.title }}</p>
        <p class="desc text-sm text-cool-gray">{{ attr.desc }}</p>
      </div>
      <p class="text-purplish-blue font-bold text-sm">
        ${{ attr[planType].price }}{{ attr[planType].unit }}
      </p>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["attr", "value", "price", "unit", "planType"],
  methods: {
    handleInput() {
      this.$emit("check", { id: this.attr.id, selected: this.$refs.myCheckbox.checked });
    }
  }
};
</script>
