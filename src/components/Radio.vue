<template>
  <div class="my-4">
    <input
      class="peer hidden"
      type="radio"
      :id="attr.id"
      :value="attr.id"
      :name="name"
      @click="select"
      :checked="attr.id === value"
    />
    <label
      :for="attr.id"
      class="flex gap-x-4 items-center border-2 border-light-gray rounded-lg p-3 peer-checked:border-purplish-blue"
    >
      <div class="icon">
        <img :src="`/src/assets/images/${attr.icon}`" />
      </div>
      <div>
        <p class="capitalize">{{ attr.id }}</p>
        <p class="text-sm text-cool-gray">${{ attr[planType].price }}{{ attr[planType].unit }}</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  name: "RadioBox",
  props: ["attr", "name", "value", "planType"],
  methods: {
    select() {
      this.$emit("selectPlan", { plan: this.attr.id, price: this.attr[this.planType].price });
    }
  }
};
</script>
