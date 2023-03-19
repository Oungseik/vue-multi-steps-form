<template>
  <main>
    <div class="mobile-sidebar"><img :src="mobileSidebar" /></div>
    <QuestionSteps :steps="4" :current="currentStep" />

    <form>
      <template v-if="questionStep">
        <h2 @click="logger">{{ questionStep.title }}</h2>
        <p class="desc">{{ questionStep.description }}</p>
        <template v-if="questionStep.step === 1">
          <Input v-for="field in questionStep.inputs" :attr="field" />
        </template>

        <template v-if="questionStep.step === 2"> </template>
      </template>
    </form>

    <FormNavigator
      :start="start"
      :end="end"
      :current="currentStep"
      @navigateForm="handleNavigateForm"
    />
  </main>
</template>

<script>
import FormNavigator from "./components/FormNavigator.vue"
import Input from "./components/Input.vue"
import QuestionSteps from "./components/QuestionSteps.vue"

import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg"
import questions from "./data/questions.js"

export default {
  name: "App",
  components: { QuestionSteps, FormNavigator, Input },
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
    },
    logger() {
      console.log(questions[0])
    }
  },
  computed: {
    questionStep() {
      return questions.find((question) => question.step === this.currentStep + 1)
    }
  }
}
</script>

<style scoped>
main {
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  background-color: var(--magnolia);
}

.mobile-sidebar {
  position: absolute;
  width: 100%;
}

/*Later this will refactor to own component */
form {
  margin: 20px 18px;
  background-color: var(--alabaster);
  border-radius: 8px;
  padding: 28px 20px 34px;
}

h2 {
  color: var(--primary-marine-blue);
  font-weight: bold;
}

.desc {
  color: var(--cool-gray);
}
</style>
