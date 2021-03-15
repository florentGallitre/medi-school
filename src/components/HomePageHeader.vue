<template>
  <div class="header m-0 p-0">
    <div class="logo_location position-absolute">
      <img
        class="logo position-absolute"
        src="../assets/logo.png"
        alt="medischool_logo"
      />
      <img
        class="img-fluid persona"
        src="../assets/home/medischool_header.png"
        alt=""
      />
    </div>
    <img class="img-fluid" src="../assets/home/pills.png" alt="pills_img" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePageHeader extends Vue {}
</script>

<style>
.logo {
  height: 6vh;
  width: auto;
  margin-top: 20%;
  margin-left: 5%;
}
.persona {
  margin-top: -7%;
  margin-left: -5%;
  width: auto;
  height: auto;
}
</style>
