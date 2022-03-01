<template lang="pug">
v-container#orders
  v-data-table(
    :headers="headers"
    :items="orders"
    :items-per-page="5"
    class="elevation-1"
  )
    template(#item.date='{ item }')
      | {{ new Date(item.date).toLocaleString('zh-tw') }}
    template(#item.products='{ item }')
      ul
        li(v-for='product in item.products' :key='product._id')
          |  {{ product.product.name }} x {{ product.quantity }}
    template(#item.products.custom='{ item }')
      div(v-for='product in item.products')
        div(v-for='pro in product.custom' v-if='pro')
          | {{ pro }}
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      headers: [
        { text: '單號', value: '_id' },
        { text: '日期', value: 'date' },
        { text: '商品', value: 'products' },
        { text: '備註', value: 'products.custom' }
      ]
    }
  },
  computed: {
    customarr () {
      const arr = this.orders.map(item => {
        return item.products
      }).map(item => {
        return item
      })
      return arr
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/me', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.orders = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '失敗',
        text: '取得訂單失敗'
      })
    }
  }
}
</script>
