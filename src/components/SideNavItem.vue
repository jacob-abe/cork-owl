<template>
  <button
    v-on:click="() => onSelect(id)"
    :class="`w-[250px] flex items-center space-x-3 pl-4 pr-16 py-4 ${textColor}`"
  >
    <Icon size="18">
      <component markRaw :is="icons[id]"></component>
    </Icon>
    <span class="text-sm">{{ name }}</span>
  </button>
</template>

<script lang="ts">
import { CloudMonitoring } from "@vicons/carbon";
import { DocumentOnePage20Regular } from "@vicons/fluent";
import { BagOutline, People, SettingsOutline } from "@vicons/ionicons5";
import { Stack } from "@vicons/tabler";
import { Icon } from "@vicons/utils";

const icons = {
  0: CloudMonitoring,
  1: Stack,
  2: BagOutline,
  3: People,
  4: DocumentOnePage20Regular,
  5: SettingsOutline,
};

export default {
  components: {
    Icon,
    CloudMonitoring,
    Stack,
    BagOutline,
    People,
    DocumentOnePage20Regular,
    SettingsOutline,
  },
  props: {
    name: String,
    id: Number,
    isSelected: Boolean,
    onSelect: Function,
  },
  //@ts-expect-error
  data() {
    return {
      icons,
      //@ts-expect-error
      textColor: this.isSelected
        ? "text-red-20 bg-red-10"
        : "text-gray-30 bg-white",
    };
  },
  watch: {
    isSelected: function (newVal: Number) {
      //@ts-expect-error this throws an error for some reason
      this.textColor = this.isSelected
        ? "text-red-20 bg-red-10"
        : "text-gray-30 bg-white";
    },
  },
  methods: {},
};
</script>
