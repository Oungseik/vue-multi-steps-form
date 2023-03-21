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
};
</script>
