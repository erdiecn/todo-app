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
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  /* background-color: blueviolet; */
  width: 100%;
  display: flex;
  padding-bottom: 20px;
}

.checkmark {
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #ddd;
  -webkit-appearance: none;
  outline: none;
  cursor: pointer;
}

.checkmark:checked {
  background-color: gray;
}

.list-title {
  padding-left: 15px;
}
</style>
