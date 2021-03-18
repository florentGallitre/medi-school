<template>
  <div v-show='!toggle' class="item">
    {{ itemName }}
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Item",
  props: ["itemName", "toggle"],

  data() {
    return {
      toggle: true
    };
  },
  components: {},
  mounted() {
  },
  methods: {},
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
