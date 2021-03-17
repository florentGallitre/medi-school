<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <div v-for="topic in this.categories" :key="topic.name">
      <Topic :topicName="topic.name" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PageHeader from "../components/PageHeader.vue";
import Topic from "../components/Topic.vue";

export default Vue.extend({
  name: "ListPage",
  data() {
    return {
      categories: [],
    };
  },
  components: { PageHeader, Topic },
  mounted() {
    this.loadData().then((result: any) => {
      this.categories = result.tree[0].children;
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
