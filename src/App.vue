<template>
  <main>
    <div class="mobile-sidebar"><img :src="mobileSidebar" /></div>
    <QuestionSteps :steps="4" :current="currentStep" />

    <form>
      <template v-if="questionStep">
        <h2>{{ questionStep.title }}</h2>
        <p class="desc">{{ questionStep.description }}</p>
        <template v-if="questionStep.step === 1">
          <Input v-for="field in questionStep.inputs" :attr="field" @inputValue="handleInput"
            :value="personalInfo[field.id]" :error="error[field.id]" />
        </template>

        <template v-if="questionStep.step === 2">
          <Radio v-for="field in questionStep[planType]" :attr="field" :value="plan" @selectPlan="handleSelectPlan" />

          <div class="plans">
            <span class="plan" :class="{ active: planType === 'monthly' }">Monthly</span><button
              @click.prevent="changePlan" class="plan-toggle-btn" :class="planType"></button><span class="plan"
              :class="{ active: planType === 'yearly' }">Yearly</span>
          </div>
        </template>

        <template v-if="questionStep.step === 3">
          <Checkbox v-for="(field) in questionStep[planType]" :value="addons[field.id]" :attr="field"
            @check="handleCheckAddons" />
        </template>
      </template>

      <template v-if="currentStep === 3">
        <div class="confirm">
          <h2>Finishing up</h2>
          <p class="desc">Double-check everything looks OK before confirming</p>
          <ul class="result">
            <li>
              <div>
                <p class="selected-plan"> {{ result.plan }} ({{ result.planType }})</p>
                <button class="change-info" @click.prevent="handleChangeInfo">Change</button>
              </div>
              <p class="plan-price">{{ result.price }}</p>
            </li>
            <li class="selected-addon" v-for="addon in result.addons">
              <p>{{ addon.title }}</p>
              <p>+{{ addon.price }}</p>
            </li>
          </ul>
          <div class="total">
            <p>Total <span>{{ result.planType === "monthly" ? "(per month)" : "(per year)" }}</span></p>
            <p>
              +${{ parseInt(result.price.slice(1)) + result.addons.map(addon =>
                parseInt(addon.price.slice(1))).reduce((a, b) => a + b, 0) }}
              {{ result.planType === "monthly" ? "/mo" : "/yr" }}</p>
          </div>
        </div>
      </template>
    </form>

    <FormNavigator :start="start" :end="end" :current="currentStep" @navigateForm="handleNavigateForm" />
  </main>
</template>

<script>
import FormNavigator from "./components/FormNavigator.vue";
import Checkbox from "./components/Checkbox.vue";
import Input from "./components/Input.vue";
import QuestionSteps from "./components/QuestionSteps.vue";
import Radio from "./components/Radio.vue";

import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import questions from "./data/questions.js";

function validateName(name) {
  return name.length > 3 && /[a-zA-z]+/.test(name);
}

function validateEmail(email) {
  // match one or more a-z and @ sign a-z again . and a-z again
  // example [oung]@[gmail].[com]
  return /[a-z0-9]+@[a-z]+\.[a-z]+/.test(email);
}

function validatePhoneNumber(number) {
  return (
    number.length > 5 && number.split().every((num) => num === "+" || /\d/.test(num) || num === " ")
  );
}

export default {
  name: "App",
  components: { QuestionSteps, FormNavigator, Input, Radio, Checkbox },
  data() {
    return {
      mobileSidebar,
      steps: questions.length + 1,
      start: 0,
      end: 4,
      currentStep: 0,
      personalInfo: {
        name: "",
        email: "",
        phone: ""
      },
      error: {
        name: false,
        email: false,
        phone: false
      },
      planType: "monthly",
      plan: "",
      addons: {
        "online-service": false,
        "larger-storage": false,
        "customizable-profile": false,
      },
    };
  },
  methods: {
    goNextStep() {
      if (this.currentStep === 0) {
        this.validateStep1();
      }

      if (this.currentStep === 0 && this.validatePersonalInfo()) {
        this.currentStep += 1;
      } else if (this.currentStep === 1 && this.plan) {
        this.currentStep += 1;
      } else if (this.currentStep === 2) {
        this.currentStep += 1;
      }
    },
    goPrevStep() {
      this.currentStep -= 1;
    },
    submit() { },

    validateStep1() {
      !validateName(this.personalInfo.name) ? (this.error.name = true) : (this.error.name = false);
      !validateEmail(this.personalInfo.email)
        ? (this.error.email = true)
        : (this.error.email = false);
      !validatePhoneNumber(this.personalInfo.phone)
        ? (this.error.phone = true)
        : (this.error.phone = false);
    },

    validatePersonalInfo() {
      return !Object.values(this.error).some((err) => err === true);
    },
    handleInput(data) {
      const { id, value } = data;
      this.personalInfo[id] = value;
      this.error[id] = false;
    },

    handleNavigateForm(arg) {
      if (arg === "next") {
        this.goNextStep();
      } else if (arg === "back") {
        this.goPrevStep();
      } else if (arg === "confirm") {
      }
    },
    changePlan() {
      this.planType === "monthly" ? (this.planType = "yearly") : (this.planType = "monthly");
    },
    handleSelectPlan(arg) {
      this.plan = arg.plan;
    },
    handleCheckAddons(value) {
      this.addons[value.addons] = value.selected;
    }

  },
  computed: {
    questionStep() {
      return questions.find((question) => question.step === this.currentStep + 1);
    },
    result() {
      return {
        plan: this.plan,
        planType: this.planType,
        price: questions[1][this.planType].find(p => p.id === this.plan)?.price,
        addons: questions[2][this.planType].filter(p => this.addons[p.id]),
        total: this.price,
      };
    }
  }
};
</script>

<style scoped>
main {
  min-height: 100vh;
  min-height: 100svh;
  position: relative;
  background-color: var(--magnolia);
  padding-bottom: 60px;
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

.plans {
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  color: var(--cool-gray);
}

.plan-toggle-btn {
  background-color: inherit;
  border: transparent;
  display: inline-block;
  background-color: var(--primary-marine-blue);
  width: 36px;
  height: 18px;
  border-radius: 9999px;
  position: relative;
}

.plan-toggle-btn::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  position: absolute;
  background-color: white;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  transition: transform 0.2s ease-in-out;
}

.plan-toggle-btn.yearly::before {
  transform: translate(135%, -50%);
}

.plan.active {
  color: var(--primary-marine-blue);
}

.confirm ul {
  list-style-type: none;
  text-transform: capitalize;
}

.change-info {
  background-color: var(--magnolia);
  border: transparent;
  color: var(--cool-gray);
  font-family: inherit;
  text-decoration: underline;
}

.result {
  padding: 16px 20px;
  border-radius: 4px;
  background-color: var(--magnolia);
  margin-top: 20px;
}

.result li {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.result li:first-child {
  border-bottom: 2px solid var(--light-gray);
  padding: 0 0 16px;

}

.selected-plan {
  color: var(--primary-marine-blue);
  font-weight: bold;
}

.plan-price {
  color: var(--primary-marine-blue);
  font-size: 0.875rem;
  font-weight: bold;
}

.selected-addon {
  margin: 16px 0;
  color: var(--cool-gray);
}

.total {
  color: var(--cool-gray);
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
}
</style>
