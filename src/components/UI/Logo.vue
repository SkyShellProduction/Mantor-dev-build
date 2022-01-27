<template>
  <div class="logo">
    <router-link to="/">
      <img src="@/assets/images/home/logo.svg" alt="" />
    </router-link>
  </div>
</template>
<style lang="scss">
.logo {
  display: flex;
  justify-content: center;
  padding: 50px 0 32px;
}
@media (max-width: 730px) {
  .logo {
    display: none;
  }
}
</style>
<script>
export default {
  name: "Logo",
};
</script>
