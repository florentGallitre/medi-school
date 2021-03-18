<template>
  <div class="topic d-flex justify-content-center">
    <button v-html="icon" class="topicBtn col-10">
      {{ topicName }}
    </button>
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
