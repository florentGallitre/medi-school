<template>
  <div class="item pb-4 d-flex flex-column align-content-start">
    {{ itemName }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Item",
  props: ["itemName"],

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
