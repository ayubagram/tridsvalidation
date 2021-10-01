<template>
  <div class="clients__div">
    <div style="height: 50vh;" class="primary" data-aos="zoom-in">
      <v-container class="d-flex flex-column justify-center align-center white--text" style="height: 100%; grid-gap: 6px;">
        <div class="text-h4 text-md-h3">OUR CLIENTS</div>  
        <div style="font-size: 18px !important;">Meet Our Valuable Clients.</div>
      </v-container>  
    </div>
    <div class="py-8 py-sm-10 py-md-12 py-lg-14" style="background-color: #f5f6f9;">
      <v-container>
        <ReviewCard class="reviews" />
      </v-container>
    </div>
  </div>  
</template>

<script>
import ReviewCard from '../components/ReviewCard.vue'
export default {
  components: { ReviewCard }
}
</script>

<style scoped>
.clients {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));  
  grid-gap: 12px;
}
.client__item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.client__item img {
  max-height: 100px;
  max-width: 100px;  
}
</style>