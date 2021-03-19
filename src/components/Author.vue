<template>
  <div class="author">
    <img class="author-picture" v-bind:src="author.picture" />
    <span class="author-name"> @{{ author.name }} </span>
    <a :href="author.link" target="_blank"><i class="fab fa-instagram"></i></a>
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
