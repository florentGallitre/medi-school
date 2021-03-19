<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <div class="border-radius-header">
      <div class="scrollable-content">
        <Author></Author>
        <div v-for="topic in this.categories" :key="topic.name">
          <!--on click topic is active and removes display none on item class-->
          <h2 class="accordion-header" @click="isActive(topic.id)">
            <Topic 
            :topicName="topic.name" 
            :icon="topic.icon"></Topic>
          </h2>
          <div class="items"
            v-for="item in topic.children"
            :key="item.name"
          >
          <!--Change item class value when topic is clicked-->
            <router-link
              v-bind:class="[active && topicId === item.parentId ? 'item' : 'd-none']"
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
      active: false,
      topicId: String,
      none: 'none',
      categories: [],
      authorName: [],
      displayItemList: true
    };
  },
  components: { PageHeader, Topic, Item, Author },
  mounted() {
    DataService.load()
      .then(() => {
        let result = DataService.getTopicJson(this.$route.params.section);
        let authorResult = DataService.getAuthorName(
          this.$route.params.section
        );
        this.categories = [...result.children];
        this.authorName = [...authorResult];
        console.log(authorResult);
      })
      .catch((e) => {
        console.log(e);
      });
  },
  methods: {
    // Display related items if topic is clicked
    isActive(topicId: any) {
      this.active = !this.active
      this.topicId = topicId
      return topicId;
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
