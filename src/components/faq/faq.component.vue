<template>
    <section class="section" id="faq">
        <div class="container title-container mt-0">
            <div class="title bottom-deco">{{$t("Frequently Asked Questions")}}</div>
            <p>{{$t("Got questions? We've got answers!")}}</p>
        </div>
        <div class="container">
            <div class="grid gap-4 lg:grid-cols-4 md:grid-cols-2">
                <div class="card-container">
                    <div class="question">{{$t("What sets you apart from other accounting firms?")}}</div>
                    <p>{{$t("Our combination of expertise, personal touch, and affordable pricing is unmatched in the industry.")}}</p>
                </div>
                <div class="card-container">
                    <div class="question">{{$t("What's the best way to reach you?")}}</div>
                    <p>{{$t("You can contact us by phone, email, or by filling out the contact form on our website.")}}</p>
                </div>
                <div class="card-container">
                    <div class="question">{{$t("Do you offer a free consultation?")}}</div>
                    <p>{{$t("Yes! We offer a free consultation to help you assess your financial needs and to determine how we can best help you achieve your financial goals.")}}</p>
                </div>
                <div class="card-container">
                    <div class="question">{{$t("What sets Finance Vanguard apart from other accounting firms?")}}</div>
                    <p>{{$t("At Finance Vanguard, we believe in a personalized approach to service. Our accountants are not only experts in finance, but we also strive to understand your unique business and financial needs. We are committed to providing high-quality accounting services to help our clients achieve their financial goals.")}}</p>
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