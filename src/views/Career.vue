<template>
  <div class="career">
    <div class="banner mb-4 mb-sm-6 mb-md-8 mb-lg-10" data-aos="zoom-in">  
      <div class="banner__info pa-3 text-center">
        <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">Career</div>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab.</div>  
      </div>  
      <img src="https://wallpaperaccess.com/full/2675398.jpg" alt="Career Image">
    </div>  
    <v-container>
      <div class="display-1" style="line-height: 1;" data-aos="zoom-in">Available Jobs</div> 
      <div class="jobs d-flex flex-column mt-3 mt-sm-4" style="grid-gap: 20px;">
        <div class="job pa-4" v-for="(job, j) in jobs" :key="j" data-aos="zoom-in">
          <div class="d-flex justify-space-between mb-1">
            <div class="title" style="line-height: 1.3;">{{ job }}</div>
            <v-icon size="16" color="primary" v-text="'mdi-chevron-right'" />  
          </div>
          <p class="primary--text">Position Available</p>
        </div>  
      </div>
    </v-container>
    <div class="display-1 text-center px-3 mt-4 mt-sm-6 mt-md-8 mt-lg-10 mb-3" data-aos="zoom-in">Life At TriDS Validation</div>
    <div class="life__at">
      <div v-for="(img, i) in images" :key="i" class="life__at__img" data-aos="zoom-in">
        <img :src="img">
      </div>  
    </div>
  </div>  
</template>

<script>
export default {
  data: () => ({
    jobs: [
      'Validation Engineer', 'Sr Validation Engineer', 'Project Manager', 'Validation Lead', 
      'Quality Validation Engineer III', 'Senior Validation Specialist (CSV)'
    ],
    images: [
      'https://blog.dacadoo.com/wp-content/uploads/2014/10/800x799/14107236.jpg',
      'https://images.infobloom.com/man-working-in-cubicle.jpg',
      'https://images.unsplash.com/photo-1551434678-e076c223a692?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
      'https://thumbs.dreamstime.com/b/busy-office-workers-arguing-report-analysing-documents-indoor-portrait-confused-international-developers-using-172298236.jpg',
      'https://www.incimages.com/uploaded_files/image/1920x1080/getty_152415032_109471.jpg',
      'https://st.depositphotos.com/1570716/1984/i/950/depositphotos_19848573-stock-photo-clapping-office-workers.jpg',
      'https://www.techrepublic.com/a/hub/i/r/2020/12/18/fda218fd-3a55-4178-af45-f0f136897211/resize/1200x/325cf13276012c8f67478b2233d5e36a/masked-office-workers-kiwis.jpg',
      'https://st.focusedcollection.com/3839757/i/650/focused_178420900-stock-photo-chinese-office-workers-sitting-office.jpg',
      'https://mk0financedigesaop11.kinstacdn.com/wp-content/uploads/2018/04/fd210418-1-1-450x300.jpg',
      'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/24/16/yougov-remote-working.jpg?width=982&height=726&auto=webp&quality=75',
      'https://media.istockphoto.com/photos/young-female-professional-at-desk-smiling-to-camera-picture-id1011793090?k=20&m=1011793090&s=612x612&w=0&h=9oKGtBVc7Kn_h2Zch8CMwrJ9Wj7RKR_Qg2BFmwHY0Ck=',
      'https://cdn.shrm.org/image/upload/c_crop%2Ch_443%2Cw_787%2Cx_0%2Cy_0/c_fit%2Cf_auto%2Cq_auto%2Cw_767/v1/Talent%20Acquisition/iStock-1213500380_efmwpo?databtoa=eyIxNng5Ijp7IngiOjAsInkiOjAsIngyIjo3ODcsInkyIjo0NDMsInciOjc4NywiaCI6NDQzfX0%3D',
      'https://ichef.bbci.co.uk/news/976/cpsprodpb/FE26/production/_117826056_gettyimages-1250279730.jpg',
      'https://static.educalingo.com/img/en/800/receptionist.jpg'  
    ]
  })  
}
</script>

<style>
.job {
  box-shadow: 0 0 20px 0 #0e1f5813;
  border-radius: 4px;
  cursor: pointer;
}

.life__at {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15%, 1fr));  
}
.life__at__img { overflow: hidden; }
.life__at__img img { transition: ease-in-out 250ms; }
.life__at__img:hover img { transform: scale(1.25); }
@media (max-width: 1060px) {
  .life__at { grid-template-columns: repeat(auto-fit, minmax(20%, 1fr)); }  
}
@media (max-width: 860px) {
  .life__at { grid-template-columns: repeat(auto-fit, minmax(25%, 1fr)); }  
}
@media (max-width: 720px) {
  .life__at { grid-template-columns: repeat(auto-fit, minmax(30%, 1fr)); }  
}
@media (max-width: 500px) {
  .life__at { grid-template-columns: repeat(auto-fit, minmax(50%, 1fr)); }  
}
</style>