<template>
  <div class="site-detail-profile-header">
    <router-link to="/" class="site-detail-profile-router-button">
      <button />
    </router-link>
    <div class="site-detail-profile-info">
      <div>{{ site.title }}</div>
      <div>{{ fullAddress(site.address) }}</div>
    </div>
  </div>
  <div class="site-detail-profile-contact-info-container">
    <div class="site-detail-profile-contact-info-detail">
      <img src="../assets/icons/profile.svg" alt="profile icon" />
      <div>{{ fullName(site.contacts) }}</div>
    </div>
    <div class="site-detail-profile-contact-info-detail">
      <img src="../assets/icons/phone.svg" alt="phone icon" />
      <div>{{ site.contacts.main.phoneNumber }}</div>
    </div>
    <div class="site-detail-profile-contact-info-detail">
      <img src="../assets/icons/e-mail.svg" alt="email icon" />
      <div>{{ site.contacts.main.email }}</div>
    </div>
    <div class="site-detail-profile-contact-info-detail">
      <img src="../assets/icons/pin.svg" alt="pin icon" />
      <div>{{ fullAddress(site.contacts.main.address) }}</div>
    </div>
  </div>
  <img :src="site.images[0]" alt="image" class="site-detail-profile-image" />
</template>

<script>
import { inject, ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { _getFullAddress, _getSiteDetail, _getFullName } from "../utils";
export default {
  setup() {
    const state = inject("state");
    const route = useRoute();
    const site = ref(null);

    watchEffect(() => {
      site.value = _getSiteDetail(state, route)[0];
    });

    const fullAddress = (address) => _getFullAddress(address);
    const fullName = (contact) => _getFullName(contact);

    return { site, fullAddress, fullName };
  },
};
</script>

<style scoped>
.site-detail-profile-header {
  grid-column: 1/2;
  grid-row: 1/2;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 2fr 1fr;
}

.site-detail-profile-info {
  grid-column: 2/3;
  grid-row: 1/3;
  justify-self: center;
  text-align: center;
}

.site-detail-profile-info *:nth-child(1) {
  margin-top: 1.25rem;
  font-family: CerealBlack;
  font-size: var(--font-size-M);
  color: var(--color-blue-main);
}

.site-detail-profile-info *:nth-child(2) {
  margin-top: 0.75rem;
  font-family: CerealLight;
  color: var(--color-blue-main);
}

.site-detail-profile-router-button {
  grid-column: 1/2;
  grid-row: 1/3;
  justify-self: flex-start;
  align-self: center;
  margin-left: 1.25rem;

  border: none;
  background: url("../assets/icons/left-arrow.svg") no-repeat;
  background-size: contain;
  background-position: center;
  transition: filter 150ms ease-in;
  cursor: pointer;
}

.site-detail-profile-router-button > button {
  opacity: 0;
  border: none;
}

.site-detail-profile-router-button:hover {
  filter: brightness(75%);
}

.site-detail-profile-image {
  grid-column: 1/2;
  grid-row: 1/3;
  justify-self: center;
  align-self: center;

  background: url("../assets/icons/placeholder-image.svg") no-repeat;
  background-size: 7.3125rem;
  background-position: center;
  border-radius: 50%;
  border: 4px solid var(--color-white-main);
  width: 6.6875rem;
  height: 6.6875rem;

  box-shadow: var(--box-shadow-main);
}

.site-detail-profile-contact-info-container {
  grid-column: 1/2;
  grid-row: 2/5;
  height: 100%;
  color: var(--color-white-main);
  background-color: var(--color-blue-secondary);
  font-family: CerealMedium;
  font-size: var(--font-size-S);
  padding-top: 6.5rem;
}

.site-detail-profile-contact-info-container img {
  width: 25px;
  height: 25px;
}

.site-detail-profile-contact-info-detail {
  display: grid;
  grid-template-columns: 1.25fr 8fr 0.75fr;
  gap: 0 1.5rem;
  margin-bottom: 1.25rem;
}

.site-detail-profile-contact-info-detail *:nth-child(1) {
  grid-column: 1/2;
  justify-self: flex-end;
}

.site-detail-profile-contact-info-detail *:nth-child(2) {
  grid-column: 2/3;
}

@media only screen and (min-width: 1024px) {
  .site-detail-profile-header {
    background-color: var(--color-white-main);
    border-top-left-radius: 0.75rem;
    border-top-right-radius: 0.75rem;
  }

  .site-detail-profile-contact-info-container {
    border-bottom-left-radius: 0.75rem;
    border-bottom-right-radius: 0.75rem;
  }
}
</style>
