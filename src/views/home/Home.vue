<!-- src/views/Home.vue -->
<template>
    <HomeHero />
    <AboutUs />
    <Services />
    <Testimonials />
    <Contact />
    <Faq />

</template>
  
<script>
    import HomeHero from '@/components/home-hero/home-hero.component.vue'
    import AboutUs from '@/components/about-us/about-us.component.vue'
    import Team from '@/components/team/team.component.vue'
    import Services from '@/components/services/services.component.vue'
    import Testimonials from '@/components/testimonials/testimonials.component.vue'

    import Contact from '@/components/contact/contact.component.vue'
    import Faq from '@/components/faq/faq.component.vue'


    export default {
        name: 'Home',
        components: {
            HomeHero,    
            AboutUs,    
            Team,    
            Services,    
            Testimonials,    
 
            Contact,    
            Faq,    
          
        },
    }
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './home.styles.scss';
</style>