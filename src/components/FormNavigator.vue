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

    <!-- <button class="back-btn">Go Back</button> -->
    <!-- <button class="next-btn">Next Step</button> -->
    <!-- <button class="confirm-btn">Confirm</button> -->
  </div>
</template>

<script>
export default {
  props: ["start", "end", "current"]
}
</script>

<style scoped>
.btns-container {
  display: flex;
  background-color: var(--light-gray);
  justify-content: space-between;
  padding: 12px 10px;
}

button {
  border: transparent;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.back-btn {
  background-color: inherit;
  color: var(--cool-gray);
}

.next-btn {
  background-color: var(--primary-marine-blue);
  color: white;
}

.confirm-btn {
  background-color: var(--primary-purplish-blue);
  color: #fff;
}
</style>
