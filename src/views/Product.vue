<template lang="pug">
v-container#product
  v-overlay.text-center(:value="!this.sell" dark)
    v-progress-circular.mx-auto(indeterminate size="64")
    //- h1 商品已下架
  v-row
    v-col(cols='6').d-flex.flex-column.align-center
      v-img.my-4(height='520' width='900' :src='preview' contain)
      .w-100.d-flex.justify-center
        v-card.mt-2.mx-1(v-for='item in image' :key='item.id' height='110' width='100' @click='changepic(item)' flat)
          v-img(:src='item' contain)
    v-col(cols='6')
      h1.mt-4 {{ name }}
      h4 {{ category }}
      p.mt-2(style='white-space: pre;' v-if='description.length > 0') {{ description }}
      p(style='white-space: pre;' v-else) 無商品描述
      h1.text-left.maincolor--text $ {{ price }}
      v-form.mt-16
        v-row
          v-col(cols='6' v-if='color' style="height: 90px")
            v-select(v-model='colordecision' :items='coloroptions' label='請選擇商品顏色' outlined chips hide-details)
          v-col(cols='6' v-else style="height: 90px")
            v-select(v-model='colordecision' :items='coloroptions' label='此商品為單一顏色' outlined chips hide-details disabled)
          v-col(cols='6' v-if='size' style="height: 90px")
            v-select(v-model='sizedecision' :items='sizeoptions' label='請選擇商品尺寸' outlined chips hide-details)
          v-col(cols='6' v-else style="height: 90px")
            v-select(v-model='sizedecision' :items='sizeoptions' label='此商品為單一尺寸' outlined chips hide-details disabled)
          //- v-col(cols='12' v-if='!size || !color' style="height: 90px")
          v-col.mt-6(cols='2' style="height: 90px")
            h2 數量
          v-col.mt-6(cols='7' style="height: 90px")
            v-text-field(
              readonly
              height='20'
              type='number'
              v-model.number='quantity'
              min='0'
              :rules='qtyrules'
              hide-spin-buttons
              outlined
              append-icon='mdi-plus'
              prepend-inner-icon='mdi-minus'
              @click:append='quantity++'
              @click:prepend-inner='quantity > 0 ? quantity-- : null'
            )
          v-col(cols='12' style="height: 0px")
          v-col.mt-5(cols='9' style="height: 90px")
            v-btn(color='yellowbtn' @click='addCart' block height='60')
              p.mb-0.sd-font.darkbg--text 加入購物車
          v-col(cols='3' style="height: 90px")
            v-btn.mt-8(color='red' @click='goback' dark block height='40') 上一頁
    v-col(cols='6')
      v-divider
    v-col(cols='6')
    //- v-spacer
    v-col(cols='6')
      v-dialog(
        v-model='reviewdialog'
        width='500px'
        color='red'
        @click:outside='form.text = "";form.rating = 3'
      )
        template(#activator='{ on, attrs }')
          v-btn(
            block
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
            height='50'
          )
            p.mb-0.sd-font 我要評論
        v-card
          v-card-title
            v-avatar(
            )
              v-img(:src='"https://source.boringavatars.com/beam/120/" + this.user._id')
            p.text-h6.grey--text.text--darken-2.mb-0.ml-3 {{ this.user.account }}
          v-card-text.pb-2
            v-rating(
              v-model='form.rating'
              background-color="grey lighten-1"
              color="warning"
              dense
              half-increments
              hover
              length="5"
              size="33"
              value="3"
            )
          v-card-text.pb-2
            v-textarea(
              no-resize
              outlined
              v-model='form.text'
              hide-details
              height='150'
            )
          v-card-actions
            v-row.ma-n2
              v-col(cols='6')
                v-btn(
                  @click='submit()'
                  color='success'
                  block
                ) 送出
              v-col(cols='6')
                v-btn(
                  @click='form.text = "";form.rating = 2;reviewdialog = false'
                  color='error'
                  block
                ) 取消
    v-col.d-flex.flex-column-reverse(cols='6')
    v-col.d-flex.flex-column-reverse(cols='6')
      v-card.my-3.mx-5.reviewcard(v-for='item in review' :key='item._id')
        v-card-title
          v-avatar.mr-3(
          )
            v-img(:src='"https://source.boringavatars.com/beam/120/" + item._id')
          | {{ item.user }}
        v-card-subtitle.mt-n2
          v-rating(
            readonly
            v-model='item.rating'
            background-color="grey lighten-1"
            color="warning"
            dense
            half-increments
            hover
            length="5"
            size="20"
            value="3"
          )
        v-card-text
          p.text-body-1.grey--text.text--darken-3.font-weight-bold.sd-font.mb-0(style='white-space: pre-wrap;') {{ item.text }}
          p.text-right.mb-0 {{ new Date(item.date).toLocaleString('zh-tw') }}
</template>

<script>
export default {
  name: 'Product',
  components: {

  },
  data () {
    return {
      reviewdialog: false,
      preview: '',
      name: '',
      price: 0,
      description: '',
      image: [],
      sell: false,
      size: false,
      sizeoptions: [
        'XXL', 'XL', 'L', 'M', 'S', 'XS', 'XXS'
      ],
      sizedecision: '',
      color: false,
      coloroptions: [],
      colordecision: '',
      category: '',
      // 使用者加幾個進購物車
      quantity: 0,
      qtyrules: [
        v => v > 0 || '數量必須大於 0',
        v => !!v || '必填項目'
      ],
      review: [],
      form: {
        rating: 3,
        text: ''
      },
      starRating: 3
    }
  },
  methods: {
    goback () {
      this.$router.back(-1)
    },
    iwainttoreview () {
      this.reviewdialog = true
    },
    changepic (value) {
      this.preview = value
    },
    addCart () {
      this.$store.dispatch('user/addCart', { product: this.$route.params.id, quantity: this.quantity, size: this.sizedecision, hassize: this.size, color: this.colordecision, hascolor: this.color, custom: this.custom })
    },
    async submit () {
      try {
        if (!this.user.isLogin) {
          this.$swal({
            icon: 'success',
            title: '未登入',
            text: '請先登入'
          })
          this.$router.push('/login')
          return
        } else if (this.form.text.length === 0) {
          this.$swal({
            icon: 'error',
            title: '傳送失敗',
            text: '輸入欄位是空的'
          })
          return
        }
        const { data } = await this.api.post('/products/' + this.$route.params.id, this.form, {
          headers: {
            authorization: 'Bearer ' + this.user.token
          }
        })
        this.id = data.result._id
        this.review = data.result.review
        this.reviewdialog = false
        this.form.text = ''
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '失敗',
          text: error.response.data.message
        })
      }
    }
  },
  computed: {
    custom () {
      if (this.color && this.size) {
        return `${this.colordecision + '色 - '} ${this.sizedecision + '號'}  x ${this.quantity}`
      } else if (!this.color && this.size) {
        return `${this.sizedecision + '號'}  x ${this.quantity}`
      } else if (this.color && !this.size) {
        return `${this.colordecision + '色'}  x ${this.quantity}`
      } else {
        return false
      }
    }
  },
  async created () {
    try {
      // 用路由參數把網址的 id 抓進來
      const { data } = await this.api.get('/products/' + this.$route.params.id)
      this.name = data.result.name
      this.price = data.result.price
      this.description = data.result.description
      this.image = data.result.image
      this.sell = data.result.sell
      this.color = data.result.color
      this.size = data.result.size
      this.category = data.result.category
      this.gender = data.result.gender
      this.review = data.result.review
      this.coloroptions = data.result.coloroptions
      document.title = `Hiver | ${this.name}`
      this.preview = this.image[0]
    } catch (error) {
      this.$router.push('/')
    }
  },
  mounted () {
  }
}
</script>
