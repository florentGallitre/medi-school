<template>
  <div class="homePage m-0 p-0 col-12">
    <HomePageHeader></HomePageHeader>
    <div class="home-component">
      <h2 class="title">Home</h2>
      <p class="introduction">
        The best place to study medicine, created just for you. You can access
        study notes, mnemonics.
      </p>
      <keep-alive>
        <component v-bind:is="currentTheme"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Auth from "../service/Auth";
import HomePageHeader from "@/components/HomePageHeader.vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "HomePage",
  components: { HomePageHeader },
  data() {
    return {
      appInfo: {},
      appSection: {},
      currentTheme: null,
    };
  },
  mounted() {
    // const slug = this.$route.params.slug;
    // console.log(slug);
    this.loadData().then((result: any) => {
      this.appInfo = result.appData;
      this.appSection = result.tree;
      console.log(this.appSection[1].children);
      // faire boucle dans les sections (2) et les mettre dans une variable et faire une boucle dans template 
      DataService.load()
        .then(() => {
          const cat = this.searchBySlug(DataService.$data.tree, slug);

          if (cat === null) {
            this.notFound = true;
          } else {
            this.currentComponent = cat.component;
          }
        })
        .catch((e) => {
          console.log(e);
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
    // searchBySlug(dataJsonTree: Array<any>, slug: string) {
    //   for (let i in dataJsonTree) {
    //     const mainCategory = dataJsonTree[i];
    //     return mainCategory;
    //     // for (let j in mainCategory) {
    //     //   const subCategory = mainCategory[j];
    //     //   if (subCategory.slug === slug) {
    //     //     return subCategory;
    //     //   }
    //     // }
      }
    
  
});
</script>

