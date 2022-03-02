<template lang="pug">
v-container#shop
  v-card.d-flex.flex-column.justify-end.px-5.py-6.my-5(
    img='https://picsum.photos/id/10/1920/1080'
    height='400'
  )
    v-card-title
      p(v-if='title.length > 0').white--text() {{ title }}
      p(v-else).white--text() 購物商城
  div(style='height:35px').my-6.test-color
  h2.text-center.mb-4.grey--text.text--darken-1(v-if='this.$store.state.product.searchBar.length > 0')
    | 共 {{ this.$store.state.product.keywords.length }} 筆搜尋結果
    v-icon(x-large right) mdi-magnify
  v-row
    v-col.pa-5(cols='12' md='6' lg='3' v-if='searchBar.length > 0' v-for='product in keywords' :key='product._id')
      ProductCard(
        :product='product'
      )
    v-col.pa-5(cols='12' md='6' lg='3' v-if='searchBar.length === 0' v-for='product in products' :key='product._id')
      ProductCard(
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
      title: ''
    }
  },
  async created () {
    try {
      const { data: resData } = await this.api.get('/products/cate/' + this.$route.params.id)
      if (resData.category === '購物商城') {
        const { data } = await this.api.get('/products')
        this.products = data.result
        return
      }
      if (resData.gender === '男生') {
        const { data: maleData } = await this.api.get('/products/male')
        this.products = maleData.result
        this.title = resData.gender
        return
      }
      if (resData.gender === '女生') {
        const { data: femaleData } = await this.api.get('/products/female')
        this.products = femaleData.result
        this.title = resData.gender
        return
      }
      this.title = resData.category
      this.products = resData.result
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
  }
}
</script>
