<template>
  <div class="pageHeader m-0 p-0 d-flex justify-content-end align-items-center">
      <a @click="$router.go(-1)" class="backBtn position-absolute">
        <i class="fas fa-caret-left"></i>
      </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class PageHeader extends Vue {
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/css/header.scss");
</style>
