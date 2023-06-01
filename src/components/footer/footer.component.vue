<template>
    <footer class="footer-section">
        <div class="container">
           <div>{{ $t('Copyright') }} {{ (new Date()).getFullYear() }} @ Finance Vanguard </div>
            <div>
                Contact us
                <ul>
                    <li>Instagram</li>
                    <li>Email</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                    <li>Facebook</li>
                    <li>小红书 </li>
                    <li>TikTok</li>
                </ul>
            </div>
            <div>
                Links
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Contact Us</li>
                    <li>Testimonials</li>
                    <li>Blog</li>
                </ul>
            </div>
        
        </div>
    </footer>
</template>

<script>

export default {
    name: 'Footer',
    props: {},
    components: {},
    methods: {
    },
    mounted() { 
        const linkedInTip = this.$refs.linkedInTip;
        new bootstrap.Tooltip(linkedInTip, {
            title: "LinkedIn",
            placement: "top",
        });

        const igTip = this.$refs.igRef;
        new bootstrap.Tooltip(igTip, {
            title: "Instagram",
            placement: "top",
        });
        
        const fbTip = this.$refs.fbRef;
        new bootstrap.Tooltip(fbTip, {
            title: "Facebook",
            placement: "top",
        });
        
        const xhsTip = this.$refs.xhsRef;
        new bootstrap.Tooltip(xhsTip, {
            title: "小红书",
            placement: "top",
        });
    },
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './footer.styles.scss';
</style>