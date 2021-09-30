<template>
  <v-app-bar app color="white" height="70">
    <v-container class="d-flex align-center py-0 px-0 px-lg-3">
      <div style="height: 60px;">
        <img class="d-none d-md-block" src="../assets/logo_text.png" alt="Trids Validation">
        <img class="d-block d-md-none" src="../assets/logo.png" alt="Trids Validation">
      </div>  
      <v-spacer />
      <div class="nav d-none d-sm-none d-md-block">
        <v-btn text rounded v-for="(nav, n) in navs" :key="n" :to="nav.to" color="primary">
          <span>{{ nav.title }}</span>
        </v-btn>
      </div>
      <v-spacer />
      <v-btn class="elevation-0 mr-1" color="primary" icon to="/cart" height="40" width="40">
        <v-icon v-text="'mdi-cart'" size="16" />
      </v-btn>  
      <v-btn class="elevation-0" color="secondary" rounded to="/login">Join Now</v-btn>  
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="white d-block d-sm-block d-md-none ml-1" /> 
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    navs: [
      { title: 'Home', icon: 'mdi-home', to: '/' },
      { title: 'Courses', icon: 'mdi-post', to: '/courses' },
      { title: 'Instructor', icon: 'mdi-people', to: '/instructor' },
      { title: 'Reviews', icon: 'mdi-star', to: '/reviews' },
      { title: 'contact us', icon: 'mdi-account-box', to: '/contact' },
    ],
  }),
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