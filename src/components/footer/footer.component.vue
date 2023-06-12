<template>
  <footer>
    <div class="container">
      <div class="grid md:grid-cols-3 grid-cols-2">
        <div class="flex items-center">copyright</div>
        <div class="social-media-container footer-order col-span-2 md:col-span-1">          
          <a href="#" target=”_blank” ref="igRef"><i class="fa-brands fa-instagram"></i></a>
          <a href="#" target=”_blank” ref="mailRef"><i class="fas fa-envelope"></i></a>
          <a href="#" target=”_blank” ref="inRef"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" target=”_blank” ref="ytRef"><i class="fab fa-youtube"></i></a>
          <a href="#" target=”_blank” ref="fbRef"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#" ref="xhsRef"><img src="@/assets/images/icons/xhs-main.png" alt="xhs" width="18" height="18"></a>
          <a href="#" target=”_blank” ref="tiktokRef"><i class="fab fa-tiktok"></i></a>
        </div>
        <div class="language language-button footer-order" ref="buttonRef" @click="toggleLanguage" :class="{active: isActive}"><i class="bi bi-translate"></i></div>
        <div class="language-box" ref="boxRef">
          <div class="selection " :class="{ active: activeLanguage === 1 }" @click="setLanguage(1)">ENGLISH</div>
          <div class="selection " :class="{ active: activeLanguage === 2 }" @click="setLanguage(2)">MALAY</div>
        </div>
      </div>
    </div>
  </footer>
</template>
  
<script>
import { ref } from 'vue';

export default {
  name: 'App',
  data() {
    return{
      isActive: false,
      activeLanguage: 1,
    }
  },
  setup() {
    // setup code goes here    
  },
  methods:{
    toggleLanguage() {
      this.isActive = !this.isActive;
    },
    closeLanguage() {
      this.isActive = false;
    },
    setLanguage(num) {
      this.activeLanguage = num;
      this.isActive = false;
    },
    setupLanguage(){
      const closeBox = (e) => {
        // setup function
        if(this.$refs.buttonRef.contains(e.target)||this.$refs.boxRef.contains(e.target)){
          return;
        } else {
          removeEventListener('click', closeBox);
          this.$refs.buttonRef.classList.remove('active');
          this.isActive = false;
        }
      }

      // main function
      if (this.isActive) {
        addEventListener('click', closeBox)
      } else {
        removeEventListener('click', closeBox);
      }
    }    
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
  updated(){
    this.setupLanguage()
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './footer.styles.scss';
</style>