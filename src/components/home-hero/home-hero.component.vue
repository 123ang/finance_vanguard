<!-- src/views/Home.vue -->
<template>
    <div class="hero-container">
        <div class="text-container">
            <div class="title-container">
                <div class="title">Finance Vanguard</div>
                <div class="text">
                    Your future is our priority.
                </div>
                <div class="price-button">
                    <a href="#contact">Contact Us Now!</a>
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