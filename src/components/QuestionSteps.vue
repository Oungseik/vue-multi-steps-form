<template>
  <ul class="flex w-2/3 justify-between" :class="className">
    <li
      class="border-2 border-light-gray font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center text-light-gray"
      v-for="step in [...Array(steps).keys()]"
      :class="{
        'text-marine-blue bg-pastel-blue border-pastel-blue':
          currentStep === step || (step === steps - 1 && currentStep === steps)
      }"
      :key="step"
    >
      {{ step + 1 }}
    </li>
  </ul>
</template>

<script>
export default {
  name: "QuestionSteps",
  props: ["steps", "currentStep", "className"]
};
</script>
