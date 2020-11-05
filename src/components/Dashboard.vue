<template>
  <div>
    <AddList />
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
  </div>
</template>

<script>
import List from "./List";
import AddList from "./AddList";
import ListItemWholeview from "./ListItemWholeview";

export default {
  name: "Dashboard",

  components: {
    List,
    AddList,
    ListItemWholeview
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
