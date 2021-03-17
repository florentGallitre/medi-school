<template>
  <container class="theme-btn">
    <row>
    <img class="theme-img" src="" />
    <span-col class="theme-title">{{ themeName }}</span-col>
    </row>
  </container>
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
