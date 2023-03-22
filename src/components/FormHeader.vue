<template>
  <h2 class="font-bold text-marine-blue text-2xl">{{ title }}</h2>
  <p class="text-cool-gray py-2">{{ description }}</p>
</template>

<script>
export default {
  props: ["title", "description"]
};
</script>
