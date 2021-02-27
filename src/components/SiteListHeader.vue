<template>
  <div class="site-list-header">
    <div class="site-list-header-text">site list</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.site-list-header {
  height: 100%;
  grid-row: 4/5;
  justify-self: flex-start;
  align-self: center;
  display: grid;
  margin-top: 1rem;
  margin-left: 1.25rem;
  font-size: 1.5rem;
  font-family: CerealExtraBold;
  font-variant-caps: all-petite-caps;
  font-kerning: auto;
  color: var(--color-blue-main);
}

.site-list-header-text {
  align-self: flex-end;
  padding-bottom: 1.5rem;
}

@media only screen and (min-height: 1264px) {
  .site-list-header-text {
    padding-bottom: 1.25rem;
  }
}
</style>
