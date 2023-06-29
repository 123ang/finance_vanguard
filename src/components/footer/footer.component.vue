<template>
  <footer>
    <div class="container">
      <div class="grid md:grid-cols-3 grid-cols-2">
        <div class="flex items-center">{{ $t('Copyright') }} {{ (new Date()).getFullYear() }} @ {{ $t('Finance Vanguard') }} </div>
        <div class="social-media-container footer-order col-span-2 md:col-span-1">          
          <a href="https://www.instagram.com/financevanguard/" target=”_blank” ref="igRef"><i class="fa-brands fa-instagram"></i></a>
          <a href="mailto:financevanguard1111@gmail.com" target=”_blank” ref="mailRef"><i class="fas fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/finance-vanguard-66b23b279/" target=”_blank” ref="inRef"><i class="fab fa-linkedin-in"></i></a>
          <a href="https://www.youtube.com/channel/UCqpKprl2mo4etmOc5sVecfA" target=”_blank” ref="ytRef"><i class="fab fa-youtube"></i></a>
          <a href="https://www.facebook.com/profile.php?id=100092988292443" target=”_blank” ref="fbRef"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="https://www.tiktok.com/@financevanguard1111" ref="xhsRef"><img src="@/assets/images/icons/xhs-main.png" alt="xhs" width="18" height="18"></a>
          <a href="#" target=”_blank” ref="tiktokRef"><i class="fab fa-tiktok" hidden></i></a>
        </div>        
      </div>
    </div>
  </footer>
</template>
  
<script>
export default {
  name: 'App',
  data() {
    return{
    }
  },
  setup() {
    // setup code goes here    
  },
  methods:{
    
  },
  mounted(){
    const igTip = this.$refs.igRef;
    new bootstrap.Tooltip(igTip, {
        title: "Instagram",
        placement: "top",
    });

    const mailTip = this.$refs.mailRef;
    new bootstrap.Tooltip(mailTip, {
        title: "Email",
        placement: "top",
    });

    const inTip = this.$refs.inRef;
    new bootstrap.Tooltip(inTip, {
        title: "LinkedIn",
        placement: "top",
    });
    
    const ytTip = this.$refs.ytRef;
    new bootstrap.Tooltip(ytTip, {
        title: "Youtube",
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
    
    const tiktokTip = this.$refs.tiktokRef;
    new bootstrap.Tooltip(tiktokTip, {
        title: "TikTok",
        placement: "top",
    });
  },  
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './footer.styles.scss';
</style>