<template>
  <li>
    <div class="body">
      <!-- sort is acting weird will not work without importing list.id hardcoded -->
      <div class="control">
        <label class="checkbox">
          <input
            class="checkmark"
            type="checkbox"
            v-bind:value="listId"
            v-model="checkedLists"
            @change="updateFilterLists"
          />
        </label>
      </div>
      <div class="list-title">{{ listTitle }}</div>
      <button class="button is-small" id="delete-button" v-on:click="deactivateList(listId)">
        <font-awesome-icon id="icon" :icon="['fas', 'trash']" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    listId: Number,
    listTitle: String
  },

  data() {
    return {
      checkedLists: []
    };
  },

  methods: {
    updateFilterLists: function(e) {
      this.$store.dispatch("updateFilterLists", e.target);
      console.log("called");
    },

    deactivateList: function(listId) {
      this.$store.dispatch("deleteList", listId);
      console.log("delete list", listId);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
.body {
  /* background-color: blueviolet; */
  width: 100%;
  display: flex;
  padding-bottom: 20px;
  /* background-color: aqua; */
}

.checkmark {
  width: 15px;
  height: 15px;
  margin-top: 4px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.checkmark:checked {
  background-color: rgb(51, 63, 72);
}

.list-title {
  padding-left: 15px;
}

#delete-button {
  margin-right: 1px;
  color: $primary;
  opacity: 0.5;
  margin-top: -3px;
}

#delete-button:hover {
  color: $primary;
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
