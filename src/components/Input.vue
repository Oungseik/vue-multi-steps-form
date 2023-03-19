<template>
  <div>
    <label :for="attr.id">{{ attr.label }}</label>
    <input :id="attr.id" :type="attr.type" v-model="attr.value" :placeholder="attr.placeholder" />
  </div>
</template>

<script>
export default {
  props: ["attr"]
}
</script>

<style scoped>
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
</style>
