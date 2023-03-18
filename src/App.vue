<template>
  <main>
    <div class="mobile-sidebar">
      <img :src="mobileSidebar" />
    </div>
    <QuestionSteps :steps="steps" :current="currentStep" />
  </main>
</template>

<script>
import QuestionSteps from "./components/QuestionSteps.vue";

import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import questions from "./data/questions.js";

export default {
  name: "App",
  components: { QuestionSteps },
  data() {
    return {
      mobileSidebar,
      steps: questions.length + 1,
      currentStep: 0,
    }
  }
}
</script>

<style scoped>
main {
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
}

.mobile-sidebar {
  position: absolute;
  width: 100%;
}
</style>
