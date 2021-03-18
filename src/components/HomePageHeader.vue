<template>
  <div class="header-background">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePageHeader extends Vue {}
</script>

<style lang="scss">
@import url("../assets/css/header.scss");
@import url("./assets/css/_variables.scss");
.header {
    position: fixed;
    width: 100%;
    height: $headerHeight;
    
}

</style>
