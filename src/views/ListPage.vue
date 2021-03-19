<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <div class="border-radius-header d-flex flex-column justify-content-center">
      <div class="scrollable-content">
        <div class="author-title">Author</div>
        <div v-for="author in this.authors" :key="author.id">
          <Author :author="author"></Author>
        </div>
        <div>
        <h1 class="col-12 d-flex justify-content-start">TOPICS</h1>
        </div>
        <div class="d-flex flex-column justify-content-center mb-2" v-for="topic in this.categories" :key="topic.name">
          <!--on click topic is active and removes display none on item class-->
          <h2 class="accordion-header" @click="isActive(topic.id)">
            <Topic 
            :topicName="topic.name" 
            :icon="topic.icon"></Topic>
          </h2>
          <div class="col-11 items d-flex flex-column justify-content-center m-auto pl-4 pr-4">
          <div
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
            <h3>
              <Item :itemName="item.name" />
            </h3>
              </router-link>
            </div>
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
      authors: [],
      displayItemList: true,
    };
  },
  components: { PageHeader, Topic, Item, Author },
  mounted() {
    DataService.load()
      .then(() => {
        let result = DataService.getTopicJson(this.$route.params.section);
        let authorResult = DataService.getAuthor(this.$route.params.section);
        this.categories = [...result.children];
        this.authors = [...authorResult];
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

<style lang="scss">
@import url("../assets/css/author.scss");
@import url("../assets/css/list.scss");
</style>
