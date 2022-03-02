<template lang="pug">
v-container#shop
  v-card.d-flex.flex-column.justify-end.my-3(
    flat
    tile
  )
    v-img.pa-15.d-flex.align-end(
      :src='require("@/assets/" + categorypic)'
      max-height='500'
    )
      p(v-if='title.length > 0' :class='{"b-text": title === "滑雪" || title === "女生" }').white--text.ct-font {{ title }}
      //- p(v-else).white--text() 購物商城
    //- v-skeleton-loader(
    //-   type='card'
    //-   v-if='loading'
    //-   :loading='loading'
    //-   transition="fade-transition"
    //- )
  //- div(style='height:35px').my-6.test-color
  h2.text-center.mb-4.grey--text.text--darken-1(v-if='this.$store.state.product.searchBar.length > 0')
    | 共 {{ this.$store.state.product.keywords.length }} 筆搜尋結果
    v-icon(x-large right) mdi-magnify
  v-row
    v-col.pa-5(cols='12' md='6' lg='3' v-if='searchBar.length > 0' v-for='product in keywords' :key='product._id')
      v-skeleton-loader(
        type='card'
        v-if='loading'
        :loading='loading'
        transition="fade-transition"
      )
      ProductCard(
        v-else
        :product='product'
      )
    v-col.pa-5(cols='12' md='6' lg='3' v-if='searchBar.length === 0' v-for='product in products' :key='product._id')
      v-skeleton-loader(
        type='card'
        v-if='loading'
        :loading='loading'
        transition="fade-transition"
        height='300'
      )
      ProductCard(
        v-else
        :product='product'
      )
</template>

<script>
import ProductCard from '@/components/ProductCard.vue'

export default {
  name: 'Shop',
  components: {
    ProductCard
  },
  data () {
    return {
      products: [],
      title: '',
      loading: true,
      loaded: false,
      categorypic: ''
    }
  },
  async created () {
    try {
      const { data: resData } = await this.api.get('/products/cate/' + this.$route.params.id)
      if (resData.category === '購物商城') {
        const { data } = await this.api.get('/products')
        this.products = data.result
        this.title = resData.category
        this.categorypic = 'category-01.jpg'
        return
      }
      if (resData.gender === '男生') {
        const { data: maleData } = await this.api.get('/products/male')
        this.products = maleData.result
        this.title = resData.gender
        this.categorypic = 'category-04.jpg'
        return
      }
      if (resData.gender === '女生') {
        const { data: femaleData } = await this.api.get('/products/female')
        this.products = femaleData.result
        this.title = resData.gender
        this.categorypic = 'category-06.jpg'
        return
      }
      this.title = resData.category
      this.products = resData.result
      const readyHandler = () => {
        if (document.readyState === 'complete') {
          this.loading = false
          this.loaded = true
          document.removeEventListener('readystatechange', readyHandler)
        }
      }
      document.addEventListener('readystatechange', readyHandler)
      readyHandler()
      if (this.title === '購物商城') { this.categorypic = 'category-01.jpg' }
      if (this.title === '登山健行') { this.categorypic = 'category-02.jpg' }
      if (this.title === '滑雪') { this.categorypic = 'category-03.jpg' }
      if (this.title === '外套') { this.categorypic = 'category-05.jpg' }
      if (this.title === '露營') { this.categorypic = 'category-07.jpg' }
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '商品取得失敗'
      })
    }
  },
  methods: {
  },
  computed: {
    keywords () {
      return this.$store.state.product.keywords
    },
    searchBar () {
      return this.$store.state.product.searchBar
    }
  },
  mounted () {
    this.loading = true
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
}
</script>
