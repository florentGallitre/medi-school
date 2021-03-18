<template>
  <div class="header-background">
    <a href="cmd://webview-close">CLOSE</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomePageHeader extends Vue {}
</script>

<style lang="scss">
@import url("../assets/css/header.scss");

.header-background{
  height: $headerHeight;
}

</style>
