<template>
  <div class="author">
    <img class="author-picture" v-bind:src="author.picture" />
    <span> @{{ author.name }}</span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Author",
  props: ["author"],
});
</script>

<style lang="scss">
@import url("../assets/css/author.scss");
</style>
