<template>
  <div class="listPage">
        <PageHeader></PageHeader>
    <div>Topic</div>
      <div v-for="section in appSection" :key="section.children.name"></div>
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue';
import PageHeader from '../components/PageHeader.vue';


export default Vue.extend({
  name: "ListPage",
  components: { PageHeader },
  data(){
    return{ 
    appSection: {},
    } 
  }
  mounted() {
    this.loadData().then((result: any) => {
      this.appInfo = result.appData;
      this.appSection = result.tree;

    });
  },
  methods:
  {
      goTo(list: any) {

    },
    async loadData() {
      const data = await axios.get(
        `${window.location.origin + window.location.pathname}/data.json`
      );
      return data.data;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
