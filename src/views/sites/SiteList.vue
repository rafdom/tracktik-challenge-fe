<template>
  <div class="site-list-container">
    <SiteListFilters />
    <SiteListHeader />
    <SiteListCardsContainer />
  </div>
</template>

<script>
import SiteListHeader from "../../components/SiteListHeader";
import SiteListFilters from "../../components/SiteListFilters";
import SiteListCardsContainer from "../../components/SiteListCardsContainer";

export default {
  name: "SiteList",
  components: {
    SiteListHeader,
    SiteListFilters,
    SiteListCardsContainer,
  },
};
</script>

<style scoped>
.site-list-container {
  height: 100vh;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: minmax(1.25rem, 0.05fr) 2.5rem minmax(1.25rem, 0.05fr) 0.05fr 0.44fr;
}
</style>
