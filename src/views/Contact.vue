<template>
  <div>
    <v-container class="contact mb-6">
      <div class="contact__info">
        <div class="mb-3">
          <div class="headline mb-2">Contact Us</div>
          <p>Contact us via any medium. We'll get back to you as soon as possible.</p>
        </div> 
        <div class="contacts d-flex flex-column" style="grid-gap: 20px;">
          <div v-for="(inf, i) in info" :key="i" class="d-flex align-center">
            <div class="contact__circle secondary">
              <v-icon color="white">{{ inf.icon }}</v-icon>
            </div>
            <div style="line-height: 1;" class="ml-3">
              <div class="title mb-1" style="line-height: 1;">{{ inf.head }}</div>  
              <span>{{ inf.title }}</span>
            </div>
          </div>
        </div> 
        <div class="mt-4">
          <v-btn icon large :color="social.color" v-for="(social, s) in socials" :key="s" target="_blank" :href="social.to">
            <v-icon size="24" v-text="social.icon" />
          </v-btn>
        </div>
      </div>
      <div>
        <div class="headline mb-2">Send Us Message</div>  
        <p>We'll get back to you as soon as possible.</p>
        <v-form ref="form" lazy-validation v-model="valid" class="d-flex flex-column" style="grid-gap: 12px;">
          <div class="d-flex flex-wrap" style="grid-gap: 12px;">
            <v-text-field v-model="form.name" label="Full Name*" dense outlined hide-details prepend-inner-icon="mdi-account" :rules="[ v => !!v || '' ]" />
            <v-text-field v-model="form.address" label="Address*" dense outlined hide-details prepend-inner-icon="mdi-map-marker" :rules="[ v => !!v || '' ]" />
            <v-text-field v-model="form.email" label="Email*" dense outlined hide-details prepend-inner-icon="mdi-email" :rules="emailRules" />  
            <v-text-field v-model="form.phone" label="Phone Number*" type="number" :counter="10" dense outlined hide-details prepend-inner-icon="mdi-phone" :rules="[ v => !!v || '' ]" />
            <v-text-field v-model="form.subject" label="Subject*" dense outlined hide-details prepend-inner-icon="mdi-text-long" :rules="[ v => !!v || '' ]" />
          </div>
          <v-textarea v-model="form.message" label="Message" dense outlined hide-details prepend-inner-icon="mdi-message" />    
          <v-btn rounded max-width="200" color="secondary" :disabled="!valid" @click="submit">send message</v-btn>
        </v-form>  
      </div>
    </v-container> 
    <div class="map" data-aos="zoom-in">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.091844123058!2d-122.1399106846712!3d38.16130497969088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80856d2d1df9f239%3A0xadd0e90b15939755!2zNTEzMiBEYXJ0bW9vciBDaXIsIEZhaXJmaWVsZCwgQ0EgOTQ1MzQsIOCkuOCkguCkr-ClgeCkleCljeCkpCDgpLDgpL7gpJzgpY3gpK8g4KSF4KSu4KWH4KSw4KS_4KSV4KS-!5e0!3m2!1sne!2snp!4v1632996549111!5m2!1sne!2snp" style="border:0;" allowfullscreen="" loading="lazy" />  
    </div>
  </div> 
</template>

<script>
export default {
  data: () => ({
    info: [
      { icon: 'mdi-map-marker', title: 'TriDS Validation- California Office, 5132 Dartmoor Circle, Fairfield, CA 94534', head: 'Address' },
      { icon: 'mdi-phone', title: '+1 (415) 634-0137', head: 'Phone Number' },
      { icon: 'mdi-email', title: 'suhasini@tridsvalidation.com', head: 'Business Developmebt' },
      { icon: 'mdi-email', title: 'preeti@tridsvalidation.com', head: 'Recruitment' },
    ],
    socials: [
      { icon: 'mdi-facebook', color: '#4267B2', to: 'https://www.facebook.com/' },
      { icon: 'mdi-instagram', color: '#8a3ab9', to: 'https://www.instagram.com/' },
      { icon: 'mdi-twitter', color: '#1DA1F2', to: 'https://www.twitter.com/' },
      { icon: 'mdi-linkedin', color: '#0077b5', to: 'https://www.linkedin.com/' }
    ],
    valid: true,
    form: {
      name: null,
      aadress: null,
      email: null,
      phone: null,
      subject: null,
      message: null,  
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ]
  }),
  methods: {
    submit() {
      if(this.$refs.form.validate()) console.log('validated') 
      else console.log('not validated') 
    }  
  }  
}
</script>

<style scoped>
p, span {
  line-height: 1.3;
  font-size: 13px;  
}
.contact {
  display: grid;
  grid-template-columns: calc(50% - 30px) calc(50% - 30px);  
  grid-gap: 60px;
}
.contact__circle {
  height: 48px;
  width: 48px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;  
}
.map { height: 50vh; }
iframe {
  height: 100%;
  width: 100%;  
}
@media (max-width: 1060px) {
  .contact { grid-template-columns: calc(50% - 25px) calc(50% - 25px); grid-gap: 50px; }
}
@media (max-width: 860px) {
  .contact { grid-template-columns: calc(50% - 20px) calc(50% - 20px); grid-gap: 40px; }
}
@media (max-width: 760px) {
  .contact { grid-template-columns: calc(50% - 15px) calc(50% - 15px); grid-gap: 30px; }
}
@media (max-width: 600px) {
  .contact { grid-template-columns: 100%; grid-gap: 20px; }
}
</style>