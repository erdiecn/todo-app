<template>
  <div>
    <div>{{displayDate}} hi</div>
    <div v-bind:value="something" />
    <button v-on:click="callFunction()">date</button>
  </div>
</template>

<script>
export default {
  name: "DateDisplay",

  data: function() {
    return {
      date: Date().toJSON()
    };
  },
  computed: {
    displayDate() {
      return Date();
    }
  },
  methods: {
    callFunction: function() {
      var currentDate = new Date();
      console.log(currentDate);

      var currentDateWithFormat = new Date()
        .toJSON()
        .slice(0, 10)
        .replace(/-/g, "/");
      console.log(currentDateWithFormat);
    }
  },
  mounted: function() {
    this.callFunction();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
