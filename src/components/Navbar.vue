<template>
  <v-app-bar app color="white" :height="height" elevate-on-scroll>
    <v-container class="d-flex align-center align-lg-end justify-space-between py-0" style="height: 100%;">
      <div style="height: 62px;" @click="goto">
        <img class="d-none d-md-block" src="../assets/logo_text.png" alt="Trids Validation">
        <img class="d-block d-md-none" src="../assets/logo.png" alt="Trids Validation">
      </div>
      <v-spacer />
      <div class="d-none d-sm-none d-md-none d-lg-flex flex-column align-end">
        <div class="d-flex justify-end py-3" style="grid-gap: 8px;">
          <v-btn class="elevation-0" color="primary" to="/login" width="200">
            <v-icon v-text="'mdi-account-group'" left />
            <span>Staffing</span>
          </v-btn>  
          <v-btn class="elevation-0" color="primary" to="/login" width="200">
            <v-icon v-text="'mdi-school'" left />
            <span>TriDS Academy</span>
          </v-btn> 
        </div>          
        <v-spacer />
        <div class="nav">
          <ul class="main__ul">
            <li class="nav__item" v-for="(menu, n) in menus" :key="n">
              <v-btn text tile active-class="active__nav" :to="menu.to" color="primary">
                <span>{{ menu.title }}</span>
                <v-icon v-if="menu.children" right v-text="'mdi-menu-down'" />
              </v-btn>
              <ul class="child__ul">
                <li v-for="(child, c) in menu.children" :key="c" class="nav__item__child">
                  <v-btn text block tile active-class="active__nav" :to="child.to" color="primary">{{ child.title }}</v-btn>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <v-app-bar-nav-icon @click.stop="setDrawer(!drawer)" class="white d-block d-sm-block d-md-block d-lg-none" /> 
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
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 70
        case 'sm': return 70
        case 'md': return 70
        case 'lg': return 100
        default: return 100
      }
    },
  },
  created() {
    if(this.$vuetify.breakpoint.name == 'lg') this.setDrawer(false)
  }
}
</script>

<style scoped>
.nav .theme--light.v-btn--active:hover::before, .nav .theme--light.v-btn--active::before { opacity: 0 !important; }
.nav .v-btn { height: 45px !important; }
.active__nav {
  border-bottom: 3px solid #0e1f58;
  color: #0e1f58 !important;
  font-weight: 500 !important;
}
.nav ul {
  margin: 0 !important;
  padding: 0 !important;
  list-style: none !important;
}
.main__ul { display: flex; }
.nav__item { position: relative; }
.child__ul { 
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0 4px 12px 0 rgb(0 0 0 / 10%);
  min-width: 200px;
}
.nav__item__child .v-btn { justify-content: flex-start !important; }
.nav__item:hover { background-color: #0e1f583f !important; }
.nav__item:hover .child__ul { display: block; }
</style>