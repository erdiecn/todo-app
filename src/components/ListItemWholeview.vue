<template>
  <div v-bind:class="{ 'is-complete': isComplete }">
    <p>
      <button @click="isComplete = !isComplete">
        <font-awesome-icon :icon="['far', 'square']" v-if="isComplete == false" />
        <font-awesome-icon :icon="['fas', 'square']" v-else />
      </button>

      {{ itemText }}
      <span class="ctitle"> {{ listTitle }} </span> 

      <button v-on:click="deactivate(itemId)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItemWholeview",
  props: {
    itemText: String,
    itemId: Number,
    listTitle: String,
  },
  data() {
    return {
      isComplete: false,
    };
  },
  methods: {
    deactivate: function(itemId) {
      console.log("deleted", itemId);
      this.$emit("delete-item");
    },
  },
  computed: {
    allItems: function() {
      let allItems = [];
      this.activeItems.forEach((list) => {
        allItems.push(...list);
      });
      return allItems;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-complete {
  text-decoration: line-through;
}

.ctitle{
    color: gray;
    font-size: 0.8rem;
}
</style>
