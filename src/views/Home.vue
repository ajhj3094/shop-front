<template lang="pug">
#Home
  Carousel
  BottomNavigation
  Recommend.pt-10.pb-8
  v-container#section01
    v-row
      v-col(cols='8')
        //- v-img(src='https://picsum.photos/id/10/1920/1080' max-height='500' max-width='800')
        //-   v-btn.ml-8.mb-5(
        //-     absolute
        //-     bottom
        //-   ) 查看更多
        v-card.d-flex.flex-column.justify-end(

        )
          v-img.pa-12(
            src='@/assets/banner-2.jpg'
          )
            .fill-height.bottom-gradient(style='position:absolute;bottom:0;top:0;left:0;right:0;')
            h1.grey--text.text--lighten-2.mb-5() 登山健行
            v-btn.w-25.mb-4.text-body-1(
              color='maincolor'
              height='50'
              dark
              to='/shop/hiking'
            ) 了解更多
      v-col(cols='4')
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section01-1.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e830e7c24841f77c935a3'
                ) NT$ 6499 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 進階登山背包
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section01-2.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e83847c24841f77c935a6'
                ) NT$ 5499 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 進階探勘者登山背包
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section01-3.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e89317c24841f77c935cf'
                ) NT$ 1499 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 進階挑戰者登山杖
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section01-4.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e99e868deee8ed9a03613'
                ) NT$ 4999 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 男生高階挑戰者登山鞋
  v-container#section02.py-15
    v-row
      v-col(cols='4')
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section02-1.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621edae09b327f382fb75822'
                ) NT$ 4299 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 女生高階雪地厚外套
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section02-2.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e8d647c24841f77c935f0'
                ) NT$ 3999 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 光學滑雪眼鏡
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section02-3.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e8be77c24841f77c935e4'
                ) NT$ 3899 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 中階滑雪板卡鞋
          v-col(cols='6')
            v-card(
              height='267'
              flat
            )
              v-img(
                src='@/assets/section02-4.jpg'
                height='190'
                contain
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text.mt-2(
                  block
                  color='yellowbtn'
                  height='30'
                  to='/product/621e8a647c24841f77c935d8'
                ) NT$ 5999 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text.font-weight-bold 進階滑雪板
      v-col(cols='8')
        //- v-img(src='https://picsum.photos/id/10/1920/1080' max-height='500' max-width='800')
        //-   v-btn.ml-8.mb-5(
        //-     absolute
        //-     bottom
        //-   ) 查看更多
        v-card.d-flex.flex-column.justify-end(

        )
          v-img.pa-12(
            src='@/assets/banner-1.jpg'
          )
            .fill-height.bottom-gradient(style='position:absolute;bottom:0;top:0;left:0;right:0;')
            h1.grey--text.text--darken-2.mb-5() 滑雪
            v-btn.w-25.mb-4.text-body-1(
              color='maincolor'
              height='50'
              dark
              to='/shop/ski'
            ) 了解更多
  v-parallax#myparallax(
    height='280'
    src='@/assets/parallax.jpg'
  )
    h1.text-center.parallax-text HIVER
  //- v-container(fluid)#recommendCarousel.py-6.my-3
  //-   h1.mb-8 Recommend
  //-   swiper.swiper(:options='swiperOption')
  //-     swiper-slide(v-for='n in 10' :key='n')
  //-       v-card.mx-auto(
  //-         height='350'
  //-         width='250'
  //-         flat
  //-         to='/'
  //-       )
  //-         v-img(
  //-           src='https://picsum.photos/id/10/1920/1080'
  //-           height='250'
  //-         )
  //-         v-card-actions.px-3.py-1
  //-           v-btn.mx-auto.text-button.black--text(
  //-             style='width: 190px'
  //-             color='yellowbtn'
  //-           ) NT$ 1799 元
  //-         v-card-text.py-0(style='width: auto')
  //-           p.my-0.text-center.text-subtitle-1.black--text 登山鞋
  //-     .swiper-pagination(slot='pagination')
  //-     .swiper-button-prev(slot='button-prev')
  //-     .swiper-button-next(slot='button-next')
  v-container(fluid)#popularCarousel.py-6.my-3
    h1.mb-15.mt-2.ct-font.text-center 熱銷單品
    swiper.swiper(:options='swiperOption')
      swiper-slide(v-for='item in popularcarousel' :key='item.id')
        v-card.mx-auto(
          height='350'
          width='250'
          flat
        )
          v-img(
            :src='require("@/assets/" + item.src)'
            height='250'
          )
          v-card-actions.px-3.py-1
            v-btn.mx-auto.text-button.black--text.mt-2(
              style='width: 190px'
              color='yellowbtn'
              :to='"/product/" + item.link'
            ) NT$ {{ item.price }} 元
          v-card-text.py-0(style='width: auto')
            p.my-0.text-center.text-subtitle-1.black--text.mt-2.font-weight-bold {{ item.name }}
      .swiper-pagination(slot='pagination')
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
  v-container#welcome.mb-15.px-15.d-flex.justify-center
    v-card(
      flat
      outlined
      color='grey lighten-3'
      width='1000'
      tile
    )
      v-row.d-flex.flex-no-wrap.justify-space-between.ma-0
        v-col(cols='6').pa-0.d-flex.justify-center.flex-column
          v-card-title
            p.text-h5.ct-font.text-center 歡迎來到 HIVER
          v-card-subtitle.sd-font.text-center 如果您滿意這裡，請留言讓我們知道
          //- v-card-actions
          //-   v-btn.ml-2.mt-5(outlined rounded small).
          //-     START RADIO
        v-col(cols='6').pa-0
          v-img(src='@/assets/footer.jpg')
</template>

<script>
import Carousel from '../components/Carousel.vue'
import Recommend from '../components/Recommend.vue'
import BottomNavigation from '../components/BottomNavigation.vue'

export default {
  name: 'Home',
  components: {
    Carousel,
    Recommend,
    BottomNavigation
  },
  data () {
    return {
      popularcarousel: [
        { src: 'carousel-01.jpg', price: 2999, name: '女生休閒厚羽絨外套', link: '621ed7579b327f382fb7580d' },
        { src: 'carousel-02.jpg', price: 1699, name: '超輕量保溫水壺', link: '621ec9bf9b327f382fb757e0' },
        { src: 'carousel-03.jpg', price: 2999, name: '男生中階登山鞋', link: '621e994e68deee8ed9a0360d' },
        { src: 'carousel-04.jpg', price: 2799, name: '初階玩家登山背包', link: '621e85837c24841f77c935b2' },
        { src: 'carousel-05.jpg', price: 1999, name: '女生保暖羊毛衣', link: '621ec4de9b327f382fb757b5' },
        { src: 'carousel-06.jpg', price: 1299, name: '女生保暖運動排汗衣', link: '621ec5479b327f382fb757b8' },
        { src: 'carousel-07.jpg', price: 2899, name: '入門體驗者登山背包', link: '621e88c67c24841f77c935cc' },
        { src: 'carousel-08.jpg', price: 2499, name: '中階光學滑雪眼鏡', link: '621e8dd17c24841f77c935f3' },
        { src: 'carousel-09.jpg', price: 1499, name: '中階保暖滑雪手套', link: '621e8e8e7c24841f77c935f9' },
        { src: 'carousel-10.jpg', price: 1899, name: '女生防風防水運動外套', link: '621edb509b327f382fb75825' }
      ],
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: false,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>
