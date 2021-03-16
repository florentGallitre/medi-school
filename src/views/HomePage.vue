<template>
  <div class="homePage m-0 p-0 col-12">
    <HomePageHeader></HomePageHeader>
    <div class="home-component">
      <h2 class="title">Home</h2>
      <p class="introduction">
        The best place to study medicine, created just for you. You can access
        study notes, mnemonics.
      </p>
<<<<<<< HEAD
      <keep-alive>
        <component v-bind:is="currentTheme"></component>
      </keep-alive>
=======
      <div class="cards d-flex col-12 justify-content-center">
        <div class="card">
          <img src="" alt=""/>
          <p>Mnemonics</p>
        </div>
        <div class="card pl-2 pr-2">
          <img src="" alt="" />
          <p>Study Notes</p>
        </div>
        <div class="card">
          <img src="" alt="" />
          <p>Cases challenges</p>
        </div>
      </div>
>>>>>>> dc63468a7f93810c2fc5c700400cf685a02eff46
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

