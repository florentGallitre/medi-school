<template>
  <div class="listPage">
    <PageHeader></PageHeader>

    <Author :authorid="[]"></Author>

    <div v-for="topic in this.categories" :key="topic.name">
      <Topic :topicName="topic.name" />
      <div v-for="item in topic.children" :key="item.name">
        <router-link
          :to="{
            name: 'ItemPage',
            params: { topic: topic.slug, item: item.slug },
          }"
        >
          <Item :itemName="item.name" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PageHeader from "../components/PageHeader.vue";
import Topic from "../components/Topic.vue";
import Item from "../components/Item.vue";
import DataService from "@/service/DataService";
import Author from "../components/Author.vue";

export default Vue.extend({
  name: "ListPage",
  data() {
    return {
      categories: [],
    };
  },
  components: { PageHeader, Topic, Item, Author },
  mounted() {
    DataService.load()
      .then(() => {
        let result = DataService.getTopicJson(this.$route.params.section);
        this.categories = [...result.children];
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
