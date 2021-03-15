<template>
  <div class="homePage">
    <HomePageHeader></HomePageHeader>
    <div class="home col-12 d-flex flex-column justify-content-center">
      <h2 class="title">Home</h2>
      <p class="introduction">
        The best place to study medicine, created just for you. You can access
        study notes, mnemonics.
      </p>
      <div class="cards d-flex col-12 justify-content-center">
        <div class="card">
          <img src="" alt="" />
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
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Vue from "vue";
import Auth from "../service/Auth";
import HomePageHeader from "@/components/PageHeader.vue";

export default Vue.extend({
  name: "HomePage",
  components: { HomePageHeader },
  data() {
    return {
      appInfo: {},
      appSection: {},
    };
  },
  mounted() {
    console.log(Auth.getApiKey());
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
  },
});
</script>

<style scoped>
.home {
  margin-top: -20px;
  border-radius: 30px;
  background-color: white;
  height: 100%;
}
.title {
  margin-top: 25px;
  width: 55px;
  height: 24px;
  font-size: 18px;
  font-weight: bold;
  font-family: sans-serif;
}
.introduction {
  text-align: left;
  width: 295px;
  height: 51px;
  font-size: 11px;
  font-weight: normal;
  font-family: sans-serif;
}
</style>
