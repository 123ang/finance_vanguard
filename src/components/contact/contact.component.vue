<template>
    <section class="section" id="contact">
        <div class="container">
            <div class="grid gap-4 md:grid-cols-2">
                <div class="content-container">
                    <div class="title-container mt-0">
                        <div class="title bottom-deco left">Contact Us</div>
                        <p>Ready to take your financial success to the next level? Get in touch with us today to schedule a consultation.</p>
                    </div>
                    <div class="contact-detail">
                        <div class="info-container">
                            <div class="icon"><i class="fas fa-mobile-alt"></i></div>
                            <div class="info">555-555-1234</div>
                        </div>
                        <div class="info-container">
                            <div class="icon"><i class="fas fa-envelope"></i></div>
                            <div class="info">info@accountingservices.com</div>
                        </div>
                        <div class="info-container">
                            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="info">123 Main StreetAnytown, USA 99999</div>
                        </div>
                    </div>                    
                </div>
                <div class="image-container">
                    <div class="image"></div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<script>
export default {
    name: 'Contact',
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './contact.styles.scss';
</style>