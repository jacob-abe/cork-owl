<template>
  <div class="p-4">
    <span class="text-gray-20 font-bold text-lg">Overview</span>
    <OrderStats />
    <SalesDetail />
    <Inventory />
  </div>
</template>
<script lang="ts">
import OrderStats from "./dashboard/OrderStats.vue";
import SalesDetail from "./dashboard/sales/SalesDetail.vue";
import Inventory from "./dashboard/table/Inventory.vue";
export default {
  components: {
    OrderStats,
    SalesDetail,
    Inventory,
  },
};
</script>
