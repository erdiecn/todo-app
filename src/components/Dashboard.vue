<template>
    <div>
        <AddList v-on:addNewList="addList" />
        <List 
            v-for="list in activeLists"
            :key="list.id"
            :listId="list.id"
            :listTitle="list.title"
            v-on:delete-list="deleteList(list.id)"
        />
    </div>
</template>

<script>
import List from "./List";
import AddList from "./AddList";

export default {
  name: "Dashboard",
  props: {
    // title: String
  },
  components: {
    List,
    AddList
  },
  data: () => {
    return {
      lists: [
          {id: 1, title: "Chores1", active: true},
        //   {id: 2, title: "Chores2", active: true},
        //   {id: 3, title: "Chores3", active: true},
      ]
    };
  },
  computed: {
    activeLists() {
      return this.lists.filter(list => {
        return list.active;
      });
    }
  },
  methods: {
    deleteList(id) {
      this.lists = this.lists.map(obj => {
        if (obj.id == id) {
          obj.active = false;
        }
        return obj;
      });
      console.log("Almost deleted", id);
    },
    addList(listTitle){
      const id = this.lists.length !== 0 ? this.lists[this.lists.length - 1].id + 1 : 0;
      const newList = {title:listTitle, active:true, id};
      this.lists = [...this.lists, newList];
    }

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
