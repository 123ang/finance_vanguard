<!-- src/views/Home.vue -->
<template>
    <HomeHero />
    <AboutUs />
    <Services />
    <Testimonials />
    <Pricing />
    <Contact />
    <Faq />
    <Blog />
</template>
  
<script>
    import HomeHero from '@/components/home-hero/home-hero.component.vue'
    import AboutUs from '@/components/about-us/about-us.component.vue'
    import Services from '@/components/services/services.component.vue'
    import Testimonials from '@/components/testimonials/testimonials.component.vue'
    import Pricing from '@/components/pricing/pricing.component.vue'
    import Contact from '@/components/contact/contact.component.vue'
    import Faq from '@/components/faq/faq.component.vue'
    import Blog from '@/components/blog/blog.component.vue'

    export default {
        name: 'Home',
        components: {
            HomeHero,    
            AboutUs,    
            Services,    
            Testimonials,    
            Pricing,    
            Contact,    
            Faq,    
            Blog,    
        },
    }
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './home.styles.scss';
</style>