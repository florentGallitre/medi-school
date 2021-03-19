<template>
  <div class="theme-ttl">
    <div class="theme-title"> {{ themeTitle }}</div>
    <div v-if="themeTitle == 'Mnemonics'"><i class="fas fa-brain"></i></div>
    <div v-if="themeTitle == 'Study-notes'">
      <i class="fas fa-notes-medical"></i>
    </div>
  </div>
</template>


<script lang="ts">
import { Vue } from "vue-property-decorator";

export default Vue.extend({
  name: "ThemeTitle",
  props: ["themeTitle"],
});
</script>
<style lang="scss">
@import url("../assets/css/themetitle.scss");
</style>