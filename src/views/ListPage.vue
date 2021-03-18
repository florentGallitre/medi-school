<template>
  <div class="listPage">
    <PageHeader></PageHeader>
    <div class="border-radius-header">
      <div v-for="topic in this.categories" :key="topic.name">
            <h2 id="headingAccordion">
              <Topic @click="click" :topicName="topic.name" :icon="topic.icon" />
            </h2>
              <div class="itemDropdown" v-for="item in topic.children" :key="item.name">
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
  props: {
    
  },
  data() {
    return {
      categories: [],
      
    };
  },
  components: { PageHeader, Topic, Item, Author },
  mounted() {
    this.loadData();

    // result.tree.forEach((cat) => {
    //   if (cat.slug == this.$route.params.section) {
    //     let categories = cat.children;
    //     categories.forEach((cat) => {
    //       this.categories.push(cat);
    //     });
    //   }
    // });
  },
  methods: {
    collapse() {

    },
    async loadData() {
      await DataService.getTopicJson(this.$route.params.section).then(
        (result) => {
          console.log(result);
        }
      );
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
