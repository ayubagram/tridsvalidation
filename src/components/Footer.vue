<template>
  <v-footer color="white" class="py-6 py-sm-8 py-md-10 py-lg-12" elevation="6" padless>
    <v-container class="footer">
      <div class="company">
        <div style="width: 200px;">
          <img src="../assets/logo_text.png" alt="TridsValidation">
        </div>   
        <div class="mt-3 mb-4 para">Empowering organizations to succeed</div>
        <div class="socials mt-4">
          <span class="para font-weight-bold black--text">Follow Us : </span>  
          <v-btn icon small v-for="(social, s) in socials" :key="s" color="primary" target="_blank" :href="social.to">
            <v-icon size="14">{{ social.icon }}</v-icon>
          </v-btn>  
        </div>
      </div>
      <div class="footer__links">
        <div class="links">
          <div class="link__title">Company</div>
          <div class="para" v-for="(inf, i) in info" :key="i">{{ inf }}</div>
        </div>
        <div class="links">
          <div class="link__title">Services</div>
          <div class="para" v-for="(service, s) in services" :key="s">{{ service.title }}</div>
        </div>
        <div class="links">
          <div class="link__title">Links</div>
          <div class="para" v-for="(link, l) in links" :key="l">{{ link }}</div>
        </div>
        <div class="links">
          <div class="link__title">Contact Us</div>
          <div class="para" v-for="(con, c) in contact" :key="c">{{ con }}</div>
        </div>  
      </div>
    </v-container>  
    <v-container>
      <v-divider />
      <div class="text-center mt-4">©{{ new Date().getFullYear() }} By triDS Validation</div>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    info: ['Home', 'About', 'Clients', 'Career'],
    links: ['Student', 'Instructor'],
    services: [
      { title: 'Computer System Validation (CSV)' },
      { title: 'Equipment Validation' },
      { title: 'Process Validation' },
      { title: 'Test Method Validation' },
      { title: 'Cleaning Validation' },
      { title: 'Project Management' },
      { title: 'Staffing Services' },
      { title: 'Training Services (TriDS Academy)' },
      { title: 'Commissioning Qualification Validation (CQV)' }
    ],
    contact: [
      'TriDS Validation- California Office, 5132 Dartmoor Circle, Fairfield, CA 94534', 
      'suhasini@tridsvalidation.com', 
      'preeti@tridsvalidation.com',
      '+1 (415) 634-0137'
    ],
    socials: [
      { icon: 'mdi-facebook', to: 'https://www.facebook.com' },
      { icon: 'mdi-twitter', to: 'https://www.twitter.com' },
      { icon: 'mdi-youtube', to: 'https://www.youtube.com' },
      { icon: 'mdi-linkedin', to: 'https://www.linkedin.com' }  
    ]
  })  
}
</script>

<style scoped>
.footer {
  display: grid;
  grid-template-columns: 280px calc(100% - 330px);
  grid-gap: 50px;  
}
.footer__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25%, 1fr));  
}
.para {
  color: #0e1f58;
  font-size: 13px; 
  font-weight: 400 !important;
}
.links .para { margin-bottom: 8px; }
.links .para:last-child { margin-bottom: 0 !important; }
.link__title {
  font-weight: bold;
  margin-bottom: 16px;  
  letter-spacing: .5px;
  font-size: 17px;
}
@media (max-width: 960px) {
  .footer { grid-gap: 40px; }  
  .footer__links { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }  
}
@media (max-width: 600px) {
  .footer { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); grid-gap: 30px;  }  
  .footer__links { row-gap: 20px; }
}
</style>