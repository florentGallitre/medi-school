<template>
  <div class="theme-btn">
    <div class="theme-image" v-html="themeImg"></div>
    <div class="theme-title" v-html="themeName"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "ThemeButton",
  props: ["themeName", "themeImg", "themeColor"],
});
</script>

<style lang="scss">
@import url("../assets/css/themes.scss");
</style>
