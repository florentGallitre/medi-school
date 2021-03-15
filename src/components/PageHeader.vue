<template>
  <div class="header m-0 p-0 d-flex justify-content-end align-items-center">
    <img class="logo mr-4 position-absolute" src="../assets/logo.png" alt="medischool_logo">
    <img class="pills mt-5" src="../assets/home/pills.png" alt="pills_img">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageHeader extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-image: url("/assets/home/background.jpg");
  position: relative;
  background-size: cover;
  height: 13vh;
}

.logo {
  height: 6vh;
  width: auto;
}

.pills {
    width: 100vw;
    left: 22%;
    top: -40%;
    position: absolute;
}
</style>
