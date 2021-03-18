<template>
  <div class="listPage">
    <PageHeader></PageHeader>
<!-- insérer ici le composant category -->
    <Author :authorid=[]></Author>
    <!-- {{ this.categories }} -->

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
    this.loadData().then((result: any) => {
      result.tree.forEach((cat) => {
        if (cat.slug == this.$route.params.section) {
          let categories = cat.children;
          categories.forEach((cat) => {
            this.categories.push(cat);
          });
        }
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
