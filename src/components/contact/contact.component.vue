<template>
    <section class="section" id="contact">
        <div class="container">
            <div class="grid gap-4 md:grid-cols-2">
                <div class="content-container">
                    <div class="title-container mt-0">
                        <div class="title bottom-deco left">{{$t('contact_us')}}</div>
                        <p>{{$t('Ready to take your financial success to the next level? Get in touch with us today to schedule a consultation.')}}</p>
                    </div>
                    <div class="contact-detail">
                        <div class="info-container">
                            <div class="icon"><i class="fas fa-mobile-alt"></i></div>
                            <div class="info">+6011 1331 4692</div>
                        </div>
                        <div class="info-container">
                            <div class="icon"><i class="fas fa-envelope"></i></div>
                            <div class="info">financevanguard1111@gmail.com</div>
                        </div>
                        <!-- <div class="info-container">
                            <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                            <div class="info">123 Main StreetAnytown, USA 99999</div>
                        </div> -->
                        <div class="form-container">
                            <form method="POST" action="https://formsubmit.co/financevanguard1111@gmail.com">
                                <div class="form-group">
                                    <label for="name">{{$t('Name')}}</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div class="form-group">
                                    <label for="email">{{$t('Email')}}</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div class="form-group">
                                    <label for="contactNumber">{{$t('Contact Number')}}</label>
                                    <input type="tel" id="contactNumber" name="contactNumber" required />
                                </div>
                                <div class="form-group">
                                    <label for="message">{{$t('Message')}}</label>
                                    <div>
                                        <textarea id="message" name="message" rows="3" required></textarea>
                                    </div>
                                </div>
                                <!-- This input field is needed for formsubmit.co to work. -->
                                <input type="hidden" name="_next" value="https://financevanguard.net/" />
                                <button type="submit">{{$t('Send')}}</button>
                            </form>
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