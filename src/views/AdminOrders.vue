<template lang="pug">
#adminorders
  v-data-table(
    :headers="headers"
    :items="orders"
    :items-per-page="5"
    class="elevation-1"
  )
    template(#item.user='{ item }')
      | {{ item.user.account }}
    template(#item.date='{ item }')
      | {{ new Date(item.date).toLocaleString('zh-tw') }}
    template(#item.products='{ item }')
      ul
        li(v-for='product in item.products' :key='product._id')
          |  {{ product.product.name }} x {{ product.quantity }}
</template>

<script>
export default {
  data () {
    return {
      orders: [],
      headers: [
        { text: '單號', value: '_id' },
        { text: '使用者', value: 'user' },
        { text: '日期', value: 'date' },
        { text: '商品', value: 'products' }
      ]
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/orders/all', {
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
