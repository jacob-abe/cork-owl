<template>
  <div class="flex flex-col mt-8">
    <span class="font-bold text-sm">Inventory</span>
    <table class="table-fixed">
      <thead>
        <tr class="text-grey-20 text-sm">
          <th><input type="checkbox" /></th>
          <th>Product</th>
          <th>Rating</th>
          <th>Vintage</th>
          <th>QTY</th>
          <th>Volume</th>
          <th>Cost</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in inventoryItems">
          <th><input type="checkbox" /></th>
          <td>{{ item.name }}</td>
          <td>{{ item.rating.robert }}</td>
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
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { ArrowSort16Regular } from "@vicons/fluent";
import { Icon } from "@vicons/utils";
export default {
  components: {
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
    };
  },
};
</script>
