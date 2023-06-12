<template>
    <div class="navbar-container ">
      <div class="container">
        <a href="#" class="logo">
          <img src="@/assets/images/logo/image.png" class="image" width="50" height="52">
          <img src="@/assets/images/logo/text.png" class="text" >
        </a>
        <div class="nav-link-container " ref="navRef">
          <div class="link close-button"><i class="fas fa-times"></i></div>
          <a href="#about-us" class="link">about us</a>             
          <a href="#services" class="link">services</a>             
          <a href="#testimonials" class="link">testimonials</a>             
          <a href="#pricing" class="link">pricing</a>             
          <a href="#contact" class="link">contact</a>             
          <a href="#faq" class="link">FAQ</a>             
          <a href="#blog" class="link">blog</a>             
        </div>
        <div class="mobile-menu" ref="menuRef"><i class="fas fa-bars"></i></div>
      </div>
    </div>
</template>
  
<script>
  import { ref, onMounted } from 'vue';  
  
  export default {
    name: 'Navbar',
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
      
    },
    mounted() {
    },
  }
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './navbar.styles.scss';
</style>