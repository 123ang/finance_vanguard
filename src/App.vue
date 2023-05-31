<template>
  <div>
    <Navbar />
    <div id="app" style="height: 100%;">
      <div id="container">
        <router-view />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/navbar.component.vue'
import Footer from '@/components/footer/footer.component.vue'
import { useHead } from '@vueuse/head'
import {computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
export default {
  name: 'App',
  components: {

    Navbar,    
    Footer,
  },
  computed: {


  },
 
  setup() {

    const { t } = useI18n()

    const siteData = reactive({
      title: t('Buy and Queue for Your Favorites with NarabuQ'),
      description: t('Discover a new way to shop with NarabuQ. Queue and purchase your favorite items from around the world with ease. Join NarabuQ and transform your shopping experience.'),
      keywords: t('buy, queue, shop, NarabuQ')
    })

    useHead({
      title: computed(() => siteData.title),
      meta: [
        {
          name: 'description',
          content: computed(() => siteData.description),
        },
        {
          name: 'keywords',
          content: computed(() => siteData.keywords),
        },
      ],
    })

  }
  
}
</script>

<style>
 
</style>

