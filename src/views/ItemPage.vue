<template>
  <div class="itemPage">
    <PageHeader></PageHeader>
    <div class="scrollable-content">
      <div>{{ this.item.name }}</div>
      <img v-bind:src="this.item.imgPath" class="item-image" />
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
      imgPath: "",
      };
  },
  components: { PageHeader },
  mounted() {
    DataService.load()
      .then(() => {
        let result = DataService.getItemJson(this.$route.params.section , this.$route.params.topic, this.$route.params.item);
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


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("./assets/css/items.scss");

</style>
