<template lang="pug">
v-container#shop
  v-card.d-flex.flex-column.justify-end.px-5.py-6.my-5(
    img='https://picsum.photos/id/10/1920/1080'
    height='400'
  )
    v-card-title
      p.white--text() 登山健行
  div(style='height:35px').my-6.test-color
  v-row
    v-col(cols='12' md='6' lg='3' v-if='searchBar.length > 0' v-for='product in keywords' :key='product._id')
      ProductCard(
        :product='product'
      )
    v-col(cols='12' md='6' lg='3' v-if='searchBar.length === 0' v-for='product in products' :key='product._id')
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
      products: []
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products')
      this.products = data.result
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
