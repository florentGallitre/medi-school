<template>
  <div-container class="bv-theme-btn-row" cols="12">
    <img class="theme-img"/>
    <span class="theme-title">{{ themeName }}</span>
  </div-container>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "ThemeButton",
  props: ["themeName"],
});
</script>

<style lang="scss">
@import url("../assets/css/themes.scss");
</style>
