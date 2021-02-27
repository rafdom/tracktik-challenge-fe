<template>
  <div class="main-container">
    <HomeNavigation />
    <StoreProvider :state="state">
      <router-view />
    </StoreProvider>
  </div>
</template>

<script>
import { onBeforeMount } from "vue";

import { getSites } from "../services/api/sites";
import state from "../store";

import StoreProvider from "../services/provider/StoreProvider";
import HomeNavigation from "../components/HomeNavigation";
import SiteList from "./sites/SiteList";
import SiteDetail from "./sites/SiteDetail";

export default {
  name: "Home",
  components: { StoreProvider, HomeNavigation, SiteList, SiteDetail },
  setup() {
    onBeforeMount(async () => {
      const { sitesData } = state;
      sitesData.isFetching = true;
      try {
        sitesData.isFetching = false;
        sitesData.data = await getSites(
          `${process.env.VUE_APP_TRACKTIK_SITES_API}?_limit=${sitesData.dataCount}`
        );
      } catch ({ message }) {
        sitesData.isFetching = false;
        sitesdata.hasError = message;
      }
    });

    return { state };
  },
};
</script>
<style scoped>
.main-container {
  display: grid;
  grid-template-rows: 4rem auto;
  height: 100vh;
  background-color: var(--color-off-white-main);
  overflow-x: hidden;
}
</style>
