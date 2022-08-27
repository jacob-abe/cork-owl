<template>
  <div class="flex flex-col">
    <span class="font-bold text-sm">{{ name }}</span>
    <div class="flex space-x-1 mt-2">
      <span class="font-bold text-sm"> Region:</span>
      <span class="text-gray-20 text-sm">{{ region }}</span>
      <span class="font-bold text-sm pl-12"> Vintage:</span>
      <span class="text-gray-20 text-sm">{{ vintage }}</span>
    </div>
    <div class="h-[1px] bg-gray-10 w-full my-4"></div>
    <div class="flex">
      <div class="flex flex-col w-1/2">
        <span class="text-gray-20 text-sm">Rating</span>
        <div class="grid grid-cols-3 space-y-1 mt-4">
          <div v-for="(item, index) in rating">
            <TextInfo
              :label="item.name"
              :value="item.value"
              color="text-gray-20 bg-gray-10 py-1 px-2"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col w-1/2 border-l-[1px] border-gray-10 pl-4">
        <span class="text-gray-20 text-sm">Stock</span>
        <div class="grid grid-cols-3 space-y-1 mt-4">
          <div v-for="(item, index) in stock">
            <TextInfo
              :label="item.name"
              :value="item.amount"
              color="text-red-20 bg-red-10 py-1 px-2"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import TextInfo from "./TextInfo.vue";
export default {
  props: {
    name: String,
    region: String,
    vintage: String,
    rating: Object as any,
    stock: Object as any,
  },
  components: { TextInfo },
};
</script>
