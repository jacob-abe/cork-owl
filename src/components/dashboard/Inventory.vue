<template>
  <div class="flex flex-col mt-8">
    <span class="font-bold text-sm">Inventory</span>
    <table class="table-fixed">
      <thead class="table-header-group border-b-[1px] border-gray-10 h-16">
        <tr class="text-grey-20 text-sm text-center">
          <th><input type="checkbox" :onchange="toggleSelectAll" /></th>
          <th class="cursor-pointer">
            <span>Product</span>
            <Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
          <th class="cursor-pointer">
            Rating<Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
          <th class="cursor-pointer">
            Vintage<Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
          <th class="cursor-pointer">
            QTY<Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
          <th class="cursor-pointer">
            Volume<Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
          <th class="cursor-pointer">
            Cost<Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
          <th class="cursor-pointer">
            Price<Icon size="16" class="text-gray-20 ml-1"
              ><ArrowSort16Regular
            /></Icon>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in inventoryItems"
          class="text-center h-16 border-b-[1px] border-gray-10 text-gray-20 text-sm"
        >
          <th>
            <input type="checkbox" :checked="selectAll" />
          </th>
          <td>
            <div class="flex space-x-2 justify-left ml-8">
              <div class="w-12 h-12 bg-gray-10 rounded-sm"></div>
              <div class="flex flex-col items-start">
                <span class="text-base font-semibold text-[#262730]">{{
                  item.name
                }}</span>
                <span class="text-xs text-gray-20">{{ item.region }}</span>
              </div>
            </div>
          </td>
          <td class="text-gray-30 text-sm">
            <span class="px-2 py-[2px] bg-gray-10 rounded-md">{{
              item.rating.robert
            }}</span>
          </td>
          <td>{{ item.vintage }}</td>
          <td>
            {{
              item.stock
                .map((item: any) => item.amount)
                .reduce((x: number, y: number) => x + y, 0)
            }}
          </td>
          <td>{{ item.volume }}</td>
          <td>{{ item.cost }}</td>
          <td>{{ item.price }}</td>
          <td class="cursor-pointer" v-on:click="() => onExpand(index)">
            <Icon
              size="16"
              v-if="expandedItem.id == index && expandedItem.isExpanded"
            >
              <ChevronUpOutline />
            </Icon>
            <Icon
              size="16"
              v-if="!expandedItem.isExpanded || expandedItem.id != index"
            >
              <ChevronDownOutline />
            </Icon>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ArrowSort16Regular } from "@vicons/fluent";
import { ChevronDownOutline, ChevronUpOutline } from "@vicons/ionicons5";
import { Icon } from "@vicons/utils";
export default {
  components: {
    ChevronUpOutline,
    ChevronDownOutline,
    ArrowSort16Regular,
    Icon,
  },
  data() {
    return {
      inventoryItems: [
        {
          name: "Staglin Family Vineyard",
          region: "France · Sauternes",
          vintage: "1950's",
          rating: {
            james: "JS 95",
            robert: "RP 80",
            antonio: "AG 75",
            spectator: "WS 79",
          },
          stock: [
            { name: "Possimus", amount: 3 },
            { name: "Downtown condo", amount: 5 },
          ],
          volume: "Standard (750ml)",
          cost: "$56.95",
          price: "$56.95",
        },
        {
          name: "Bibi Graetz Testamatta Tos",
          region: "Chianti · Blends and Other",
          vintage: "2015",
          rating: {
            james: "JS 95",
            robert: "RP 80",
            antonio: "AG 75",
            spectator: "WS 79",
          },
          stock: [
            { name: "Possimus", amount: 43 },
            { name: "Downtown condo", amount: 95 },
          ],
          volume: "Magnum (1500ml)",
          cost: "$71.95",
          price: "$72.95",
        },
        {
          name: "Cayuse Syrah en Chamber",
          region: "Syrah",
          vintage: "2012",
          rating: {
            james: "JS 95",
            robert: "RP 80",
            antonio: "AG 75",
            spectator: "WS 79",
          },
          stock: [
            { name: "Possimus", amount: 43 },
            { name: "Downtown condo", amount: 95 },
          ],
          volume: "Standard (750ml)",
          cost: "$136.95",
          price: "$137.95",
        },
        {
          name: "K Vintners Syrah Cattle king",
          region: "France · Sauternes",
          vintage: "2010",
          rating: {
            james: "JS 95",
            robert: "RP 80",
            antonio: "AG 75",
            spectator: "WS 79",
          },
          stock: [
            { name: "Possimus", amount: 43 },
            { name: "Downtown condo", amount: 95 },
          ],
          volume: "Standard (750ml)",
          cost: "$76.95",
          price: "$72.95",
        },
        {
          name: "L'Ecole No. 41 Ferguson",
          region: "United state · California · Blends",
          vintage: "2004",
          rating: {
            james: "JS 95",
            robert: "RP 80",
            antonio: "AG 75",
            spectator: "WS 79",
          },
          stock: [
            { name: "Possimus", amount: 43 },
            { name: "Downtown condo", amount: 95 },
          ],
          volume: "Standard (750ml)",
          cost: "$76.95",
          price: "$72.95",
        },
      ],
      expandedItem: { id: 0, isExpanded: false },
      selectAll: false,
    };
  },
  methods: {
    onExpand(id: number) {
      //@ts-expect-error
      let currentExpansion = this.expandedItem.isExpanded;
      //@ts-expect-error
      this.expandedItem = { id, isExpanded: !currentExpansion };
      console.log(id);
    },
    toggleSelectAll() {
      //@ts-expect-error
      this.selectAll = !this.selectAll;
    },
  },
};
</script>
