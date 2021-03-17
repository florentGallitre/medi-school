<template>
  <div class="itemPage">
    <PageHeader></PageHeader>
    <div>{{ this.$route.params }}</div>
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
      result.tree.forEach((cat) => {
        if ((cat.slug = this.$route.params)) {
          this.item = result.tree[0].children;
        }
      });
    });
  },
  methods: {
    async loadData() {
      const data = await axios.get(
        `${window.location.origin + window.location.pathname}/data.json`
      );
      console.log(data.data);
      return data.data;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
