<template>
  <div v-bind:class="{ 'is-complete': isComplete }">
    <p>
      <button @click="isComplete = !isComplete">
        <font-awesome-icon
          :icon="['far', 'square']"
          v-if="isComplete == false"
        />
        <font-awesome-icon :icon="['fas', 'square']" v-else />
      </button>

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
    // listTitle: String,
  },
  data() {
    return {
      isComplete: false
    };
  },
  methods: {
    deactivate: function(itemId) {
      console.log("deleted", itemId);
      this.$store.commit("deleteItem", itemId);
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
  height: 55px;
  font-size: 22px;
  /* border-style: solid;
  border-width: 1px; */
  padding: 7px;
  padding-left: 50px;
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
  background-color: lightgreen;
}

/* Hide the browser's default checkbox */

.container input {
  position: absolute;
  z-index: 99;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #8a4d76;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196f3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
