<template>
  <div class="p-4 ml-64 mt-14 mb-12">
    <div class="flex justify-between">
      <span class="text-gray-20 font-bold text-lg">Overview</span>
      <button class="bg-red-30 text-white px-2 py-1 rounded-lg">
        <div class="flex items-center space-x-1">
          <Icon size="18"> <AddCircle /> </Icon>
          <span>Add new wine</span>
        </div>
      </button>
    </div>
    <OrderStats />
    <SalesDetail />
    <Inventory />
  </div>
</template>
<script lang="ts">
import { AddCircle } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";
import OrderStats from "./dashboard/OrderStats.vue";
import SalesDetail from "./dashboard/sales/SalesDetail.vue";
import Inventory from "./dashboard/table/Inventory.vue";
export default {
  components: {
    OrderStats,
    SalesDetail,
    Inventory,
    AddCircle,
    Icon,
  },
};
</script>
