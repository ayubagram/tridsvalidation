<template>
  <div class="">
    <v-container>
      <div class="service__div">
        <div class="service__div__info">
          <div class="text-h4 text-md-h3 primary--text mb-4 mb-sm-5 mb-md-6 mb-lg-7">Our Services</div>
          <div style="font-size: 15px; letter-spacing: .5px;" class="text-justify">TriDS Validation's breadth of expertise in the Life Science industries, such as Pharmaceutics, Medical Device, Cannabis, and others, is widely renowned and in demand. Our broad range of services provides comprehensive solution to our customers, and based on fundament of Professionalism, Client Oriented, Partnership and hands on.</div>
        </div>
        <div class="service__div__img">
          <img src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/08/Banner.png" alt="">
        </div>
      </div>
      <div class="services mt-6 mt-sm-8 mt-md-10 mt-lg-12">
        <div class="service__item primary--text pa-4 pa-sm-5 pa-md-6 pa-lg-7" v-for="(service, s) in services" :key="s">
          <div style="height: 100px;"><img :src="service.img" :alt="service.title" srcset=""></div>
          <div style="font-size: 25px;" v-text="service.title" />
          <div class="sub__para my-1 my-md-2" style="color: rgb(0 0 0 / 80%) !important;" v-text="service.contents[0]" />
          <v-btn color="red" outlined height="30">
            <span>read more</span>
            <v-icon v-text="'mdi-chevron-right'" right style="font-size: 16px !important;" />
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>  
</template>

<script>
export default {
  data: () => ({
    services: [
      { 
        img: require('../assets/icons/computer.png'),  
        title: 'Computer System Validation', 
        contents: ['Our computer system validation experts have validated computer programs for all types of FDA-regulated businesses, including pharmaceutical and biologics manufacturers, medical device manufacturers, clinical research organizations, and GLP laboratories. Computer systems validation (CSV) program ensuring strict regulatory compliance. According to US FDA, “Computer system validation is the process of providing a high degree of assurance through documented evidence that a computer system consistently meets its pre-determined or intended use or quality attributes such as accuracy, security, reliability, and functionality.”'],  
      },
      {
        img: require('../assets/icons/equipement.png'),  
        title: 'Equipement Validation',
        contents: ['Equipment Validation comprises a series of qualifications, such as Design, Installation, Operational, and Performance Qualification, that provide a high degree of assurance of the consistent, expected functioning of a piece equipment. Operating parameters and environment, as well as documented routine maintenance and on-going performance checks, contribute to a life-cycle approach to maintaining equipment in a validated state.'] 
      },
      {
        img: require('../assets/icons/process.png'),  
        title: 'Process Validation',
        contents: ['Process Validation applies to the production of pharmaceuticals and intermediate products. Per the FDA Process Validation Guidance, “process validation is defined as the collection and evaluation of data, from the process design stage through commercial production, which establishes scientific evidence that a process is capable of consistently delivering quality product.” This entails on-going documentation and assessment of all constituent elements of the process, such as materials, equipment, operations, and environmental conditions. The primary goal is to gain understanding and control of process variation and its effect on process outcome.']
      },
      { 
        img: require('../assets/icons/test.png'),  
        title: 'Test Method Validation',
        contents: ['Our validation experts will plan the validation approach and define the requirements. This includes identifying and describing the process or system, specifying parameters, and assessing the desired inputs and outputs. These requirements are documented as Functional and Design Requirements.'] 
      },
      {
        img: require('../assets/icons/cleaning.png'),  
        title: 'Cleaning Validation',
        contents: ['Our validation experts will incorporate your cleaning protocols, SOPs, and methods into a suite of custom templates that allow for quick execution and turn-around of the cleaning validation.']  
      },
      {
        img: require('../assets/icons/project.png'),
        title: 'Project Management',
        contents: ['With years of experience, our staff has the capabilities and expertise to take your business to the next level. At TriDS Validation Inc, we combine our insights and skills to transform your processes and strategies, and in turn, your company. We’re proud to help shape and improve how our clients structure and manage their business.']  
      },
      {
        img: require('../assets/icons/staff.png'),  
        title: 'Staffing Services',
        contents: ['With a top-notch recruiting department backed by over 700+ qualified Regulatory professionals, TriDS assists clients to choose the right person at the right time. TriDS offers Regulatory contract staffing services across the USA, Canada, Europe, UK, Middle East, Asia, for industries such as Medical Devices, Pharmaceuticals, Biotechnologies etc.']  
      }
    ]  
  })  
}
</script>

<style>
.service__div {
  display: grid;
  grid-template-columns: calc(50% - 15px) calc(50% - 15px);
  align-items: center;
  grid-gap: 30px;
}
.services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(31%, 1fr));
}
.service__item {
  transition: ease-in-out 250ms;
  border-radius: 6px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  grid-gap: 12px;
}
.service__item:hover { box-shadow: 0 1px 15px 0 rgb(0 0 0 / 10%); }
.services .sub__para {
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.services .v-btn {
  font-weight: 300 !important;
  font-size: 13px !important;
}
@media (max-width: 900px) {
  .services { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }
}
@media (max-width: 760px) {
  .service__div { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); grid-gap: 20px; }
  .service__div__info { width: 100%; }
}
@media (max-width: 600px) {
  .services { grid-template-columns: repeat(auto-fit, minmax(100%, 1fr)); }
}
</style>