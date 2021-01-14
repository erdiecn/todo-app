<template>
  <div class="columns" id="list-item" v-bind:class="{ 'is-complete': itemComplete }">
    <div class="column">
      <p>{{ itemText }}</p>
    </div>
    <!-- use bluma columns to fix the layout -->
    <div class="column">
      <p>{{ itemDueDate }}</p>
    </div>
    <div class="column">
      <p class="help">{{ listTitle }}</p>
    </div>
    <button class="button is-small" id="complete-button" v-on:click="markComplete()">
      <font-awesome-icon id="icon" :icon="['fas', 'check']" v-if="itemComplete == false" />
      <font-awesome-icon id="icon" :icon="['fas', 'square']" v-else />
    </button>
    <button class="button is-small" id="delete-button" v-on:click="deactivate(itemId)">
      <font-awesome-icon id="icon" :icon="['fas', 'trash']" />
    </button>
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
  },
  computed: {
    displayDate() {
      var d = this.itemDueDate;
      console.log("d", d);
      var newMonth = d.getMonth();
      var newDay = this.itemDueDate.toJSON().slice(8, 10);

      var newYear = this.itemDueDate.toJSON().slice(0, 4);

      var month = new Array(12);
      month[0] = "January";
      month[1] = "Febuary";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";

      var showMonth = month[newMonth] + " " + newDay + ", " + newYear;

      return showMonth;
    }
  }
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
  color: red;
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
