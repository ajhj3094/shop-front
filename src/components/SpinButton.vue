<template lang="pug">
v-form.spin-button
  v-text-field(
    dense
    width='20'
    type='number'
    v-model.number='test'
    min='10'
    :rules='qtyrules'
    hide-spin-buttons
    outlined
    append-icon='mdi-plus'
    prepend-inner-icon='mdi-minus'
    @click:append='quantity++;changeValue(test)'
    @click:prepend-inner='quantity > 1 ? quantity-- : null;changeValue(test)'
    @input='changeValue(test)'
  )
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      qtyrules: [
        v => v > 0 || '數量必須大於 0',
        v => !!v || '必填項目'
      ]
    }
  },
  computed: {
    test: {
      get () {
        return this.quantity
      },
      set (val) {
        // update:quantity 不能寫成 update: quantity，中間不許空格
        this.$emit('update:quantity', val)
      }
    }
  },
  methods: {
    changeValue (value) {
      this.$emit('change-value', value)
    }
  }
}
</script>
