<template>
  <div class="theme-btn">
    <img class="theme-img" src="" />
    <span class="theme-title">{{ themeName }}</span>
    <!-- <i class="fas fa-brain"></i> 
    <i class="fas fa-notes-medical"></i> 
    <i class="fas fa-first-aid"></i>     -->
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
