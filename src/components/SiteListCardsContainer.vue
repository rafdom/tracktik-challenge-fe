<template>
  <div class="site-list-cards-container">
    <div class="site-list-cards" v-for="site of data" :key="site">
      <img :src="site.images[0]" class="site-list-cards-image" />
      <div class="site-list-cards-information">
        <div>{{ site.title }}</div>
        <div>{{ fullAddress(site.address) }}</div>
        <div>{{ fullName(site.contacts) }}</div>
      </div>
      <router-link :to="'/' + site.id" class="site-list-cards-router-button">
        <button />
      </router-link>
    </div>
    <button
      class="site-list-cards-addmore-button"
      @click="loadMoreData"
      v-if="!isFiltering.value"
    >
      Load More...
    </button>
    <button
      class="site-list-cards-addmore-button"
      @click="revertSitesData"
      v-else
    >
      Return
    </button>
  </div>
</template>

<script>
import { inject, toRefs } from "vue";

import { _getFullAddress, _getFullName } from "../utils";
import { getSites } from "../services/api/sites";

export default {
  setup() {
    const { sitesData, isFiltering } = inject("state");

    const fullAddress = (address) => _getFullAddress(address);
    const fullName = (contact) => _getFullName(contact);
    const loadMoreData = async () => {
      sitesData.dataCount += 5;
      sitesData.data = await getSites(
        `${process.env.VUE_APP_TRACKTIK_SITES_API}?_limit=${sitesData.dataCount}`
      );
    };
    const revertSitesData = async () => {
      isFiltering.value = false;
      sitesData.data = await getSites(
        `${process.env.VUE_APP_TRACKTIK_SITES_API}?_limit=${sitesData.dataCount}`
      );
    };

    const { data } = toRefs(sitesData);
    return {
      data,
      fullAddress,
      fullName,
      loadMoreData,
      isFiltering,
      revertSitesData,
    };
  },
};
</script>

<style scoped>
.site-list-cards-container {
  grid-row: 5/6;
  height: 100%;
}

.site-list-cards {
  display: grid;
  grid-template-columns: 2.5fr 5fr 2.5fr;
  grid-template-rows: repeat(3, 1fr);
  padding: 1rem;
  margin: 0 1.25rem 1rem;
  background-color: var(--color-blue-secondary);
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-secondary);
}

.site-list-cards-image {
  /* placeholder image for the loading src=url */
  background: url("../assets/icons/placeholder-image.svg") no-repeat;
  background-size: 5.3125rem;
  background-position: center;
  border-radius: 50%;
  border: 2px solid var(--color-white-main);

  grid-column: 1/2;
  grid-row: 1/4;
  justify-self: center;
  align-self: center;
  width: 4.6875rem;
  height: 4.6875rem;
}

.site-list-cards-information {
  grid-column: 2/3;
  grid-row: 1/4;
  margin: 0 0.75rem;
  color: var(--color-white-main);
}

.site-list-cards-information *:nth-child(1) {
  font-family: CerealBlack;
  font-size: var(--font-size-M);
}

.site-list-cards-information *:nth-child(2) {
  font-family: CerealLight;
  padding: 0.75rem 0;
}

.site-list-cards-information *:nth-child(3) {
  font-family: CerealMedium;
}

.site-list-cards-router-button {
  grid-column: 3/4;
  grid-row: 1/4;
  justify-self: flex-end;

  background: url("../assets/icons/right-arrow.svg") no-repeat;
  background-size: 100%;
  background-position: center;
  cursor: pointer;
  transition: filter 150ms ease-in;
}

.site-list-cards-router-button > button {
  opacity: 0;
  border: none;
}

.site-list-cards-router-button:hover {
  filter: brightness(80%);
}

.site-list-cards-addmore-button {
  width: 100%;
  margin-bottom: 2rem;
  border: none;
  font-family: CerealBlack;
  font-size: var(--font-size-S);
  color: var(--color-blue-main);
  background-color: transparent;
  cursor: pointer;
}

@media only screen and (min-width: 750px) {
  .site-list-cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(28.125rem, 1fr));
  }
}
</style>
