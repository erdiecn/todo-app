<template>
  <div class="body">
    <router-view class="column is-two-thirds" v-if="!this.$store.getters.isLoading">
      <div>
        <div class="pageloader is-active">
          <span class="title">Loading</span>
        </div>
      </div>
    </router-view>
    <List
      v-for="list in this.$store.getters.allLists"
      :key="`list-${list.id}`"
      :listId="list.id"
      :listTitle="list.title"
      :listItems="list.items"
      v-on:delete-list="deleteList(list.id)"
    />
    <!-- :listItems="list.items" 
    <div
      class="container"
      v-for="list in this.$store.getters.allLists"
      :key="list.id"
    >
      <ListItemWholeview
        v-for="item in list.items"
        :key="`item-${item.id}`"
        :itemId="item.id"
        :itemText="item.text"
        :itemDueDate="item.due_date"
        :itemComplete="Boolean(Number(item.complete))"
        :listTitle="list.title"
      />
    </div>-->
  </div>
</template>

<script>
import List from "../components/List";

// import ListItemWholeview from "../components/ListItemWholeview";

export default {
  name: "Dashboard",

  components: {
    List

    // ListItemWholeview
    // DateDisplay
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  color: black;
}
.date {
  height: 150px;
  /* background-color: #fdf8ef; */
  margin-left: -10px;
}
</style>
