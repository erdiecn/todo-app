<template>
  <div>
    <div class="todo-item" v-bind:class="{'is-complete':itemComplete}">
      <font-awesome-icon :icon="['far', 'square']" class="check-incomplete" />
      {{ itemText }}
      <button
        class="button is-success is-light"
        id="complete-button"
        v-on:click="markComplete"
      >
        <font-awesome-icon :icon="['far', 'check-square']" class="check-complete" />
      </button>
      <button class="button is-danger is-light" id="delete-button" v-on:click="deactivate(itemId)">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    itemText: String,
    itemId: Number,
    itemComplete: Boolean
  },
  methods: {
    deactivate: function(itemId) {
      console.log("deleted", itemId);
      this.$emit("delete-item");
    },

    markComplete() {
      console.log("hello");
      this.itemComplete = !this.itemComplete;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.todo-item {
  font-size: 22px;
  height: 55px;
  border-style: solid;
  border-width: 1px;
  padding: 7px;
  padding-left: 12px;
  margin: 5px;
  border-radius: 7px;
  border-color: lightgray;
}
#delete-button {
  float: right;
  /* margin: 5px;
  margin-right: 7px; */
}
#complete-button {
  float: right;
  /* margin: 5px; */
}
.check-incomplete {
  margin-right: 5px;
}

.check-complete {
  margin-right: 5px;
  text-decoration: line-through;
}

.is-complete {
  text-decoration: line-through;
  /* background-color: brown; */
}
</style>
