<template>
  <div v-bind:class="{'is-complete':isComplete}">
    <p>
      <button @click="isComplete = !isComplete">
        <font-awesome-icon :icon="['far', 'square']" v-if="isComplete == false" />
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
  },
  data(){
    return {
      isComplete: false,
    }
    
  },
  methods: {
    deactivate: function(itemId) {
      console.log("deleted", itemId);
      this.$emit("delete-item");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .is-complete{
    text-decoration: line-through;
  }

</style>
