<template>
  <div class="itemPage">
    <PageHeader></PageHeader>
    <div>{{ this.item.name }}</div>
    <img v-bind:src="this.item.imgPath" class="item-image" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import PageHeader from "../components/PageHeader.vue";

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
    this.loadData().then((result: any) => {
      result.tree.forEach((cat) => {
        if (cat.slug == this.$route.params.section) {
          let categories = cat.children;
          categories.forEach((cat) => {
            if (cat.slug == this.$route.params.topic) {
              let items = cat.children;
              items.forEach((element) => {
                if (element.slug == this.$route.params.item) {
                  this.item = element;
                  this.imgPath = element.imgPath;
                }
              });
            }
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
<style scoped>
.item-image {
  width: 100%;
  height: auto;
}
</style>
