<!-- src/views/Home.vue -->
<template>
    <div class="hero-container">
        <div class="text-container">
            <div class="title-container">
                <div class="title">Finance Vanguard</div>
                <div class="text">
                    <p>Your future is our priority.</p>
                    <br>
                    <p>Understanding Your Business, Understanding Your Language: Our accountants at Finance Vanguard are not only experts in finance but also proficient in various languages, including Hokkien, Cantonese, and Teochew dialects. We believe in a personalized approach to service, which begins with clear communication.</p>
                    <br>
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