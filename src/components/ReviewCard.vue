<template>
  <div>
    <div class="review__card pa-3 pa-sm-4 pa-md56 pa-lg-6 white" v-for="(review, r) in reviews" :key="r">
      <v-avatar size="100">
        <img :src="review.img" :alt="review.name">
      </v-avatar>
      <div>
        <p class="mb-1 mt-2">Every step in a project contributes to its success, therefore we take into account each and every factor that is part of the project or influences it. </p>  
        <v-rating background-color="orange lighten-3" color="orange" readonly size="14" dense :value="review.rating" half-increments />
        <div class="title mt-1" style="line-height: 1;">{{ review.name }}</div>
      </div>
    </div> 
  </div> 
</template>

<script>
export default {
  data: () => ({
    reviews: [
      { img: 'https://thumbs.dreamstime.com/b/beautiful-young-female-company-ceo-successful-business-lady-work-119168602.jpg', name: 'Laurel Johanson', rating: 4 },
      { img: 'https://assets.kpmg/is/image/kpmg/bill-thomas-sitting-smiling:cq5dam.web.512.341', name: 'Shaun Davis', rating: 4.5 },
      { img: 'https://mk0spaceflightnoa02a.kinstacdn.com/wp-content/uploads/2020/09/48878769566_5f4640a97d_k.jpg', name: 'Elon Musk', rating: 4.3 },
      { img: 'https://bsmedia.business-standard.com/_media/bs/img/article/2018-12/18/full/1545150876-6628.jpg', name: 'Shrinivas Kandula', rating: 3.8 },
    ]
  })
}
</script>

<style>
.review__card {
  display: flex;
  flex-direction: column;
  justify-content: center;  
  align-items: center;
  text-align: center;
  border: .5px solid black;
  transition: ease-in-out 250ms;
}
p { font-size: 13px; }
.review__card:hover {
  border-radius: 6px;
  border: .5px solid transparent;
  transform: translateY(-6px);  
}
</style>