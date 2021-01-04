<template>
  <div class="body">
    <h1 class="title" id="day">{{ displayDay }}</h1>
    <div id="date">{{ displayDate }}</div>
  </div>
</template>

<script>
export default {
  name: "DateDisplay",

  // data: function() {
  //   return {
  //     date: Date().toJSON()
  //   };
  // },
  computed: {
    displayDate() {
      var d = new Date();
      var newMonth = d.getMonth();
      var newDay = new Date().toJSON().slice(8, 10);

      var newYear = new Date().toJSON().slice(0, 4);

      var month = new Array(12);
      month[0] = "January";
      month[1] = "Febuary";
      month[2] = "March";
      month[3] = "April";
      month[4] = "May";
      month[5] = "June";
      month[6] = "July";
      month[7] = "August";
      month[8] = "September";
      month[9] = "October";
      month[10] = "November";
      month[11] = "December";

      var showMonth = month[newMonth] + " " + newDay + ", " + newYear;

      return showMonth;
    },

    displayDay() {
      var d = new Date();
      var newDay = d.getDay();
      var weekDay = new Array(7);
      weekDay[0] = "Sunday";
      weekDay[1] = "Monday";
      weekDay[2] = "Tuesday";
      weekDay[3] = "Wednesday";
      weekDay[4] = "Thursday";
      weekDay[5] = "Friday";
      weekDay[6] = "Saturday";

      var showDay = weekDay[newDay];

      return showDay;
    }
  }
  // methods: {
  //   callFunction: function() {
  //     var currentDate = new Date();
  //     // console.log(currentDate);

  //     var currentDateWithFormat = new Date()
  //       .toJSON()
  //       .slice(0, 10)
  //       .replace(/-/g, "/");
  //     // console.log(currentDateWithFormat);
  //   }
  // },
  // mounted: function() {
  //   this.callFunction();
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/main.scss";
.body {
  height: 75px;
  margin: none;
  /* width: 100%; */

  border-bottom: 1px solid rgba(7, 7, 7, 0.1);
}

#day {
  margin-top: 20px;
  margin-left: -40px;
  padding-right: 20px;
  color: rgb(51, 63, 72);
  font-size: 18px;
}

#date {
  margin-left: -40px;
  margin-top: -20px;
  color: rgb(51, 63, 72);
  font-size: 16px;
}
</style>
