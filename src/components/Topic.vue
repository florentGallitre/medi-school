<template>
  <div class="topic d-flex justify-content-center align-items-center">
    <button
    v-if="icon !== undefined"
      v-html="topicName + icon"
      class="accordion-button pt-2 pb-2 pl-3 pr-3 topicBtn d-flex justify-content-between"
    ></button>
    <button
    v-else
      v-html="topicName"
      class="accordion-button pt-2 pb-2 pl-3 pr-3 topicBtn d-flex justify-content-between"
    ></button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Topic",
  props: ["topicName", "icon"],

  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../assets/css/topic.scss");
</style>
