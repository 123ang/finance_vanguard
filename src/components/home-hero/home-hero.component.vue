<!-- src/views/Home.vue -->
<template>
    <div class="hero-container">
        <div class="text-container">
            <div class="title-container">
                <div class="title">Expert Accounting Services <br> You Can Trust</div>
                <div class="text">
                    Welcome to our company website! We know accounting is not everyone's favorite subject and we're here to make it easier for you. Our services range from bookkeeping to tax preparation, all tailored to meet your specific needs.
                </div>
                <div class="price-button">
                    <a href="#contact">Subscribe Now!</a>
                </div>
            </div>            
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HomeHero',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './home-hero.styles.scss';
</style>