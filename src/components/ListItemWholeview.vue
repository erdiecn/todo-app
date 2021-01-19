<template>
  <div class="columns" id="list-item" v-bind:class="{ 'is-complete': itemComplete }">
    <div class="column">
      <p>{{ itemText }}</p>
      <p class="help">
        In list
        <strong>{{ listTitle }}</strong>
      </p>
    </div>

    <!-- use bluma columns to fix the layout -->
    <div class="column">
      <p>Due on {{ itemDueDate | moment }}</p>
    </div>
    <div class="column">
      <button class="button is-small" id="complete-button" v-on:click="markComplete()">
        <font-awesome-icon id="icon" :icon="['fas', 'check']" v-if="itemComplete == false" />
        <font-awesome-icon id="icon" :icon="['fas', 'square']" v-else />
      </button>
      <button class="button is-small" id="delete-button" v-on:click="deactivate(itemId)">
        <font-awesome-icon id="icon" :icon="['fas', 'trash']" />
      </button>
    </div>
  </div>
</template>

<script>
import moment from "moment";

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
    },
    moment: function(date) {
      return moment(date);
    }
  },
  filters: {
    moment: function(date) {
      return moment(date).format("MM/DD/YYYY, h:mm a");
    }
  },
  computed: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";

#list-item {
  display: flex;
  margin-bottom: 10px;
  font-size: 18px;
  cursor: pointer;
  /* background-color: aqua; */
}

/* button:hover {
  border: 1px solid;
  border-color: $beige-light;
  padding: 5px;
} */

/* .p {
  vertical-align: middle;
} */

#delete-button {
  margin-right: 0;
  color: $primary;
}
#complete-button {
  right: 0;
  /* margin: 5px; */
  color: green;
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
  /* background-color: lightgreen; */
}

#icon {
  width: 15px;
  height: 15px;
}
.button {
  background: none;
  color: black;
  border: none !important;
  /* position: absolute;
  right: 0; */
  font: inherit;
  cursor: pointer;
  outline: inherit;
}
</style>
