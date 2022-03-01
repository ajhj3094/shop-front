<template lang="pug">
v-bottom-navigation#bottom-navigation(
    color=''
    horizontal
    grow
    background-color='maincolor'
    dark
    height=''
  )
  v-btn.mx-2.self-bg-opacity(
    v-for='btn in btns'
    max-width='450'
    height='60'
    :to='btn.to'
  )
    span.text-subtitle-1.white--text.font-weight-bold.mt-1 {{ btn.title }}
    v-icon.white--text(large) {{ btn.icon }}
</template>

<script>
export default {
  data () {
    return {
      btns: [
        { title: '聯絡我們', icon: 'mdi-comment-text', to: '/' },
        { title: '購物商城', icon: 'mdi-storefront', to: '/shop' },
        { title: '運動誌', icon: 'mdi-book-open-variant', to: '/' }
      ]
    }
  }
}
</script>
