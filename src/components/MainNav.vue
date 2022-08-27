<template>
  <div
    class="z-50 fixed bg-red-20 w-full text-white flex py-3 px-6 items-center"
  >
    <span class="text-lg text-red-10">Cork owl</span>
    <div
      class="bg-white rounded-sm flex justify-center items-center py-1 px-2 text-gray-400 ml-24 space-x-2"
    >
      <Icon>
        <IosSearch size="16" />
      </Icon>
      <input
        class="bg-white outline-none w-56 placeholder:text-gray-20 text-black"
        type="text"
        placeholder="Search wines, customers here..."
      />
    </div>
    <div class="ml-auto flex">
      <Icon size="24"> <MdNotificationsOutline /> </Icon>
    </div>
    <span class="ml-9">{{ name }}</span>
    <Icon size="24" class="ml-[9px]"> <UserProfile /> </Icon>
  </div>
</template>

<script lang="ts">
import { UserProfile } from "@vicons/carbon";
import { IosSearch, MdNotificationsOutline } from "@vicons/ionicons4";
import { Icon } from "@vicons/utils";
export default {
  components: { UserProfile, MdNotificationsOutline, IosSearch, Icon },
  props: {
    name: String,
  },
};
</script>
