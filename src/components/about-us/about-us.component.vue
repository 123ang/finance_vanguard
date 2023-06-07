<template>
    <section class="section" id="about-us">
        <div class="container title-container my-0">
            <div class="title bottom-deco white">About Us</div>
            <p>We are a team of dedicated and experienced accountants who are passionate about helping individuals and businesses with their financial needs. With decades of experience under our belts, you can count on us to provide the best service possible.</p>
        </div>
        <div class="container">
            <div class="grid md:grid-cols-3 grid-cols-1 gap-4">
                <div class="card-container">
                    <h4 class="title"><i class="bi bi-flag-fill"></i>Our Mission</h4>
                    <p>We are committed to providing high-quality accounting services that help our clients achieve their financial goals.</p>
                </div>
                <div class="card-container">
                    <h4 class="title"><i class="fas fa-binoculars"></i>Our Vision</h4>
                    <p>We strive to be the most trusted and sought-after accounting firm in the industry.</p>
                </div>
                <div class="card-container">
                    <h4 class="title"><i class="bi bi-trophy-fill"></i>Our Values</h4>
                    <div class="list">
                        <div class="li-dot">Integrity</div>
                        <div class="li-dot">Excellence</div>
                        <div class="li-dot">Customer service</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'AboutUs',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './about-us.styles.scss';
</style>