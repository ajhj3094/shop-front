<template lang="pug">
v-carousel#carousel(
  v-model='model'
  cycle
  interval='6000'
  hide-delimiter-background
  height='600'
)
  v-carousel-item(
    v-for='(color, i) in pics'
    :key='color'
  )
    v-parallax(
      dark
      :src='require("@/assets/" + color)'
      height='600'
    )
      v-row(align='center' justify='center')
        v-col.text-center(cols='12')
          h1.text-h4.font-weight-thin.mb-4.
            Vuetify
          h4.subheading.
            Build your application today!
</template>

<script>
export default {
  data () {
    return {
      model: 0,
      pics: [
        'live.jpg',
        'live-01.jpg',
        'live-7.jpg',
        'live-4.jpg'
      ]
    }
  }
}
</script>
