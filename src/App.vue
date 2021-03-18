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
  methods: {
            scroll(event) {
        },
  },
  mounted() {
    DataService.load()
      .then(() => {
        this.name = DataService.$data.appData.name;
        this.categories = DataService.$data.tree;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
</script>

<style lang="scss">
@import url("./assets/css/global.scss");
@import url("./assets/css/_variables.scss");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  width: 100%;
  height: 100%;
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
