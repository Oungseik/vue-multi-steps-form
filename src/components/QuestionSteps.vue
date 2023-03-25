<template>
  <ul
    class="flex w-full justify-between gap-4 mx-auto px-4 sm:px-0 max-w-[380px] top-10 left-8 sm:absolute sm:gap-10 sm:w-3/4 sm:flex-col sm:max-w-full"
    :class="className"
  >
    <li class="sm:flex sm:gap-x-4" v-for="step in [...Array(steps).keys()]" :key="step">
      <div
        class="border-2 border-light-gray font-bold text-2xl rounded-full w-10 h-10 flex items-center justify-center text-light-gray"
        :class="{
          'text-marine-blue bg-pastel-blue border-pastel-blue':
            currentStep === step || (step === steps - 1 && currentStep === steps)
        }"
      >
        {{ step + 1 }}
      </div>

      <div class="hidden sm:block">
        <p class="text-sm text-pastel-blue">STEP {{ step + 1 }}</p>
        <p class="font-bold text-light-gray">{{ titles[step] }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "QuestionSteps",
  props: ["steps", "titles", "currentStep", "className"]
};
</script>
