<template>
  <div class="theme-ttl">
    <span class="th-title" v-html="themeTitle"></span>
    <span class="th-image" v-html="themeImg"></span>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "ThemeTitle",
  props: ["themeTitle", "themeImg"],
});
</script>
<style lang="scss">
@import url("../assets/css/themetitle.scss");
</style>
