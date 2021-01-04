<template>
  <div v-bind:class="{ 'is-complete': itemComplete }">
    <p>
      <button v-on:click="markComplete()">
        <font-awesome-icon
          :icon="['far', 'square']"
          v-if="itemComplete == false"
        />
        <font-awesome-icon :icon="['fas', 'square']" v-else />
      </button>

      {{ itemText }}
      {{ itemDueDate }}
      <span class="ctitle"> {{ listTitle }} </span>

      <button v-on:click="deactivate(itemId)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItemWholeview",

  props: {
    itemId: Number,
    itemText: String,
    itemComplete: Boolean,
    listTitle: String,
    itemDueDate: String
  },

  methods: {
    deactivate: function(itemId) {
      this.$store.dispatch("deleteItem", itemId);
    },

    markComplete() {
      const payload = {
        id: this.itemId,
        complete: this.itemComplete
      };
      this.$store.dispatch("completeItem", payload);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.is-complete {
  text-decoration: line-through;
}

.ctitle {
  color: gray;
  font-size: 0.8rem;
}
</style>
