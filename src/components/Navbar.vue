<template>
  <v-app-bar app color="white" height="70" elevate-on-scroll>
    <v-container class="d-flex align-center py-0 px-0 px-lg-3">
      <div style="height: 60px;" @click="goto">
        <img class="d-none d-md-block" src="../assets/logo_text.png" alt="Trids Validation">
        <img class="d-block d-md-none" src="../assets/logo.png" alt="Trids Validation">
      </div>  
      <v-spacer />
      <div class="nav d-none d-sm-none d-md-block">
        <v-btn text tile active-class="active__nav" v-for="(nav, n) in menus" :key="n" :to="nav.to" color="primary">
          <span>{{ nav.title }}</span>
        </v-btn>
      </div>
      <v-spacer />
      <v-btn class="elevation-0 mr-1" color="primary" icon to="/cart" height="40" width="40">
        <v-icon v-text="'mdi-cart'" size="16" />
      </v-btn>  
      <v-btn class="elevation-0" color="primary" rounded to="/login">Join Now</v-btn>  
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="white d-block d-sm-block d-md-none ml-1" /> 
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    goto() {
      if(this.$route.path !== '/') this.$router.push('/')
    },
    ...mapMutations({
      setDrawer: 'SET_DRAWER',
    }),
  },
  computed: {
    ...mapState(['drawer']),
  },
}
</script>

<style scoped>
.nav .theme--light.v-btn--active:hover::before, .nav .theme--light.v-btn--active::before { opacity: 0 !important; }
.nav .v-btn { height: 70px !important; }
.active__nav {
  border-bottom: 3px solid #0e1f58;
  color: #0e1f58 !important;
  font-weight: 500 !important;
}
</style>