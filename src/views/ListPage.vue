<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <div class="border-radius-header">
      <div class="scrollable-content">
        <Author></Author>
        <div v-for="topic in this.categories" :key="topic.name">
          <h2 class="accordion-header"  >
            <Topic 
            @click="isActive" 
            :topicName="topic.name" 
            :icon="topic.icon" />
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
              <Item v-bind:class="[active ? 'item' : 'd-none']" :itemName="item.name" />
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
    isActive() {
      this.active = !this.active
    }
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
