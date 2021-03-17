<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <span>{{ id }}</span>
    <!-- <div v-for="topic in this.section" :key="topic.name">
      <Topic :topicName="topic.name" /> 
    </div> -->
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
      id: 0,
      topic: null,
    };
  },
  components: { PageHeader, Topic },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.topic = this.loadData().then((result: any) => {
      result.tree.map((data) => {
        return (data.id = this.id);
      });
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
