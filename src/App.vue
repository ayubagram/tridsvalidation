<template>
  <v-app>
    <Navbar />
    <Sidebar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Navbar, Sidebar, Footer },
  data: () => ({
    //
  }),
};
</script>



<style>
/* Scroll Bar */
::-webkit-scrollbar { width: 0px; }
::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}
::-webkit-scrollbar-thumb {
  background-color: #00063a;
  border-radius: 100px;
}
.v-toolbar__content, .v-toolbar__extension { padding: 0 !important; }
/* Container */
.container {
  max-width: 1250px !important;
  margin-right: auto !important;
  margin-left: auto !important;
  padding: 12px !important;
}
/*Image */
img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
}
p {
  font-size: 13px;
  margin-bottom: 0 !important;
}
/* Button */
.v-btn {
  text-transform: capitalize !important;
  font-weight: 400 !important;
  font-size: 16px !important;
}
/* Input Fields */
.v-text-field fieldset, .v-text-field .v-input__control, .v-text-field .v-input__slot { border-radius: 0 !important; }
.v-text-field input, .v-input .v-label {
  font-size: 14px !important;
  color: rgb(0 0 0 / 80%) !important;
  font-weight: 400 !important;
  letter-spacing: 1px !important;
}
.v-input input { font-size: 12px !important; }
.v-input .v-label { 
  line-height: 1 !important;
  font-size: small !important;
}
.v-text-field--outlined.v-input--is-focused fieldset { border: 1px solid #0e1f58 !important; }
.v-text-field--outlined.v-input--has-state fieldset { border: 1px solid #ff2059 !important; }
.v-input .v-icon.v-icon { font-size: 18px !important; }
.v-text-field--outlined.v-input--dense .v-label { top: 14px !important; }
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button { -webkit-appearance: none; margin: 0; }
input[type=number] { -moz-appearance: textfield; }

/* Banner */
.banner { position: relative; }
.banner img {
  max-height: calc( 100vh - 70px);
  min-height: 40vh;
}
.banner__info {
  position: absolute; 
  height: 100%;
  width: 100%;
  background-color: rgb( 0 0 0 / 25%); 
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text__banner {
  background-color: rgb(128 128 128 / 20%);
  height: 40vh;  
}
/* Sub Paragraph */
.sub__para {
  font-size: 14px;
  letter-spacing: .5px; 
  text-align: justify;
}

/* Courses */
.courses, .reviews {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23%, 1fr));
  grid-gap: 12px;
}
/* Teams */
.teams {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30%, 1fr));
  grid-gap: 20px;
}
@media (max-width: 1060px) {
  .courses, .reviews { grid-template-columns: repeat(auto-fit, minmax(32%, 1fr)); }
}
@media (max-width: 860px) {
  .courses, .teams, .reviews { grid-template-columns: repeat(auto-fit, minmax(48%, 1fr)); }
}
@media (max-width: 600px) {
  .courses, .teams, .reviews { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>