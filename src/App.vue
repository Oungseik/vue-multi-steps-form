<template>
  <main>
    <div class="mobile-sidebar">
      <img :src="mobileSidebar" />
    </div>
    <QuestionSteps :steps="steps" :current="currentStep" />
    <FormNavigator
      :start="start"
      :end="end"
      :current="currentStep"
      @navigateForm="handleNavigateForm"
    />
  </main>
</template>

<script>
import QuestionSteps from "./components/QuestionSteps.vue"
import FormNavigator from "./components/FormNavigator.vue"

import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg"
import questions from "./data/questions.js"

export default {
  name: "App",
  components: { QuestionSteps, FormNavigator },
  data() {
    return {
      mobileSidebar,
      steps: questions.length + 1,
      start: 0,
      end: 4,
      currentStep: 0
    }
  },
  methods: {
    handleNavigateForm(arg) {
      if (arg === "next") {
        this.currentStep += 1
      } else if (arg === "back") {
        this.currentStep -= 1
      } else if (arg === "confirm") {
      }
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
