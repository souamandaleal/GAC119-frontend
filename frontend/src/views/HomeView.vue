<template>
  <div class="homepage">
    <HomeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeComponent from "@/components/HomeComponent.vue";

export default {
  name: "HomeView",
  components: {
    HomeComponent,
  },
};
</script>
