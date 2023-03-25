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
      <div class="flex items-center gap-4">
        <div class="w-5 h-5 border-2 border-light-gray relative checkmark">
          <img
            class="icon absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="../assets/images/icon-checkmark.svg"
            alt="mark"
          />
        </div>
        <div>
          <p class="font-bold">{{ attr.title }}</p>
          <p class="desc text-sm text-cool-gray">{{ attr.desc }}</p>
        </div>
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

<style>
.checkmark {
  border-radius: 4px;
}
input:checked ~ label .checkmark {
  background-color: hsl(241, 100%, 62%);
  border: 2px solid hsl(241, 100%, 62%);
}
</style>
