<script lang="ts">
import Layout from "./components/Layout.vue";
import MainNav from "./components/MainNav.vue";
import SideNav from "./components/SideNav.vue";

export default {
  name: "App",
  components: {
    SideNav,
    MainNav,
    Layout,
  },
};
</script>

<template>
  <div class="flex flex-col">
    <MainNav name="Nicholas" />
    <div class="flex">
      <SideNav />
      <Layout />
    </div>
  </div>
</template>
