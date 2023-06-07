<template>
  <footer>
    <div class="container">
      <div class="grid grid-cols-2">
        <div class="flex items-center">copyright</div>
        <div class="language language-button" ref="buttonRef" @click="toggleLanguage" :class="{active: isActive}"><i class="bi bi-translate"></i></div>
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
  mounted(){},
  updated(){
    this.setupLanguage()
  }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/css/main.scss';
    @import './footer.styles.scss';
</style>