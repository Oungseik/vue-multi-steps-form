<template>
  <div>
    <input type="checkbox" :checked="value" ref="myCheckbox" :id="attr.id" @input="handleInput">
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
      this.$emit("check", { addons: this.attr.id, selected: this.$refs.myCheckbox.checked })
    }
  }
};
</script>

<style scoped>
label {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 2px solid var(--light-gray);
  border-radius: 4px;
  padding: 8px 16px 8px 48px;
  margin-top: 16px;
  position: relative;
}

input:checked~label {
  border: 2px solid var(--primary-purplish-blue);
}

input[type="checkbox"] {
  display: none;
}

input[type="checkbox"]~label::after {
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  border: 2px solid var(--light-gray);
  left: 16px;
  border-radius: 2px;
  position: absolute;
}

input[type="checkbox"]:checked~label::after {
  background-color: var(--primary-purplish-blue);
  border: 2px solid var(--primary-purplish-blue);
}

input[type="checkbox"]:checked~label::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  background-color: #fff;
  transform-origin: bottom left;
  clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
  position: absolute;
  left: 20px;
  z-index: 1;
}

.price {
  color: var(--primary-purplish-blue);
}

.desc {
  color: var(--cool-gray);
  font-size: .875rem;
}
</style>
