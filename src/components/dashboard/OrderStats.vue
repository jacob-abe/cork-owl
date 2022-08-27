<template>
  <div class="flex space-x-16 mt-4">
    <div v-for="(item, index) in orderData">
      <div
        :class="`flex justify-between hover:scale-105 card shadow-sm rounded-md space-x-16 border-t-2 ${item.borderColor}`"
      >
        <div class="flex flex-col">
          <span class="text-sm text-gray-20">{{ item.name }}</span>
          <span class="text-lg text-black font-bold">{{ item.count }}</span>
        </div>
        <Icon :class="`${item.color}`">
          <component :is="orderData[index].icon"></component>
        </Icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { BasketOutline } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";
import { Component } from "vue";
export default {
  components: {
    BasketOutline,
    Icon,
  },
  data() {
    return {
      orderData: [
        {
          name: "Open orders",
          count: 239,
          icon: BasketOutline as Component,
          borderColor: "border-[#ffaa2c]",
          color: "text-[#ffaa2c]",
        },
        {
          name: "Orders in transit",
          count: 126,
          icon: BasketOutline as Component,
          borderColor: "border-[#2C67FF]",
          color: "text-[#2C67FF]",
        },
        {
          name: "Fulfilled orders",
          count: 1254,
          icon: BasketOutline as Component,
          borderColor: "border-[#00CF3A]",
          color: "text-[#00CF3A]",
        },
        {
          name: "Cancelled orders",
          count: 35,
          icon: BasketOutline as Component,
          borderColor: "border-[#FF1C1C]",
          color: "text-[#FF1C1C]",
        },
      ],
    };
  },
};
</script>
