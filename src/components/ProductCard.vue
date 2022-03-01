<template lang="pug">
//- v-card.card-product(:to='"/product/" + product._id')
//-   v-img(:src="product.image[0]" height="280")
//-   v-card-title(:to='"/product/" + product._id') {{ product.name }}
//-   v-card-subtitle {{ product.category }} - {{ '$ ' + product.price }}
//-   v-card-text(style='white-space: pre;') {{ product.description }}
div
  v-card.card-product(:to='"/product/" + product._id')
    v-img(:src="waiting" height="330")
  .d-flex.justify-center
    v-card.my-2(:img='src' width='60' height='70' v-for='src in product.image' :key='src.id' @click='changesrc(src)')
      //- v-img(:src='src' width='60' height='70')
  router-link.text-truncate.w-100.d-flex.flex-column.align-center.black--text.text-decoration-none.mb-2(:to='"/product/" + product._id')
    h4.text-center.pcardtext.w-100.text-truncate
      | {{ product.name }}
    span.text-truncate.text-center.w-100 {{ product.description }}
  h4.text-center.mb-2 {{ product.category }}
  h4.text-center.maincolor--text.text-subtitle-1.font-weight-bold {{ '$' + product.price }}
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      waiting: ''
    }
  },
  methods: {
    changesrc (value) {
      this.waiting = value
    }
  },
  created () {
    this.waiting = this.product.image[0]
  }
}
</script>
