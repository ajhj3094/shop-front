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
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
  v-container#section02.py-15
    v-row
      v-col(cols='4')
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
        v-row
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
          v-col(cols='6')
            v-card(
              height='267'
              flat
              to='/'
            )
              v-img(
                src='https://picsum.photos/id/10/1920/1080'
                height='190'
              )
              v-card-actions.px-3.py-1
                v-btn.mx-auto.text-button.black--text(
                  block
                  color='yellowbtn'
                ) NT$ 1799 元
              v-card-text.py-0
                p.my-0.text-center.text-subtitle-1.black--text 登山鞋
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
  v-parallax(
    height='280'
    src='@/assets/parallax.jpg'
  )
  v-container(fluid)#recommendCarousel.py-6.my-3
    h1.mb-8 Recommend
    swiper.swiper(:options='swiperOption')
      swiper-slide(v-for='n in 10' :key='n')
        v-card.mx-auto(
          height='350'
          width='250'
          flat
          to='/'
        )
          v-img(
            src='https://picsum.photos/id/10/1920/1080'
            height='250'
          )
          v-card-actions.px-3.py-1
            v-btn.mx-auto.text-button.black--text(
              style='width: 190px'
              color='yellowbtn'
            ) NT$ 1799 元
          v-card-text.py-0(style='width: auto')
            p.my-0.text-center.text-subtitle-1.black--text 登山鞋
      .swiper-pagination(slot='pagination')
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
  v-container(fluid)#popularCarousel.py-6.my-3
    h1.mb-8 Popular
    swiper.swiper(:options='swiperOption')
      swiper-slide(v-for='n in 10' :key='n')
        v-card.mx-auto(
          height='350'
          width='250'
          flat
          to='/'
        )
          v-img(
            src='https://picsum.photos/id/10/1920/1080'
            height='250'
          )
          v-card-actions.px-3.py-1
            v-btn.mx-auto.text-button.black--text(
              style='width: 190px'
              color='yellowbtn'
            ) NT$ 1799 元
          v-card-text.py-0(style='width: auto')
            p.my-0.text-center.text-subtitle-1.black--text 登山鞋
      .swiper-pagination(slot='pagination')
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
  v-container#welcome.mb-15.px-15
    v-card(
      flat
      outlined
      color='black'
    )
      v-row.d-flex.flex-no-wrap.justify-space-between.ma-0
        v-col(cols='6').pa-0
          v-card-title.text-h5 hi
          v-card-subtitle hi
          v-card-actions
            v-btn.ml-2.mt-5(outlined rounded small).
              START RADIO
        v-col(cols='6').pa-0
          v-img(src='https://picsum.photos/id/10/1920/1080')
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
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        slidesPerGroup: 5,
        loop: true,
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
