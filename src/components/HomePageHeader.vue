<template>
  <div class="header m-0 p-0 col-12">
    <div class="position-absolute">
      <img class="logo position-absolute" src="../assets/logo.png" alt="medischool_logo">
      <img class="img-fluid persona" src="../assets/home/medischool_header.png" alt="">
    </div>
    <img class="pills position-fixed" src="../assets/home/pills.png" alt="pills_img">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePageHeader extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-image: url("../assets/home/background.jpg");
  position: relative;
  background-size: cover;
  height: 29vh;
}

.logo {
  height: 8vh;
  width: auto;
  margin-top: 17%;
  margin-left: 7%;
}
.persona {
  margin-top: -8%;
  margin-left: -4%;
  width: 90vh;
  height: auto;
  }

.pills {
  left: 5%;
  width: 100vw;
}
</style>
