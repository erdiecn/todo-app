<template>
  <div>
    <p>
      <font-awesome-icon :icon="['far', 'square']" />
      {{ itemText }}
      <button v-on:click="deactivate(itemId)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    itemText: String,
    itemId: Number
  },
  methods: {
    deactivate: function(itemId) {
      console.log("deleted", itemId);
      this.$emit("delete-item");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
