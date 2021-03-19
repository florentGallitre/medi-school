<template>
  <div class="theme-btn">
    <div class="theme-title">{{ themeName }}</div>
    <div v-if="themeName == 'Mnemonics'"><i class="fas fa-brain"></i></div>
    <div v-if="themeName == 'Study-notes'">
      <i class="fas fa-notes-medical"></i>
    </div>
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
