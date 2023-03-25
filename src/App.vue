<template>
  <main class="relative min-h-screen bg-pastel-blue px-4 py-8 pb-24 sm:bg-light-gray">
    <div class="absolute w-full top-0 left-0 sm:hidden">
      <img class="w-full" :src="mobileSidebar" />
    </div>
    <div
      class="relative w-full z-10 sm:flex sm:bg-white sm:rounded-xl sm:p-4 sm:gap-x-10 sm:w-fit sm:mx-auto"
    >
      <div class="sm:relative">
        <QuestionSteps
          :titles="formStepsTitles"
          :steps="totalSteps + 1"
          :currentStep="currentStep"
        />
        <img
          class="hidden sm:block"
          src="./assets/images/bg-sidebar-desktop.svg"
          alt="doddle image"
        />
      </div>

      <div class="sm:flex sm:flex-col sm:justify-between sm:max-w-[500px] md:w-[500px]">
        <form class="bg-white rounded-xl px-6 py-8 mt-8 sm:mt-0">
          <template v-if="currentStep <= totalSteps">
            <FormHeader :title="form.title" :description="form.description" />
          </template>

          <template v-if="currentStep === 0">
            <FormInput
              v-for="info in form.informations"
              :attr="info"
              :value="formData[info.id]"
              :error="!formData.isValid[info.id]"
              @inputValue="handleInput"
              :key="info.id"
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
              :key="info.id"
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
            <CheckBox
              v-for="info in form.addOns"
              :attr="info"
              :planType="formData.planType"
              :key="info.id"
              @check="handleSelectAddOns"
            />
          </template>

          <template v-if="currentStep === totalSteps">
            <div class="px-6 py-4 mt-2 bg-magnolia rounded-lg">
              <div class="flex items-center justify-between">
                <div>
                  <p class="capitalize font-bold text-marine-blue">
                    <span>{{ formData.plan }}</span>
                    <span>({{ formData.planType }})</span>
                  </p>
                  <button @click.prevent="currentStep = 0" class="text-cool-gray underline text-sm">
                    Change
                  </button>
                </div>
                <p class="font-bold text-marine-blue">${{ formData.price }}{{ unit }}</p>
              </div>
              <template v-if="Object.values(formData.addOns).some((x) => x.selected)">
                <div class="border-t-2 border-light-gray mt-4">
                  <template v-for="addOn in formData.addOns" :key="addOn.id">
                    <div v-if="addOn.selected" class="capitalize pt-4 flex justify-between">
                      <span class="text-cool-gray">{{ addOn.id }} </span>
                      <span class="text-purplish-blue font-bold"
                        >+${{ addOn[formData.planType] }}{{ unit }}</span
                      >
                    </div>
                  </template>
                </div>
              </template>
            </div>

            <div class="capitalize pt-4 px-6 flex justify-between">
              <span class="text-cool-gray"
                >Total
                <span class="lowercase">{{
                  formData.planType === "monthly" ? "(per month)" : "(per year)"
                }}</span>
              </span>
              <span class="text-purplish-blue font-bold lowercase"
                >+${{
                  formData.price +
                  formData.addOns
                    .filter((addon) => addon.selected)
                    .reduce((a, b) => a + b[formData.planType], 0)
                }}{{ unit }}</span
              >
            </div>
          </template>

          <template v-if="currentStep === totalSteps + 1"> <ThankYou /></template>
        </form>

        <FormNavigator
          className="w-full fixed left-0 bottom-0 sm:static"
          :start="0"
          :end="totalSteps"
          :current="currentStep"
          @navigateForm="handleNavigateForm"
        />
      </div>
    </div>
  </main>
</template>

<script>
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import formSteps from "./data/formSteps";
import { validateName, validateEmail, validatePhoneNumber } from "./lib/validate.js";

import CheckBox from "./components/CheckBox.vue";
import FormHeader from "./components/FormHeader.vue";
import FormNavigator from "./components/FormNavigator.vue";
import FormInput from "./components/FormInput.vue";
import QuestionSteps from "./components/QuestionSteps.vue";
import Radio from "./components/Radio.vue";
import ThankYou from "./components/ThankYou.vue";

export default {
  name: "App",
  components: { CheckBox, FormHeader, FormNavigator, FormInput, Radio, QuestionSteps, ThankYou },
  data() {
    return {
      mobileSidebar,
      totalSteps: formSteps.length - 1,
      currentStep: 4,
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
        price: 0,
        addOns: formSteps[2].addOns.reduce(
          (o, val) => [
            ...o,
            {
              id: val.id,
              selected: false,
              monthly: val.monthly.price,
              yearly: val.yearly.price
            }
          ],
          []
        )
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
        return this.formData.plan !== "";
      } else {
        return true;
      }
    },

    handleNavigateForm(event) {
      if (event === "back") {
        this.currentStep -= 1;
      } else if (event === "next" && this.validate()) {
        this.currentStep += 1;
      } else if (event === "confirm") {
        this.currentStep += 1;
        this.submitData();
      }
    },

    handleSelectAddOns(event) {
      this.formData.addOns.forEach(
        (addOn) => addOn.id === event.id && (addOn.selected = event.selected)
      );
    },

    submitData() {
      // send this.formData to the server
    }
  },
  computed: {
    form() {
      return formSteps[this.currentStep];
    },
    formStepsTitles() {
      return formSteps.map((step) => step.shortDesc);
    },
    unit() {
      return this.formData.planType === "monthly" ? "/mo" : "/yr";
    }
  }
};
</script>
