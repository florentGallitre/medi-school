<template>
  <div class="itemPage">
    <PageHeader></PageHeader>
    <div class="border-radius-header">
      <div class="scrollable-content">
        <div class="item-title">{{ this.item.name }}</div>
        <div v-if="!Array.isArray(this.item.imgPath)">
          <img v-bind:src="this.item.imgPath" class="item-image" />
        </div>
        <div v-else>
          <div v-for="path in this.item.imgPath" :key="path.id">
            <img v-bind:src="path" class="item-image" />
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
import DataService from "@/service/DataService";

export default Vue.extend({
  name: "ItemPage",
  data() {
    return {
      item: [],
    };
  },
  components: { PageHeader },
  mounted() {
    DataService.load()
      .then(() => {
        let result = DataService.getItemJson(
          this.$route.params.section,
          this.$route.params.topic,
          this.$route.params.item
        );
        this.item = result;
      })
      .catch((e) => {
        console.log(e);
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

<style lang="scss">
@import url("../assets/css/item.scss");
</style>
