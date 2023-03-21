<template>
  <div class="input-box">
    <input
      type="radio"
      :id="attr.id"
      :value="attr.id"
      :name="attr.name"
      @input="select"
      :checked="attr.id === value"
    />
    <label :for="attr.id">
      <div class="icon">
        <img :src="`/src/assets/images/${attr.icon}`" />
      </div>
      <div>
        <p>{{ attr.id }}</p>
        <p>{{ attr.price }}</p>
      </div>
    </label>
  </div>
</template>

<script>
export default {
  props: ["attr", "value"],
  methods: {
    select() {
      this.$emit("selectPlan", { plan: this.attr.id, price: this.attr.price });
    }
  }
};
</script>
