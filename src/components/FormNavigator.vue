<template>
  <div class="flex bg-white px-8 py-4" :class="className">
    <button
      class="text-cool-gray"
      v-if="current !== start && current < end"
      @click="$emit('navigateForm', 'back')"
    >
      Go Back
    </button>
    <button
      class="ml-auto px-4 py-2 bg-marine-blue text-alabaster rounded-md"
      v-if="current < end"
      @click="$emit('navigateForm', 'next')"
    >
      Next Step
    </button>
    <button
      class="ml-auto px-4 py-2 bg-purplish-blue text-alabaster rounded-md"
      v-if="current === end"
      @click="$emit('navigateForm', 'confirm')"
    >
      Confirm
    </button>
  </div>
</template>

<script>
export default {
  props: ["start", "end", "current", "className"]
};
</script>
