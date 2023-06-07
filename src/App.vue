<template>
  <div>

    <div id="app" style="height: 100%;">
      <Navbar />
      <div id="container">
        <router-view />
      </div>
      <Footer />
    </div>

  </div>
</template>

<script>
  import Navbar from '@/components/navbar/navbar.component.vue'
  import Footer from '@/components/footer/footer.component.vue'
  export default {
    name: 'App',
    components: {
      Navbar,    
      Footer,
    },
    computed: {


    }
  }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
</style>