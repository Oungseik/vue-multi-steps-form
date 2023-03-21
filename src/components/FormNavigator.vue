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

<style scoped>
.btns-container {
  display: flex;
  background-color: var(--alabaster);
  justify-content: space-between;
  padding: 12px 16px;
  position: fixed;
  width: 100%;
  bottom: 0; 
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
  padding: 8px 0;
}

.next-btn {
  background-color: var(--primary-marine-blue);
  color: white;
  margin-left: auto;
}

.confirm-btn {
  background-color: var(--primary-purplish-blue);
  color: #fff;
  margin-left: auto;
}
</style>
