<template>
    <section class="section" id="testimonials">
        <div class="container title-container my-0">
            <div class="title bottom-deco white">Testimonials from Clients</div>
            <p>Don't take our word for it, hear from our happy customers:</p>
        </div>
        <div class="container">
            <Splide :has-track="false" :options="splideOption">
                <SplideTrack>

                    <SplideSlide>
                        <div class="grid gap-4 md:grid-cols-2">
                            <!-- User 1 -->
                            <div class="card-container">
                                <div class="user-container">
                                    <div class="profile-picture">
                                        <img src="@/assets/images/default/user.png" alt="user" loading="lazy" width="60px" height="60">
                                    </div>
                                    <div class="detail-container">
                                        <div class="name">Ms. Azizah, Selangor</div>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="date">01 Jan 2023</div>
                                    </div>
                                </div>
                                <div class="comment-container">
                                    <p>Ever since I started working with Finance Vanguard, I've seen positive changes in my business. Not only have they helped me better understand my finances, but they've also provided invaluable advice to take my business to the next level. I highly recommend Finance Vanguard to all business owners!</p>
                                </div>
                            </div>
                            <!-- User 2 -->
                            <div class="card-container">
                                <div class="user-container">
                                    <div class="profile-picture">
                                        <img src="@/assets/images/default/user.png" alt="user" loading="lazy" width="60px" height="60">
                                    </div>
                                    <div class="detail-container">
                                        <div class="name">Mr Tan</div>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <div class="date">03 Feb 2023</div>
                                    </div>
                                </div>
                                <div class="comment-container">
                                    <p>I want to express my gratitude to the team at Finance Vanguard for efficiently managing my business accounting. They are extremely professional, friendly, and always ready to help whenever I have any questions. I feel more confident and at ease now. Thank you, Finance Vanguard!</p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div class="grid gap-4 md:grid-cols-2">
                            <!-- User 1 -->
                            <div class="card-container">
                                <div class="user-container">
                                    <div class="profile-picture">
                                        <img src="@/assets/images/default/user.png" alt="user" loading="lazy" width="60px" height="60">
                                    </div>
                                    <div class="detail-container">
                                        <div class="name">Mr Samy, Kuala Lumpur</div>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <div class="date">14 Feb 2023</div>
                                    </div>
                                </div>
                                <div class="comment-container">
                                    <p>Finance Vanguard has truly transformed how I view my business finances. They are dedicated, knowledgeable, and easy to work with. As a business owner, I can now focus more on growing my business while they handle all the financial matters. Thank you, Finance Vanguard!</p>
                                </div>
                            </div>
                          
                        </div>
                    </SplideSlide>

                </SplideTrack>
                <!-- <div class="splide__arrows">
                    <button class="splide__arrow splide__arrow--prev">Prev</button>
                    <button class="splide__arrow splide__arrow--next">Next</button>
                </div> -->
                <ul class="splide__pagination" :class="splideOption.paginationClass"></ul>
            </Splide>
        </div>
    </section>
</template>
  
<script>
import { Splide, SplideSlide, SplideTrack } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import '@splidejs/vue-splide/css/core';

export default {
    name: 'Testimonials',
    components: {
        Splide,
        SplideSlide,
        SplideTrack,
    },
    data() {
        return{
            splideOption: {
                rewind: true,
                autoplay: true,
                interval: 5000,
                arrows: false,
                paginationClass: 'custom-pagination',
            },
        }
    }
}
</script>
  
<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './testimonials.styles.scss';
</style>