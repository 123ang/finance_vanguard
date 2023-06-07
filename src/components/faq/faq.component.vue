<template>
    <section class="section" id="faq">
        <div class="container title-container mt-0">
            <div class="title bottom-deco">Frequently Asked Questions</div>
            <p>Got questions? We've got answers!</p>
        </div>
        <div class="container">
            <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                <div class="card-container">
                    <div class="question">What sets you apart from other accounting firms?</div>
                    <p>Our combination of expertise, personal touch, and affordable pricing is unmatched in the industry.</p>
                </div>
                <div class="card-container">
                    <div class="question">What's the best way to reach you?</div>
                    <p>You can contact us by phone, email, or by filling out the contact form on our website.</p>
                </div>
                <div class="card-container">
                    <div class="question">Do you offer a free consultation?</div>
                    <p>Yes! We offer a free consultation to help you assess your financial needs and to determine how we can best help you achieve your financial goals.</p>
                </div>
                <div class="card-container">
                    <div class="question">What are some of the industries you specialize in?</div>
                    <p>We work with clients in a variety of industries such as healthcare, real estate, and hospitality.</p>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Faq',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './faq.styles.scss';
</style>