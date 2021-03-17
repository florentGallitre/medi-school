<template>
  <div class="itemPage">
    <PageHeader></PageHeader>
    <div>{{ item.title }}</div>
    <div>{{ item.content }}</div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PageHeader from "../components/PageHeader.vue";

export default Vue.extend({
  name: "ItemPage",
  data() {
    return {
      item: [],
    };
  },
  components: { PageHeader },
  mounted() {
    this.loadData().then((result: any) => {
      this.item = result.tree[0].children;
    });
  },
  methods: {
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
<style scoped></style>
