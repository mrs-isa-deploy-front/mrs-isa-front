<template>

  <div class="px-5">
    <client-header></client-header>
    <HomePageOffers></HomePageOffers>
  </div>
</template>

<script>
import ClientHeader from "@/components/clientHeader";
import HomePageOffers from "@/components/homePageOffers";
export default {
  name: "homePageClient",
  components: {HomePageOffers, ClientHeader}
}
</script>

<style scoped>

</style>
