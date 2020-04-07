<template>
  <div id="app" class>

    <MyNav></MyNav>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import MyNav from "@/components/Nav.vue";
import Footer from "@/components/footer.vue";
export default {

    components: {
    MyNav,
    Footer
   
  },
};
</script>

<style lang="scss">
</style>
