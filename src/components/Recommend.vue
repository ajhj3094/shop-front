<template lang="pug">
#recommend
  h2.ct-font.text-center 推薦商品
  v-container.d-flex.justify-center.align-center.mt-9
    v-card(
      width='380'
      hover
      height='450'
      flat
    )
      v-img(
        src='@/assets/home-products-left.jpg'
        height='420'
        contain
      )
      v-card-title.pt-0.justify-center 保暖長袖
    div.d-flex.flex-wrap.rec-wrap.justify-space-around
      v-card.align-content-space-between(
      v-for='(recommend, idx) in recommends'
      width='200'
      hover
      height='260'
      elevation='0'
      :to='recommend.link'
      flat
    )
        v-img(
          :src="require('@/assets/'+recommend.src)"
          height='200'
          contain
        )
        v-card-title.pt-0.justify-center {{ recommend.name }}
    v-card(
      width='380'
      hover
      height='450'
      flat
    )
      v-img(
        src='@/assets/home-products-right.jpg'
        height='420'
      )
      v-card-title.pt-0.justify-center 羽絨衣
  v-container
    v-btn.d-flex.mx-auto(
      color='maincolor'
      dark
      max-width='500'
      to='/shop'
    ) 查看所有商品
</template>

<script>
export default {
  data () {
    return {
      recommends: [
        { name: '帽子', src: 'home-products-1.jpg', link: '/product' },
        { name: '帳篷', src: 'home-products-2.jpg', link: '/product' },
        { name: '睡袋', src: 'home-products-3.jpg', link: '/product' },
        { name: '登山褲', src: 'home-products-4.jpg', link: '/product' }
      ]
    }
  }
}
</script>
