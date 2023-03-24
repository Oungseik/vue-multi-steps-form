<template>
  <main class="relative min-h-screen bg-pastel-blue p-8 pb-24">
    <div class="absolute w-full top-0 left-0">
      <img class="w-full" :src="mobileSidebar" />
    </div>
    <div class="relative z-10">
      <QuestionSteps class="mx-auto" :steps="totalSteps" :currentStep="currentStep" />

      <form class="bg-white rounded-xl px-6 py-8 mt-8">
        <FormHeader :title="form.title" :description="form.description" />

        <template v-if="currentStep === 0">
          <Input
            v-for="info in form.informations"
            :attr="info"
            :value="formData[info.id]"
            :error="!formData.isValid[info.id]"
            @inputValue="handleInput"
          />
        </template>

        <template v-if="currentStep === 1">
          <Radio
            v-for="info in form.plans"
            :attr="info"
            :planType="formData.planType"
            :value="formData.plan"
            :name="form.name"
            @selectPlan="handleSelectPlan"
          />
          <div class="flex items-center justify-center gap-8 bg-light-gray py-3 rounded-xl">
            <button
              @click.prevent="formData.planType = 'monthly'"
              class="text-cool-gray"
              :class="{ 'text-marine-blue': formData.planType === 'monthly' }"
            >
              Monthly
            </button>
            <button
              class="bg-marine-blue w-10 h-5 rounded-full relative"
              @click.prevent="
                formData.planType === 'monthly'
                  ? (formData.planType = 'yearly')
                  : (formData.planType = 'monthly')
              "
            >
              <span
                class="block absolute w-3 h-3 bg-white rounded-full top-1 translate-x-1 transition-transform"
                :class="{ 'translate-x-6 left-auto': formData.planType === 'yearly' }"
              ></span>
            </button>
            <button
              @click.prevent="formData.planType = 'yearly'"
              class="text-cool-gray"
              :class="{ 'text-marine-blue': formData.planType === 'yearly' }"
            >
              Yearly
            </button>
          </div>
        </template>

        <template v-if="currentStep === 2">
          <Checkbox v-for="info in form.addOns" :attr="info" :planType="formData.planType" />
        </template>
      </form>

      <FormNavigator
        class="w-full fixed left-0 bottom-0"
        :start="0"
        :end="totalSteps - 1"
        :current="currentStep"
        @navigateForm="handleNavigateForm"
      />
    </div>
  </main>
</template>

<script>
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import formSteps from "./data/formSteps";
import { validateName, validateEmail, validatePhoneNumber } from "./lib/validate.js";

import Checkbox from "./components/Checkbox.vue";
import FormHeader from "./components/FormHeader.vue";
import FormNavigator from "./components/FormNavigator.vue";
import Input from "./components/Input.vue";
import QuestionSteps from "./components/QuestionSteps.vue";
import Radio from "./components/Radio.vue";

export default {
  name: "App",
  components: { Checkbox, FormHeader, FormNavigator, Input, Radio, QuestionSteps },
  data() {
    return {
      mobileSidebar,
      totalSteps: formSteps.length,
      currentStep: 2,
      formData: {
        name: "",
        email: "",
        phone: "",
        isValid: {
          name: true,
          email: true,
          phone: true
        },
        plan: "",
        planType: "monthly",
        price: "",
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

    handleSelectPlan(e) {
      this.formData.plan = e.plan;
      this.formData.price = e.price;
    },

    validate() {
      if (this.form.title === "Personal info") {
        this.formData.isValid.name = validateName(this.formData.name);
        this.formData.isValid.email = validateEmail(this.formData.email);
        this.formData.isValid.phone = validatePhoneNumber(this.formData.phone);
        return Object.values(this.formData.isValid).every((x) => x);
      } else if (this.form.title === "Select your plan") {
        return this.formData.plan;
      } else {
        return true;
      }
    },

    handleNavigateForm(event) {
      if (event === "back") {
        this.currentStep -= 1;
      } else if (event === "next" && this.validate()) {
        this.currentStep += 1;
      } else {
        this.submitData();
      }
    },

    submitData() {}
  },
  computed: {
    form() {
      return formSteps[this.currentStep];
    }
  }
};
</script>
