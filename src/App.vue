<template>
  <main>
    <div class="mobile-sidebar"><img class="w-full" :src="mobileSidebar" /></div>
  </main>
</template>

<script>
import mobileSidebar from "./assets/images/bg-sidebar-mobile.svg";
import questions from "./data/questions.js";

export default {
  name: "App",
  data() {
    return {
      mobileSidebar,
      formData: {
        name: "",
        email: "",
      }
    };
  },
}
</script>
