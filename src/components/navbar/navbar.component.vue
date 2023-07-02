<template>
    <div class="navbar-container ">
      <div class="container">
        <a href="#" class="logo">
          <img src="@/assets/images/logo/image.png" class="image" width="50" height="52">

        </a>
        <div class="nav-link-container " ref="navRef">
          <div class="link close-button"><i class="fas fa-times"></i></div>
          <a href="#about-us" class="link">{{$t('about_us')}}</a>
          <a href="#services" class="link">{{$t('services')}}</a>
          <a href="#testimonials" class="link">{{$t('testimonials')}}</a>
          <a href="#contact" class="link">{{$t('contact_us')}}</a>
          <a href="#faq" class="link">{{$t('faq')}}</a>                     
        </div>
        <div class="langauge-container">
          <div class="language language-button footer-order" ref="buttonRef" @click="toggleLanguage" :class="{active: isActive}"><i class="bi bi-translate"></i></div>
          <div class="language-box" ref="boxRef">
            <div class="selection " :class="{ active: activeLanguage === 1 }" @click="setLanguage(1)">ENGLISH</div>
            <div class="selection " :class="{ active: activeLanguage === 2 }" @click="setLanguage(2)">MALAY</div>
            <div class="selection " :class="{ active: activeLanguage === 3 }" @click="setLanguage(3)">中文</div>
          </div>
        </div>
        <div class="mobile-menu" ref="menuRef"><i class="fas fa-bars"></i></div>
      </div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';  
  
  export default {
    name: 'Navbar',
    data() {
    return{
        isActive: false,
        activeLanguage: 1,
      }
    },
    setup() {
      // setup code goes here      
      const menuRef = ref(null);
      const navRef = ref(null);

      const mobileNav = () => {
        const closeButtons = navRef.value.querySelectorAll('.close-button');
        if (!closeButtons.length) throw new Error('mobile nav do not have class "close-button"');
        
        const navLinks = navRef.value.querySelectorAll('a');

        menuRef.value.addEventListener('click', (e)=>{
          e.stopPropagation();
          if (navRef.value.classList.contains('active')) return;
          navRef.value.classList.add('active');
        })

        closeButtons.forEach(button => {
          button.addEventListener('click',(e)=>{
            e.stopPropagation();
            navRef.value.classList.remove('active');
          })          
        });

        if(navLinks.length){
          navLinks.forEach(link => {
            link.addEventListener('click',(e)=>{
              e.stopPropagation();
              navRef.value.classList.remove('active');
            })                
          });
        }
      }

      onMounted(()=>{
        mobileNav(); 
      })

      return {
        menuRef,
        navRef,
        mobileNav
      };
    },     
    methods: {
      toggleLanguage() {
        this.isActive = !this.isActive;
      },
      closeLanguage() {
        this.isActive = false;
      },
      setLanguage(num) {
        this.activeLanguage = num;
        this.isActive = false;
        if(num === 1) {
          this.$i18n.locale = 'en';
        } else if(num === 2) {
          this.$i18n.locale = 'my';
        } else if(num === 3) {
          this.$i18n.locale = 'cn';
        }
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
    mounted() {
    },
    updated(){
      this.setupLanguage()
    }
  }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './navbar.styles.scss';
</style>