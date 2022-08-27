<template>
  <div class="flex flex-col mt-8">
    <span class="font-bold text-sm">Sales detail</span>
    <div class="border-[1px] border-red-10 w-full h-max-[1122px] rounded-md">
      <div class="flex p-4 border-b-[1px] border-red-10">
        <div class="flex flex-col">
          <span class="font-bold text-sm">Total Sales Overview</span>
          <span class="text-gray-20 text-xs">7 - 13 Aug, 2020</span>
        </div>
        <div
          class="ml-auto flex text-gray-20 items-center justify-center cursor-pointer"
        >
          <Icon size="18"><RefreshOutline /></Icon>
          <span class="text-xs">Refresh</span>
        </div>
        <div class="ml-8 flex items-center justify-center cursor-pointer">
          <span class="text-xs text-gray-20">Filter by | &nbsp;</span>
          <span class="text-xs">This week</span>
          <Icon size="18"><ChevronDownOutline /></Icon>
        </div>
      </div>
      <div class="flex">
        <div class="border-r-[1px] border-red-10 w-4/5 h-96 p-4">
          <div class="flex flex-col p-4">
            <span class="font-bold text-4xl">$74,729.00</span>
            <span class="text-green-10 text-xs font-bold"
              >+21% from last week</span
            >
          </div>
          <Chart />
        </div>
        <div class="flex flex-col p-4">
          <span class="text-gray-20 font-bold">Total profit</span>
          <span class="text-red-20 text-2xl font-semibold mt-2"
            >$12,545.00</span
          >
          <span class="text-green-10 text-xs font-bold"
            >+23% from last week</span
          >
          <span class="text-gray-20 font-bold mt-12">Total Products Sold</span>
          <span class="text-2xl font-semibold mt-2">329</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ChevronDownOutline, RefreshOutline } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";
import Chart from "./Chart.vue";

export default {
  components: { RefreshOutline, ChevronDownOutline, Icon, Chart },
  data() {
    return {};
  },
};
</script>
