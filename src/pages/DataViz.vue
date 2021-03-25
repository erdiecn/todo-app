<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="4" class="d-flex justify-center align-center">
          <div class="pa-2">
            <h3 class="pb-2">Countries in 2018 with the highest GDP</h3>
            <p>
              Gross domestic product by country allows you to compare the economies of the nations.
              It measures everything produced by everyone in the country whether they are citizens or foreigners.
              The data has been taken from
              <a
                href="https://www.thebalance.com/gdp-by-country-3-ways-to-compare-3306012"
              >The Balance</a>.
            </p>
          </div>
        </v-col>
        <v-col id="arc" />
        <v-col id="arc2" />
        
      </v-row>
      <v-row>
        <canvas id="myChart" width="400" height="400"></canvas>
      </v-row>
    </v-container>
  </v-app>
  
</template>

<script>
import * as d3 from "d3";
import Chart from 'chart.js';

export default {
    name: "DataViz",
    data() {
        return {
            gdp: [
                {country: "USA", value: 20.5 },
                {country: "China", value: 13.4 },
                {country: "Germany", value: 4.0 },
                {country: "Japan", value: 4.9 },
                {country: "France", value: 2.8 }
            ],
            classes: [
              {className: "Vue", x: 0, y:0, yes: 5, no: 3, slices:[5, 3]},
              {className: "React", x: 0, y:200, yes: 9, no: 2, slices:[9, 2]},
              {className: "RESTAPI", x: 0, y:400, yes: 3, no: 9, slices:[3, 9]},

            ]
        };
    },
    mounted() {
        this.generateArc();
        this.chart();
    },
    methods: {
      chart() {
        var ctx = document.getElementById('myChart');
        var myDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          data: this.data.classes[0].slices
        });
        console.log(myDoughnutChart);
      },


      generateArc() {
        const w = 500;
        const h = 500;

        //Draw image
        const svg2 = d3
          .select("#arc2")
          .append("svg")
          .attr("width", w)
          .attr("height", h)

        //Scale
        const completePie = d3.pie()
          .value((d) => d)
          .sort(null)

        // const slices = completePie(this.classes)

        // console.log('slices', slices);

        const arc2 = d3.arc()
          .outerRadius(w / 2)
          .innerRadius(w / 2 - 50)

        const color = d3.scaleOrdinal(d3.schemeDark2);

        //Draw Shape
        const pies = svg2.selectAll("g")
          .data(this.classes)
          .enter()
          .append("g")
          .property("radius", w / 2)
          .attr("transform", d => `translate(${d.x},${d.y})`)

        pies.selectAll()
          .data(d => completePie(d.slices))
          .append("path")
          .attr("d", arc2)
          .attr("fill", (d, i) => color(i))



        const svg = d3
            .select("#arc")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        const sortedGDP = this.gdp.sort((a, b) => (a.value > b.value ? 1 : -1));
        

        const max_gdp = d3.max(sortedGDP, o => o.value);

        const angleScale = d3
            .scaleLinear()
            .domain([0, max_gdp])
            .range([0, 1.5 * Math.PI]);

        const arc = d3
            .arc()
            .innerRadius((d, i) => (i + 1) * 25)
            .outerRadius((d, i) => (i + 2) * 25)
            .startAngle(angleScale(0))
            .endAngle(d => angleScale(d.value));

        const g = svg.append("g");

        g.selectAll("path")
            .data(sortedGDP)
            .enter()
            .append("path")
            .attr("d", arc)
            .attr("fill", (d, i) => color(i))
            .attr("stroke", "#FFF")
            .attr("stroke-width", "1px")
            .on("mouseenter", function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 0.5);
            })
            .on("mouseout", function() {
            d3.select(this)
                .transition()
                .duration(200)
                .attr("opacity", 1);
            });

        g.selectAll("text")
            .data(this.gdp)
            .enter()
            .append("text")
            .text(d => `${d.country} -  ${d.value} Trillion`)
            .attr("x", -150)
            .attr("dy", -8)
            .attr("y", (d, i) => -(i + 1) * 25);

        g.attr("transform", "translate(200,300)");
    }
    }
};
</script>

<style>

</style>