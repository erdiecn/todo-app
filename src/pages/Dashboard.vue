<template>
  <div class="body">
    <DateDisplay class="date" />
    <List
      v-for="list in this.$store.getters.allLists"
      :key="`list-${list.id}`"
      :listId="list.id"
      :listTitle="list.title"
      :listItems="list.items"
      v-on:delete-list="deleteList(list.id)"
    />
    <!-- <div class="container" v-for="list in this.$store.getters.allLists" :key="list.id">
      <ListItemWholeview
        v-for="item in list.items"
        :key="`item-${item.id}`"
        :itemId="item.id"
        :itemText="item.text"
        :itemComplete="Boolean(Number(item.complete))"
        :listTitle="list.title"
      />
    </div>-->
    <AddList />
  </div>
</template>

<script>
import List from "../components/List";
import AddList from "../components/AddList";
// import ListItemWholeview from "../components/ListItemWholeview";
import DateDisplay from "../components/DateDisplay";

export default {
  name: "Dashboard",

  components: {
    List,
    AddList,
    // ListItemWholeview,
    DateDisplay
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body {
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.date {
  height: 150px;
  /* background-color: #fdf8ef; */
  margin-left: -10px;
}
</style>
