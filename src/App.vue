<template>
  <main class="relative min-h-screen bg-light-gray p-8 pb-24">
    <div class="absolute w-full top-0 left-0">
      <img class="w-full" :src="mobileSidebar" />
    </div>
    <div class="relative z-10">
      <QuestionSteps class="mx-auto" :steps="totalSteps" :currentStep="currentStep" />

      <form class="bg-white rounded-lg px-6 py-8 mt-8">
        <FormHeader :title="form.title" :description="form.description" />

        <template v-if="currentStep === 0">
          <Input v-for="info in form.informations" :attr="info" :value="formData[info.id]"
            :error="!formData.isValid[info.id]" @inputValue="handleInput" />
        </template>
      </form>

      <FormNavigator class="w-full fixed left-0 bottom-0" :start="0" :end="totalSteps - 1" :current="currentStep"
        @navigateForm="handleNavigateForm" />
    </div>
  </main>
</template>

<script>
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import formSteps from "./data/formSteps";
import { validateName, validateEmail, validatePhoneNumber } from "./lib/validate.js";

import QuestionSteps from "./components/QuestionSteps.vue";
import FormHeader from "./components/FormHeader.vue";
import FormNavigator from "./components/FormNavigator.vue";
import Input from "./components/Input.vue";

export default {
  name: "App",
  components: { FormHeader, FormNavigator, Input, QuestionSteps },
  data() {
    return {
      mobileSidebar,
      totalSteps: formSteps.length,
      currentStep: 0,
      formData: {
        name: "",
        email: "",
        phone: "",
        isValid: {
          name: true,
          email: true,
          phone: true,
        },
        plan: "",
        planType: "",
        planPrice: "",
        addOns: formSteps[2].addOns.reduce((o, val) => ({ ...o, [val.id]: false }), {})
      }
    };
  },

  methods: {
    handleInput(param) {
      const { id, value } = param;
      this.formData[id] = value;
      this.formData.isValid[id] = true;
    },

    validate() {
      if (this.form.title === "Personal info") {
        this.formData.isValid.name = validateName(this.formData.name)
        this.formData.isValid.email = validateEmail(this.formData.email)
        this.formData.isValid.phone = validatePhoneNumber(this.formData.phone)
        return Object.values(this.formData.isValid).every(x => x);
      } else {
        return true;
      }
    },

    handleNavigateForm(event) {

      if (event === "back") {
        this.currentStep -= 1
      } else if (event === "next" && this.validate()) {
        this.currentStep += 1;
      } else {
        this.submitData()
      }

    },

    submitData() { }
  },
  computed: {
    form() {
      return formSteps[this.currentStep];
    }
  }
};
</script>
