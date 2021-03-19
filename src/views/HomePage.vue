<template>
  <div class="homePage m-0 p-0 col-12">
    <HomePageHeader></HomePageHeader>
    <div class="border-radius-header">
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
            <ThemeButton
              :themeName="section.name"
              :themeImg="section.img"
              :themeColor="section.color"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomePageHeader from "@/components/HomePageHeader.vue";
import ThemeButton from "@/components/ThemeButton.vue";
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "HomePage",
  components: { HomePageHeader, ThemeButton },
  data() {
    return {
      appInfo: {},
      appSection: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      await DataService.load()
        .then(() => {
          this.appInfo = DataService.$data.appData.name;
          this.appSection = DataService.$data.tree;
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
});
</script>
