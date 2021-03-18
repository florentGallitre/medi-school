<template>
  <div id="app">
    <div class="scrollable-content">
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
@import url("src/assets/css/_variables.scss");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.scrollable-content {
    margin-top: $headerHeight;
    overflow: auto;
    width: 100%;
    height: 100%;
}
</style>
