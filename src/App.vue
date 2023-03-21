<template>
  <main class="relative min-h-screen bg-magnolia">
    <div class="mobile-sidebar"><img class="w-full" :src="mobileSidebar" /></div>
    <QuestionSteps class="absolute top-8 left-1/2 -translate-x-1/2" :steps="totalSteps" :currentStep="currentStep" />

    <template> </template>

    <FormNavigator class="w-full fixed bottom-0" :start="0" :end="totalSteps - 1" :current="currentStep"
      @navigateForm="handleNavigateForm" />
  </main>
</template>

<script>
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import formSteps from "./data/formSteps";

import QuestionSteps from "./components/QuestionSteps.vue";
import FormHeader from "./components/FormHeader.vue";
import FormNavigator from "./components/FormNavigator.vue";

export default {
  name: "App",
  components: { FormHeader, FormNavigator, QuestionSteps },
  data() {
    return {
      mobileSidebar,
      totalSteps: formSteps.length,
      currentStep: 0,
      formData: {
        name: "",
        email: "",
        phone: "",
        plan: "",
        planType: "",
        planPrice: "",
        addOns: formSteps[2].addOns.reduce((o, val) => ({ ...o, [val.id]: false }), {})
      }
    };
  },

  methods: {
    handleNavigateForm(event) {
      event === "back"
        ? (this.currentStep -= 1)
        : event === "next"
          ? (this.currentStep += 1)
          : event === "confirm"
            ? this.submitData()
            : undefined;
    },
    submitData() {
      console.log("send data to the backend");
    }
  }
};
</script>
