<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <div class="border-radius-header">
      <div class="scrollable-content">
        
        <div v-for="author in this.authors" :key="author.id">
        
        <Author :author="author"></Author>
        </div>
        <div v-for="topic in this.categories" :key="topic.name">
          <h2 id="headingAccordion" @click="toggleDisplayItemList(topic)">
            <Topic :topicName="topic.name" :icon="topic.icon" />
          </h2>
          <div
            v-show="displayItemList"
            class="itemDropdown"
            v-for="item in topic.children"
            :key="item.name"
          >
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
  props: {},
  data() {
    return {
      categories: [],
      authors: [],
      displayItemList: true,
    };
  },
  components: { PageHeader, Topic, Item, Author },
  mounted() {
    DataService.load()
      .then(() => {
        let result = DataService.getTopicJson(this.$route.params.section);
        let authorResult = DataService.getAuthor(
          this.$route.params.section
        );
        this.categories = [...result.children];
        this.authors = [...authorResult];
        console.log(this.authors);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    toggleDisplayItemList(topic) {
      this.displayItemList = !this.displayItemList;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
