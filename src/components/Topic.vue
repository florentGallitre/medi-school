<template>
  <div class="topic">
    <button class="p-3">{{ topicName }}</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Topic",
  props: ["topicName"],

  data() {
    return {};
  },
  components: {},
  mounted() {},
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
