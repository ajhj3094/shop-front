<template lang="pug">
v-app
  v-app-bar#navbar.z-100(
      app

      prominent
      height='196'

    )
    .w-100.sd-color
      v-container#navtext-container.xl-mw.pa-0
        p.mb-0.text-subtitle-2.white--text
          | 超取 $199 免運費，宅配 $499 免運費(大型商品除外)。滿千送百活動獲得的購物抵用卡開始使用囉！
    .w-100
      v-container#header-container.xl-mw.pa-0.d-flex.align-center
        router-link.mr-12(
          to='/'
        )
          v-img(
            :src="require('@/assets/logo.png')"
            contain
            max-width='125'
          )
        v-text-field.flex-grow-0.align-center.mr-auto(
          :class='{ noresult: this.$store.state.product.searchBar.length > 0 && this.$store.state.product.keywords.length === 0 }'
          dense
          outlined
          color='#000000'
          @input='search(0)'
          v-model='keywords'
          @change='search(0)'
          @click:append='search(0)'
          @keydown.enter='search(0)'
          placeholder='品名/分類/描述'
        )
          template(v-slot:append)
            v-btn(
              icon
              @click='search(0)'
            )
              v-icon mdi-magnify
        .d-flex.align-center
          v-btn.ml-3(
            depressed
            to='/register'
            v-if='!user.isLogin'
          )
            v-icon.mr-1(color) mdi-account-plus-outline
            p.mb-0.font-weight-light 註冊
          v-btn.ml-3(
            depressed
            to='/login'
            v-if='!user.isLogin'
          )
            v-icon.mr-1(color) mdi-login-variant
            p.mb-0.font-weight-light 登入
          v-btn.ml-3(
            depressed
            to='/admin'
            v-if='user.isLogin && user.isAdmin'
          )
            v-icon.mr-1(color) mdi-account-outline
            p.mb-0.font-weight-light 管理者
          v-btn.ml-3(
            depressed
            @click='logout'
            v-if='user.isLogin'
          )
            v-icon.mr-1(color) mdi-logout-variant
            p.mb-0.font-weight-light 登出
          v-btn.ml-3(
            depressed
            v-if='user.isLogin'
            to='/orders'
          )
            v-icon.mr-1(color) mdi-order-bool-descending
            p.mb-0.font-weight-light 訂單
          v-btn.ml-3(
            depressed
            to='/cart'
            v-if='user.isLogin'
          )
            v-icon.mr-1(color) mdi-cart-outline
            p.mb-0.font-weight-light(v-if='user.cart === 0') 購物車
            v-badge(
              color='error'
              :content='user.cart'
              offset-x='-4'
              offset-y='0'
              v-if='user.cart > 0'
            ) 購物車
      v-divider.divider
    .w-100
      v-container#menu-container.pa-0
        div
          v-tabs(
            color='maincolor'
            slider-color="maincolor"
            v-model='active_tab'
            show-arrows
            hide-slider
          )
            v-tab.px-0.self-tab-item(
              v-for='tab in tabs'
              :key='tab.id'
              :to='tab.to'
              exact-active-class='menu-tab-text'
              append
              @click='clearSearchBar(tab.id)'
            )
              span {{ tab.title }}
              v-divider(inset vertical)
    .w-100.test-color.z-50
      v-container#menutext-container.xl-mw.pa-0
        p.mb-0.text-subtitle-2.white--text.text-center
          | 嗨！HIVER 的會員，聖誕節起首筆消費即享有 8 折優惠！活動將於 3/4 截止
  v-main#main
    vue-page-transition(name='fade-in-right')
      //- 很重要，否則做路由參數時更換網址 id 頁面不會重新渲染
      router-view(:key='$route.fullPath')
  v-footer.mt-5(color='darkbg' padless)
    v-row(justify='center' no-gutters)
      v-btn.my-2(v-for='link in links' :key='link' color='white' text rounded).
        {{ link }}
      v-col.py-4.text-center.grey--text.text--lighten-1(cols='12')
        | {{ new Date().getFullYear() }} —
        strong  Copyright © Justin Yu
        br
        p.grey--text.text--darken-1 圖像皆取自網路&nbsp; | &nbsp;網站為學習用途，並無商業使用
</template>

<script>

export default {
  name: 'App',
  components: {
    // Navbar
  },
  data () {
    return {
      btns: [
        { icon: 'mdi-account-outline', text: '註冊', to: '/register' },
        { icon: 'mdi-account-outline', text: '登入', to: '/login' },
        { icon: 'mdi-account-outline', text: '登出' },
        { icon: 'mdi-cart-outline', text: '購物車(0)', to: '/cart' }
      ],
      // 頁面預選單個 tab
      active_tab: 0,
      tabs: [
        { id: 1, title: '購物商城', to: '/shop' },
        { id: 2, title: '登山健行', to: '/shop/hiking' },
        { id: 3, title: '滑雪', to: '/shop/ski' },
        { id: 4, title: '外套', to: '/shop/coat' },
        { id: 5, title: '男生', to: '/shop/male' },
        { id: 6, title: '女生', to: '/shop/female' },
        { id: 7, title: '露營', to: '/shop/camping' }
      ],
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us'
      ]
    }
  },
  computed: {
    keywords: {
      // v-model 綁定 Vuex 的 module 寫法
      get () {
        return this.$store.state.product.searchBar
      },
      set (value) {
        this.$store.commit('product/updateKeywords', value)
      }
    }
  },
  methods: {
    clearSearchBar (value) {
      if (value > 1) {
        this.$store.commit('product/clear')
      }
    },
    search (value) {
      if (value === 0) {
        this.$store.dispatch('product/search', this.keywords)
        this.$router.push('/shop')
        return
      }
      this.$store.dispatch('product/search', this.keywords)
    },
    logout () {
      this.$swal.fire({
        title: '登出',
        text: '確定要登出嗎？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確定，請幫我登出',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.dispatch('user/logout')
        }
      })
    }
  },
  async created () {
    this.$store.dispatch('user/getInfo')
  },
  watch: {
    keywords: {
      deep: true,
      handler (newValue, oldValue) {
        console.log(newValue, oldValue)
        if (this.keywords.length > 0 || (oldValue === 1) || (newValue === 1)) {
          this.$router.push('/shop')
        }
      }
    }
  }
}
</script>
