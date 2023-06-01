<template>
    <div class="navbar-section ">
        <div class="container">
            <a href="/" class="logo">
              <img src="@/assets/images/logo/logo.png" alt="logo" height="40" width="182">
            </a>
            <div class="icon-container">
                <div class="close-icon"><i class="fas fa-times"></i></div>
                <a class="icon close-button" href="">Home</a> 
                <a class="icon close-button" href="">About</a> 
                <a class="icon close-button" href="">Services</a> 
                <a class="icon close-button" href="">Contact Us</a> 
                <a class="icon close-button" href="">Testimonials</a> 
                <a class="icon close-button" href="">Blog</a> 
                <div class="icon language ">
                    <i class="bi bi-translate"></i>
                    <div class="dropdown">
                        <div class="dropdown-item close-button" @click="switchLanguage('en')">English</div>
                        <div class="dropdown-item close-button" @click="switchLanguage('cn')">中文</div>
                        <div class="dropdown-item close-button" @click="switchLanguage('my')">Malay</div>
                    </div>                 
                </div> 
                <div class="icon language mobile close-button">
                  <div class="display">                      
                    <i class="bi bi-translate"></i>
                    <div class="display-text">English</div>
                  </div>
                </div>
            </div>            
            <div class="menu-icon">
              <i class="fas fa-bars"></i>              
            </div>
        </div>
        <div class="mobile-language-container">
            <div class="dropdown mobile">
                <div class="dropdown-item close-button" @click="switchLanguage('en')">English</div>
                <div class="dropdown-item close-button" @click="switchLanguage('cn')">中文</div>
                <div class="dropdown-item close-button" @click="switchLanguage('my')">Malay</div>
            </div>   
        </div>
    </div>
</template>

<script>


import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useStore } from 'vuex';


export default {
  name: 'Navbar',
  props: {},
  components: {
    CustomModal,
  },
  methods: {
    switchLanguage(lang) {
      this.$i18n.locale = lang;
      this.$store.dispatch("setLanguage", lang);
    },
    
  },
  computed: {
   
  },
  setup() {
    const store = useStore();
    const { locale } = useI18n();
    const selectedLanguage = computed({
      get: () => locale.value,
      set: (value) => store.dispatch('setLanguage', value), 
    });

    return {
      selectedLanguage,
    };
  },
  mounted() {
    
  }
}
</script>

<style lang="scss" scoped>

</style>