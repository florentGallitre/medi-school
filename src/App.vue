<template>
  <div id="app">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  data() {
    return {};
  },
  methods: {},
  mounted() {},
});
</script>

<style lang="scss">
@import url("./assets/css/global.scss");
</style>
