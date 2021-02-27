<template>
  <div class="site-detail-container">
    <SiteDetailProfile />
  </div>
</template>

<script>
import SiteDetailProfile from "../../components/SiteDetailProfile.vue";
export default {
  name: "SiteDetail",
  components: { SiteDetailProfile },
};
</script>

<style scoped>
.site-detail-container {
  height: 100vh;
  grid-row: 2/3;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
}

@media only screen and (min-width: 1024px) {
  .site-detail-container {
    height: 90%;
    justify-self: center;
    align-self: center;
    width: 60rem;
    border-radius: 0.75rem;
    box-shadow: var(--box-shadow-main);
  }
}
</style>
