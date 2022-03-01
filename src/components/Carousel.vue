<template lang="pug">
v-carousel#carousel(
  v-model='model'
  cycle
  interval='300000'
  hide-delimiter-background
  height='680'
)
  v-carousel-item(
    v-for='(color, i) in pics'
    :key='color'
  )
    v-parallax(
      dark
      :src='color'
      height='680'
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
        'https://picsum.photos/seed/picsum/1920/1080',
        'https://picsum.photos/1920/1080',
        'https://picsum.photos/id/1003/1920/1080',
        'https://picsum.photos/1920/1080?grayscale'
      ]
    }
  }
}
</script>
