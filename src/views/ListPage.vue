<template>
  <div class="list-page">
        <PageHeader></PageHeader>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PageHeader from '../components/PageHeader.vue';


export default Vue.extend({
  name: "Home",
  components: { PageHeader },
  mounted()
  {
    
  },
  methods:
  {
   
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.other-page {
    text-align: left;
    margin: 16px;
    max-width: 80%;
    margin: auto;
}
</style>
