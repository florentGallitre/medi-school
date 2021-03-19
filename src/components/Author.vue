<template>
  <div class="author">
    <span class="p-3">{{ authorName }}</span>
  
    <!-- boucle pr afficher tous les auteurs en fonction du nbre delement du tableau -->
  </div>
</template>


<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Author",
  props: ["authorName"],
});
</script>


