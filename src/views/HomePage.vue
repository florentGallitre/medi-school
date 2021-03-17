<template>
  <div class="homePage m-0 p-0 col-12">
    <HomePageHeader></HomePageHeader>
    <div class="home-component">
      <h2 class="title">Home</h2>
      <p class="introduction">
        The best place to study medicine, created just for you. You can access
        study notes, mnemonics.
      </p>
      <div class="row d-flex justify-content-center">
        <div v-for="section in appSection" :key="section.name">
          <router-link
            :to="{ name: 'ListPage', params: { section: section.slug } }"
          >
            <ThemeButton :themeName="section" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import HomePageHeader from "@/components/HomePageHeader.vue";
import ThemeButton from "@/components/ThemeButton.vue";

export default Vue.extend({
  name: "HomePage",
  components: { HomePageHeader, ThemeButton },
  data() {
    return {
      appInfo: {},
      appSection: {},
      currentTheme: null,
    };
  },
  mounted() {
    this.loadData().then((result: any) => {
      this.appInfo = result.appData;
      this.appSection = result.tree;
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
  },
});
</script>
