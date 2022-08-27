<template>
  <div class="h-[100%] fixed border-r-2 border-gray-10 z-50 mt-14">
    <div v-for="(item, index) in navItems">
      <SideNavItem
        :name="item.name"
        :id="item.id"
        :isSelected="selectedNavItem == item.id"
        :onSelect="selectNavItem"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { CloudMonitoring } from "@vicons/carbon";
import SideNavItem from "./SideNavItem.vue";

export default {
  components: { SideNavItem, CloudMonitoring },
  data() {
    return {
      navItems: [
        { id: 0, name: "Dashboard" },
        { id: 1, name: "Inventory" },
        { id: 2, name: "Orders" },
        { id: 3, name: "Customers" },
        { id: 4, name: "Reports" },
        { id: 5, name: "Settings" },
      ],
      selectedNavItem: 0,
    };
  },
  methods: {
    selectNavItem(id: Number) {
      //@ts-expect-error
      this.selectedNavItem = id;
    },
  },
  mounted() {
    //@ts-expect-error
    this.selectNavItem(0);
  },
};
</script>
