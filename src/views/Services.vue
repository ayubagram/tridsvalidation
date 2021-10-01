<template>
  <div class="clients__div">
    <div style="height: 50vh;" class="primary" data-aos="zoom-in">
      <v-container class="d-flex flex-column justify-center align-center white--text" style="height: 100%; grid-gap: 6px;">
        <div class="text-h4 text-md-h3">OUR SERVICES</div>  
        <div class="sub__para">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
      </v-container>  
    </div>
    <div v-for="(service, s) in services" :key="s" class="service__item" :class="s % 2 == 0 ? 'flex-row' : 'flex-row-reverse'">
      <div class="service__item__img">
        <img :src="service.img" :alt="service.title">  
      </div>
      <div class="service__info pa-4 pa-sm-6 pa-md-8 pa-lg-10 primary--text">
        <div class="text-h5 text-sm-h4 text-md-h3 mb-3 mb-sm-4 mb-md-5 mb-lg-6">{{ service.title }}</div>
        <div class="sub__para" style="font-weight: 300;" v-for="(content, c) in service.contents" :key="c">{{ content }}</div>    
      </div>  
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    services: [
      { 
        img: 'https://static.wixstatic.com/media/7f5508_668117b318a9475ba97d249b2a16417d~mv2.jpg/v1/fill/w_675,h_1020,fp_0.69_0.31,lg_2,q_85,usm_0.66_1.00_0.01/7f5508_668117b318a9475ba97d249b2a16417d~mv2.webp',  
        title: 'Computer System Validation', 
        contents: ['Our computer system validation experts have validated computer programs for all types of FDA-regulated businesses, including pharmaceutical and biologics manufacturers, medical device manufacturers, clinical research organizations, and GLP laboratories. Computer systems validation (CSV) program ensuring strict regulatory compliance. According to US FDA, “Computer system validation is the process of providing a high degree of assurance through documented evidence that a computer system consistently meets its pre-determined or intended use or quality attributes such as accuracy, security, reliability, and functionality.”'],  
        ulTitle: 'We have performed CSV projects for custom, off-the-shelf (OTS) and highly-configurable Enterprise Resource Planning (ERP) computer system applications',
        ul: [
          'Software Validation – Computer systems validation services for SAP, LIMS, Salesforce, Trackwise, and other business and laboratory data management systems',
          'Web Based Applications – Specialized validation services for web, cloud, and mobile applications',
          'MS Excel Spreadsheets – Spreadsheet security and compliance with 21 CFR 11',
          'MS Access Databases – Your internally-created databases made compliant with FDA requirements'  
        ]
      },
      {
        img: 'https://static.wixstatic.com/media/7f5508_bcc34654631743a9b6d96beebf1f3cc7~mv2.jpg/v1/fill/w_318,h_480,fp_0.50_0.50,lg_1,q_80/7f5508_bcc34654631743a9b6d96beebf1f3cc7~mv2.webp',
        title: 'Equipment Validation',
        contents: ['Equipment Validation comprises a series of qualifications, such as Design, Installation, Operational, and Performance Qualification, that provide a high degree of assurance of the consistent, expected functioning of a piece equipment. Operating parameters and environment, as well as documented routine maintenance and on-going performance checks, contribute to a life-cycle approach to maintaining equipment in a validated state.'] 
      },
      {
        img: 'https://static.wixstatic.com/media/7f5508_c309fbde1adf4fd4a6a713691cffb019~mv2.jpg/v1/fill/w_675,h_1020,fp_0.50_0.50,lg_2,q_85,usm_0.66_1.00_0.01/7f5508_c309fbde1adf4fd4a6a713691cffb019~mv2.webp',
        title: 'Process Validation',
        contents: ['Process Validation applies to the production of pharmaceuticals and intermediate products. Per the FDA Process Validation Guidance, “process validation is defined as the collection and evaluation of data, from the process design stage through commercial production, which establishes scientific evidence that a process is capable of consistently delivering quality product.” This entails on-going documentation and assessment of all constituent elements of the process, such as materials, equipment, operations, and environmental conditions. The primary goal is to gain understanding and control of process variation and its effect on process outcome.']
      },
      { 
        img: 'https://static.wixstatic.com/media/7f5508_04a262e7e2d24ac08c85e7b4cd4c113f~mv2.jpg/v1/fill/w_675,h_1020,fp_0.50_0.50,lg_2,q_85,usm_0.66_1.00_0.01/7f5508_04a262e7e2d24ac08c85e7b4cd4c113f~mv2.webp',
        title: 'Test Method Validation',
        contents: [
          'Our validation experts will plan the validation approach and define the requirements. This includes identifying and describing the process or system, specifying parameters, and assessing the desired inputs and outputs. These requirements are documented as Functional and Design Requirements.',
          'Once requirements have been outlined and documented, test plans are developed to demonstrate that all functional system requirements are met and the system is properly secured. Our validation professionals will document a testing protocol, designed to demonstrate that your system meets all of your business requirements, plus regulatory requirements outlined in 21 CFR Parts 210, 211, and 820. As appropriate, this includes installation qualifications (IQ), operational qualifications (OQ), and performance qualifications (PQ). Deviations, if they exist, will be reported and resolved.',
          'Throughout the validation process, a Requirements Traceability Matrix is updated to ensure that all system requirements are addressed. If necessary, a formal risk assessment can be created to document decisions to focus validation testing. A Summary Report is also created at the end of the process to summarize any issues found during the validation project.' 
        ] 
      },
      {
        img: 'https://static.wixstatic.com/media/7f5508_96e1e0768ffc4f88bbbb418cb113faae~mv2.png/v1/fill/w_521,h_788,fp_0.50_0.50,q_90/7f5508_96e1e0768ffc4f88bbbb418cb113faae~mv2.webp',
        title: 'Cleaning Validation',
        contents: [
          'Our validation experts will incorporate your cleaning protocols, SOPs, and methods into a suite of custom templates that allow for quick execution and turn-around of the cleaning validation.',
          'Cleaning studies are initiated with the creation of a cleaning validation plan, complete with scheduling, role assignment, email notifications, and project tracking.',
          'After a cleaning protocol is executed and cleaning samples analyzed, a cleaning validation report is generated to document that the cleaning process meets the defined requirements. Our cleaning validation documents are designed to demonstrate that your process meets all of your business requirements, plus regulatory requirements. All supporting reference material and documentation, including raw data and deviations.',
          'Finally, Quality Control review of the cleaning validation and report is documented, step by step, ensuring compliance and reporting accuracy.',
          'Throughout the process, a Traceability Matrix is updated to ensure that all validation requirements are addressed. If necessary, a formal risk assessment can be created to identify areas for improvement.'  
        ]  
      },
      {
        img: 'https://static.wixstatic.com/media/936c63273737da67239303dbf2bcd0bf.jpg/v1/fill/w_662,h_1000,fp_0.50_0.50,q_85/936c63273737da67239303dbf2bcd0bf.webp',
        title: 'Project Management',
        contents: ['With years of experience, our staff has the capabilities and expertise to take your business to the next level. At TriDS Validation Inc, we combine our insights and skills to transform your processes and strategies, and in turn, your company. We’re proud to help shape and improve how our clients structure and manage their business.']  
      },
      {
        img: 'https://static.wixstatic.com/media/fefbb1e69df546d0b5e1e73d6b8f3844.jpg/v1/fill/w_675,h_1020,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/fefbb1e69df546d0b5e1e73d6b8f3844.webp',
        title: 'Staffing Services',
        contents: ['With a top-notch recruiting department backed by over 700+ qualified Regulatory professionals, TriDS assists clients to choose the right person at the right time. TriDS offers Regulatory contract staffing services across the USA, Canada, Europe, UK, Middle East, Asia, for industries such as Medical Devices, Pharmaceuticals, Biotechnologies etc.']  
      }
    ]  
  })  
}
</script>

<style scoped>
.service__item {
  display: flex;
  align-items: center;  
}
.service__item__img, .service__info { width: 50%; }
@media (max-width: 800px) {
  .service__item { flex-direction: column !important; }  
  .service__item__img, .service__info { width: 100% !important; }
  .service__item__img img { object-fit: contain !important; max-height: 50vh; }
}
</style>