<template>
  <div class="site-list-filters">
    <div class="site-list-filters-input-search-container">
      <input
        type="text"
        class="site-list-filters-input-search"
        placeholder="Search..."
        v-model="search.value"
      />
      <button
        class="site-list-filters-input-button"
        @click="getFilteredSites"
      />
    </div>
    <div class="site-list-filters-filter-button-container">
      <button class="site-list-filters-filter-button" @click="toggleSorting" />
    </div>
    <div class="site-list-filters-sort-modal" v-if="isSorting.value">
      <div
        class="site-list-filters-sort-modal-background"
        @click="toggleSorting"
      />
      <div class="site-list-filters-sort-modal-options">
        <div @click="sortBy('desc')">Created At - Newest</div>
        <div @click="sortBy('asc')">Created At - Oldest</div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, ref } from "vue";
import { _filteredSites } from "../utils";
import { getSites } from "../services/api/sites";
export default {
  setup() {
    const { sitesData, searchText, isFiltering, isSorting } = inject("state");
    const search = ref(searchText);
    const data = ref(sitesData);

    const getFilteredSites = () => {
      isFiltering.value = true;
      sitesData.data = _filteredSites(data.value, search.value.value);
      search.value.value = "";
    };

    const sortBy = async (direction) => {
      isSorting.value = !isSorting.value;
      sitesData.data = await getSites(
        `${process.env.VUE_APP_TRACKTIK_SITES_API}?_sort=createdAt&_order=${direction}&_limit=${sitesData.dataCount}`
      );
    };

    const toggleSorting = () => (isSorting.value = !isSorting.value);

    return { search, getFilteredSites, isSorting, toggleSorting, sortBy };
  },
};
</script>

<style scoped>
.site-list-filters {
  grid-row: 2/3;
  display: grid;
  margin: 0 1.25rem;
}

.site-list-filters-sort-modal {
  display: grid;
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
}

.site-list-filters-sort-modal-background {
  display: block;
  position: fixed;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background-color: var(--color-grey-secondary);
  opacity: 0.9;
}

.site-list-filters-sort-modal-options {
  display: grid;
  gap: 0.75rem 0;
  position: fixed;
  text-align: center;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  width: 50%;
  padding: 0.5rem 0;
  border-radius: 0.5rem;
  background-color: var(--color-blue-secondary);
}

.site-list-filters-sort-modal-options div {
  color: var(--color-white-main);
  font-family: CerealBold;
  font-size: var(--font-size-S);
  cursor: pointer;
  transition: filter 150ms ease-in;
}

.site-list-filters-sort-modal-options div:hover {
  filter: brightness(80%);
}

.site-list-filters-filter-button-container {
  height: 45px;
  width: 45px;
  display: grid;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-15px, -15px);
  background-color: var(--color-blue-main);
  border-radius: 50%;
  box-shadow: var(--box-shadow-main);
  transition: filter 250ms ease-in;
}

.site-list-filters-filter-button-container:hover {
  filter: brightness(85%);
}

.site-list-filters-filter-button {
  border: none;
  background: url("../assets/icons/filter-btn.svg") no-repeat;
  background-size: 55% 45%;
  background-position: center;
  transition: background 150ms ease-in;
  cursor: pointer;
}

.site-list-filters-input-search-container {
  display: grid;
  grid-template-columns: 0.9fr 0.1fr;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow-secondary);
}

.site-list-filters-input-search {
  grid-column: 1/2;
  padding: 0 0.625rem;
  border: none;
  border-top-left-radius: var(--border-radius);
  border-bottom-left-radius: var(--border-radius);
  color: var(--color-grey-main);
}

.site-list-filters-input-button {
  grid-column: 2/3;
  border: none;
  border-top-right-radius: var(--border-radius);
  border-bottom-right-radius: var(--border-radius);
  background: url("../assets/icons/search-btn.svg") no-repeat;
  background-size: 100% 50%;
  background-position: center;
  background-color: var(--color-white-main);
  transition: background 150ms ease-in;
  cursor: pointer;
}

.site-list-filters-input-button:hover {
  background: url("../assets/icons/search-btn-hover.svg") no-repeat;
  background-size: 100% 50%;
  background-position: center;
  background-color: var(--color-off-white-main);
}

.site-list-filters-input-button > img:hover {
  filter: var(--svg-fill-darkgrey);
}

@media only screen and (min-width: 600px) {
  .site-list-filters-input-search-container {
    width: 35rem;
    margin: 0 auto;
  }
}

@media only screen and (min-width: 1024px) {
  .site-list-filters-sort-modal-options {
    width: 32rem;
  }
}
</style>
