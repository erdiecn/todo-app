<template>
  <div>
    <List
      v-for="list in this.$store.getters.allLists"
      :key="`list-${list.id}`"
      :listId="list.id"
      :listTitle="list.title"
      :listItems="list.items"
      v-on:delete-list="deleteList(list.id)"
    />
    <div class="container" v-for="list in this.$store.getters.allLists" :key="list.id">
      <ListItemWholeview
        v-for="item in list.items"
        :key="`item-${item.id}`"
        :itemId="item.id"
        :itemText="item.text"
        :itemComplete="Boolean(Number(item.complete))"
        :listTitle="list.title"
      />
    </div>
    <AddList />
    <DateDisplay />
  </div>
</template>

<script>
import List from "./List";
import AddList from "./AddList";
import ListItemWholeview from "./ListItemWholeview";
import DateDisplay from "./DateDisplay";

export default {
  name: "Dashboard",

  components: {
    List,
    AddList,
    ListItemWholeview,
    DateDisplay
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
