<template>
  <ul>
    <li v-for="step in [...Array(steps).keys()]" :class="{ active: current === step }">
      {{ step + 1 }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "QuestionSteps",
  props: ["steps", "current"]
}
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  gap: 32px;
  padding: 40px 0;
  margin: 0 auto;
  width: fit-content;
}

li {
  width: 40px;
  font-size: 1.5rem;
  border: 2px solid var(--light-gray);
  color: var(--light-gray);
  border-radius: 50%;
  display: flex;
  text-align: center;
  justify-content: center;
  font-weight: bold;
}

li.active {
  color: #333;
  background-color: var(--light-gray);
}
</style>
