<template>
  <div class="list-item" v-bind:class="{ 'is-complete': itemComplete }">
    <p>
      <input class="checkmark" type="checkbox" v-on:click="markComplete()" />
      {{ itemText }}
      <button class="button is-small" v-on:click="deactivate(itemId)">X</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    itemId: Number,
    itemText: String,
    itemComplete: Boolean
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
<style scoped lang="scss">
@import "../assets/main.scss";

.list-item {
  margin-bottom: 12px;
  font-size: 18px;
  cursor: pointer;
  /* background-color: aqua; */
}

.list-item:hover {
  border: 1px solid;
  border-color: $beige-light;
  padding: 5px;
}

.p {
  vertical-align: middle;
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

.checkmark {
  width: 25px;
  height: 25px;
  margin-top: -50px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
}

.checkmark:checked {
  background-color: gray;
}

.button {
  background: none;
  color: inherit;
  border: none;
  position: absolute;
  right: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
}

/* Hide the browser's default checkbox */

/* .container input {
  position: absolute;
  z-index: 99;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
} */

/* Create a custom checkbox */
/* .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #8a4d76;
} */

/* When the checkbox is checked, add a blue background */
/* .container input:checked ~ .checkmark {
  background-color: #2196f3;
} */

/* Create the checkmark/indicator (hidden when not checked) */
/* .checkmark:after {
  content: "";
  position: absolute;
  display: none;
} */

/* Show the checkmark when checked */
/* .container input:checked ~ .checkmark:after {
  display: block;
} */

/* Style the checkmark/indicator */
/* .container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
} */
</style>
