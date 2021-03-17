<template>
  <div class="theme-btn">
    <img class="theme-img" src="" />
    <span class="theme-title">{{ themeName }}</span>
  </div>
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
