<template>
  <div class="home-nav">
    <img
      src="../assets/icons/menu-hamburger.svg"
      alt="hamburger menu"
      class="home-nav-hamburger-menu"
    />
    <div class="home-nav-header">Scheduling</div>
    <img
      src="../assets/icons/menu-block.svg"
      alt="block menu"
      class="home-nav-block-menu"
    />
    <img
      src="../assets/icons/placeholder-avatar.svg"
      alt="avatar placeholder"
      class="home-nav-avatar"
    />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home-nav {
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 2fr 6fr 1fr 1fr;
  align-items: center;
  padding: 0 1.25rem;
  background-image: linear-gradient(
    to right,
    var(--color-blue-main),
    var(--color-blue-secondary)
  );
  box-shadow: var(--box-shadow-main);
  cursor: default;
}

img {
  width: 1.5625rem;
  height: 1.5625rem;
  cursor: pointer;
  filter: var(--svg-fill-white);
}

.home-nav-hamburger-menu {
  grid-column: 1/2;
}

.home-nav-header {
  grid-column: 2/3;
  justify-self: center;
  color: var(--color-white-main);
  font-size: var(--font-size-L);
  font-family: CerealMedium;
}

.home-nav-block-menu {
  grid-column: 3/4;
  justify-self: flex-end;
}

.home-nav-avatar {
  grid-column: 4/5;
  justify-self: flex-end;
  width: 1.75rem;
  height: 1.75rem;
}
</style>
