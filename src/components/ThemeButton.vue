<template>
  <div id="themeBtn" class="theme-btn">
    <div class="theme-image" v-html="themeImg"></div>
    <div class="theme-title" v-html="themeName"></div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "ThemeButton",
  props: ["themeName", "themeImg", "themeColor"],

  mounted() {
    let themeDiv = document.getElementsByClassName(
      "theme-btn"
    ) as HTMLCollectionOf<HTMLElement>;
    themeDiv[0].style.backgroundColor = "#EF7664";
    themeDiv[1].style.backgroundColor = "#E33F37";
    themeDiv[2].style.backgroundColor = "#DCE2EC";
  },
});
</script>

<style lang="scss">
@import url("../assets/css/themes.scss");
</style>
