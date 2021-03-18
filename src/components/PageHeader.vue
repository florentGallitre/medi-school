<template>
  <div class="header m-0 p-0 d-flex justify-content-end align-items-center">
    <img
      class="logo mr-2 position-absolute"
      src="../assets/logo.png"
      alt="medischool_logo"
    />
    <img
      class="pills mt-5 position-fixed"
      src="../assets/home/pills.png"
      alt="pills_img"
    />
    <!-- Add close btn as Href="?Cf Adagio" -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageHeader extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background-image: url("../assets/home/background.jpg");
  position: relative;
  background-size: cover;
  height: 15vh;
}

.logo {
  height: 7vh;
  width: auto;
}

.pills {
  width: 100vw;
  left: 22%;
  top: -10vh;
}
</style>
