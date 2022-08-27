<template>
  <div class="p-4">
    <span class="text-gray-20 font-bold text-lg">Overview</span>
    <OrderStats />
    <SalesDetail />
    <Inventory />
  </div>
</template>
<script lang="ts">
import Inventory from "./dashboard/Inventory.vue";
import OrderStats from "./dashboard/OrderStats.vue";
import SalesDetail from "./dashboard/sales/SalesDetail.vue";
export default {
  components: {
    OrderStats,
    SalesDetail,
    Inventory,
  },
};
</script>
