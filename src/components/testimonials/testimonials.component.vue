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
                                        <div class="name">John Smith</div>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <div class="date">01 Jan 2023</div>
                                    </div>
                                </div>
                                <div class="comment-container">
                                    <p>The team at this accounting firm helped me navigate through a difficult tax situation with ease. I'm grateful for their expertise and highly recommend their services</p>
                                </div>
                            </div>
                            <!-- User 2 -->
                            <div class="card-container">
                                <div class="user-container">
                                    <div class="profile-picture">
                                        <img src="@/assets/images/default/user.png" alt="user" loading="lazy" width="60px" height="60">
                                    </div>
                                    <div class="detail-container">
                                        <div class="name">Jane Doe</div>
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
                                    <p>I've been working with this company for years and they've always exceeded my expectations. Their attention to detail and personal touch are unmatched.</p>
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
                                        <div class="name">John Smith</div>
                                        <div class="rating">
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                            <i class="far fa-star"></i>
                                        </div>
                                        <div class="date">01 Jan 2023</div>
                                    </div>
                                </div>
                                <div class="comment-container">
                                    <p>The team at this accounting firm helped me navigate through a difficult tax situation with ease. I'm grateful for their expertise and highly recommend their services</p>
                                </div>
                            </div>
                            <!-- User 2 -->
                            <div class="card-container">
                                <div class="user-container">
                                    <div class="profile-picture">
                                        <img src="@/assets/images/default/user.png" alt="user" loading="lazy" width="60px" height="60">
                                    </div>
                                    <div class="detail-container">
                                        <div class="name">Jane Doe</div>
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
                                    <p>I've been working with this company for years and they've always exceeded my expectations. Their attention to detail and personal touch are unmatched.</p>
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