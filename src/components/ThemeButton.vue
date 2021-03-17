<template>
  <div class="theme-btn">
    <button class="col-lg-4">{{ themeName }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "ThemeButton",
  props: ["themeName"],
});
</script>

<style lang="scss">
@import url("../assets/css/global.scss");
</style>
