<template>
  <div class="btns-container">
    <button class="back-btn" v-if="current !== start" @click="$emit('navigateForm', 'back')">
      Go Back
    </button>
    <button class="next-btn" v-if="current !== end" @click="$emit('navigateForm', 'next')">
      Next Step
    </button>
    <button class="confirm-btn" v-if="current === end" @click="$emit('navigateForm', 'confirm')">
      Confirm
    </button>
  </div>
</template>

<script>
export default {
  props: ["start", "end", "current"]
};
</script>
