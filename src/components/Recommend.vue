<template lang="pug">
#recommend
  h2.ct-font.text-center 人氣商品
  v-container.d-flex.justify-center.align-center.mt-9
    v-card(
      width='380'
      hover
      height='450'
      flat
      :to='"/product/" + "621e90507c24841f77c935ff"'
    )
      v-img(
        src='@/assets/home-products-left.jpg'
        height='420'
        contain
      )
      v-card-title.pt-0.justify-center.sd-font 男生純棉長袖 T 恤
    div.d-flex.flex-wrap.rec-wrap.justify-space-around
      v-card.align-content-space-between(
      v-for='(recommend, idx) in recommends'
      width='200'
      hover
      height='260'
      elevation='0'
      :to='"/product/" + recommend.link'
      flat
    )
        v-img(
          :src="require('@/assets/'+recommend.src)"
          height='200'
          contain
        )
        v-card-title.py-0.justify-center.sd-font {{ recommend.name }}
        v-card-text.py-0.justify-center.text-center {{ recommend.category }}
    v-card(
      width='380'
      hover
      height='450'
      flat
      :to='"/product/" + "621ec2fe9b327f382fb757a9"'
    )
      v-img(
        src='@/assets/home-products-right.jpg'
        height='420'
      )
      v-card-title.pt-0.justify-center.sd-font 女生輕量羽絨衣
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
        { name: '男生登山鴨舌帽', category: '具有保暖功用的鴨舌帽', src: 'home-products-1.jpg', link: '621e97df68deee8ed9a03604' },
        { name: '三人寢室帳篷', category: '防風防水的單門三人帳篷', src: 'home-products-2.jpg', link: '621ec7eb9b327f382fb757c1' },
        { name: '睡袋 -15 度', category: '適合登山使用的睡袋', src: 'home-products-3.jpg', link: '621e86f17c24841f77c935ba' },
        { name: '登山褲', category: '防刮防潑水、可變短褲', src: 'home-products-4.jpg', link: '621e987568deee8ed9a03607' }
      ]
    }
  }
}
</script>
