<template>
  <div id="chart">
    <LineChart v-bind="lineChartProps" />
  </div>
</template>

<script lang="ts">
import { Chart, registerables } from "chart.js";
import { computed, defineComponent, ref } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";

Chart.register(...registerables);

export default defineComponent({
  name: "Chart",
  components: {
    LineChart,
  },
  setup() {
    const data = ref([5000, 7000, 5000, 6000, 10000, 50000]);

    const chartData = computed(() => ({
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          data: data.value,
          borderColor: "#2FCA72",
          borderWidth: "2",
        },
      ],
    }));

    const chartOptions = {
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
      },
      scales: {
        y: {
          type: "linear",
          labels: [1000, 5000, 10000, 50000, 1000000],
          maxTicksLimit: 5,
        },
      },
    };

    const { lineChartProps, lineChartRef } = useLineChart({
      //@ts-expect-error
      chartData,
      width: 400,
      height: 250,
      options: chartOptions,
    });

    return { lineChartProps, lineChartRef };
  },
});
</script>

<style>
#chart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2fca72;
}
</style>
