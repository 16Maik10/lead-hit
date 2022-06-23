<template>
  <div class="analytics">
    <h1>Аналитика</h1>
    <h2>Аналитика по визитам</h2>
    <div class="hello" ref="chartdiv">
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Dataviz from '@amcharts/amcharts5/themes/Dataviz';
import router from '@/router';
import { mapGetters } from 'vuex';

export default {
  name: 'AnalyticsView',
  computed: {
    ...mapGetters(['dataForChart'])
  },
  mounted() {
    if(!localStorage.getItem("Leadhit-Site-Id")) {
      alert("Сначала вам необходимо ввести ID")
      router.push("/");
    }
    let root = am5.Root.new(this.$refs.chartdiv);
    root.setThemes([
      am5themes_Dataviz.new(root),
    ]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout
      })
    );
    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryDateAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {}),
        categoryField: "date"
      })
    );
    xAxis.data.setAll(this.dataForChart);
    // Create series
    let series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "visits",
        categoryXField: "date",
        fill: am5.color("#e6c8fa"),
        stroke: am5.color("#9500fc"),
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "Дата: {categoryX.formatDate('dd.MM.YYYY')}\nПросмотров: {valueY}"
        })
      })
    );
    series.data.setAll(this.dataForChart);
    series.fills.template.setAll({
      visible: true,
      fillOpacity: 1
    });

    series.strokes.template.setAll({
      strokeWidth: 2,
    });

    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("stroke"),
        })
      });
    });

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {}));

    this.root = root;
  },

  beforeDestroy() {
    if (this.root) {
      this.root.dispose();
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin-top: 15px;
}
.hello {
  height: 50vh;
  width: 90%;
  margin: 0 auto;
}
</style>
