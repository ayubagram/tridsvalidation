<template>
  <div class="home">
    <v-carousel cycle hide-delimiter-background hide-delimiters :height="`${height}vh`">
      <v-carousel-item v-for="(slide, i) in slides" :key="i" reverse-transition="fade-transition" transition="fade-transition">
        <div class="home__slide__info display-1" :style="{ backgroundImage: `url(${slide.img})` }">
          <div v-if="slide.title" style="background-color: rgb(0 0 0); border-radius: 6px; box-shadow: 0 1px 10px 0 rgb(0 0 0 / 20%);" 
            class="px-6 py-4 d-flex flex-column justify-center align-center white--text">
            {{ slide.title }}
            <div style="font-size: 16px !important; letter-spacing: .5px !important; line-height: 1.2 !important;">{{ slide.moto }}</div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
    <!-- <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: #f5f6f9;">
      <v-container>
        <div class="text-h5 text-md-h4 font-weight-bold text-center  mb-4 mb-sm-5 mb-md-6 mb-lg-7" style="line-height: 1.2;">Current Trainings</div>
        <TeamCard class="teams" />
        <div class="text-center  mt-4 mt-sm-5 mt-md-6 mt-lg-7">
          <v-btn width="150" color="primary" outlined>view all</v-btn>
        </div>
      </v-container>
    </div> -->

    <div class="py-8 py-sm-10 py-md-12 py-lg-14 white">
      <v-container class="about__section">
        <div>
          <div class="display-1">About Us</div>
          <p style="font-size: 16px !important; text-align: justify;">TriDS Validation is a leader in Biotechnologies, Medical Device, Regulatory industries. TriDS Validation helps clients meet their business objectives by providing effective project management capabilities and expertise including Regulatory Compliance & Validation Services.</p>
        </div>
        <div>
          <img src="https://image.freepik.com/free-psd/silver-letters-glass-building-facade_145275-162.jpg" alt="">
        </div>
      </v-container>
    </div>
    
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: #f5f6f9;">
      <v-container>
        <div class="text-h5 text-md-h4 font-weight-bold text-center mb-4 mb-sm-5 mb-md-6 mb-lg-7" style="line-height: 1.2;">Client's Testemonial</div>
        <ReviewCard class="reviews" />
        <div class="text-center mt-4 mt-sm-5 mt-md-6 mt-lg-7">
          <v-btn width="150" color="primary" outlined>view all</v-btn>
        </div>
      </v-container>
    </div>
    <!-- Join Us -->
    <div class="secondary" style="height: 40vh;">
      <v-container class="d-flex flex-column align-center justify-center fill-height">
        <div class="white--text text-center mb-3">
          <div class="text-h5 text-md-h4 mb-2">Ready to Join...?</div>
          <p style="font-size: 16px !important;">We are looking forward to welcome you in the TriDS Validation society. <br> Please click below to join us.</p>
        </div>
        <v-btn large color="primary" width="150">register</v-btn>
      </v-container>
    </div>
  </div>
</template>


<script>
import TeamCard from '../components/TeamCard'
import ReviewCard from '../components/ReviewCard.vue'
export default {
  components: { TeamCard, ReviewCard },
  data: () => ({
    slides: [
      { img: require('../assets/welcome.jpg'), title: 'Welcome to TriDS Validation', moto: 'Empowering organizations to succeed' },
      { img: require('../assets/process-validation.jpg'), title: 'Process Validation' },
      { img: require('../assets/medical-equipement.jpg'), title: 'Medical Equipement Validation' },
      { img: require('../assets/computer-system-validation.jpg') },
      { img: require('../assets/test-method-validation.jpg'), title: 'Test Method Validation' },
      { img: require('../assets/cleaning-validation.jpg'), title: 'Cleaning Validation' },
      { img: require('../assets/project-management.jpg') },
      { img: require('../assets/staffing-service.jpg'), title: 'Staffing Services' },
      { img: require('../assets/training.jpg'), title: 'Training Services' }
    ]
  }),
  computed: {
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 50
        case 'sm': return 65
        case 'md': return 80
        case 'lg': return 80
        default: return 80
      }
    },
  }
}
</script>

<style scoped>
.home__slide__info {
  height: 100%;
  width: 100%;
  /* background-color: rgb(0 0 0 / 40%); */
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
}

.about__section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
  grid-gap: 30px;
  align-items: center;
}

@media (max-width: 800px) {
  .about__section { grid-template-columns: 100%; grid-gap: 20px; }
}
</style>