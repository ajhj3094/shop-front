<template lang="pug">
v-container#admin
  v-row
    v-col(cols='12')
      v-tabs(fixed-tabs background-color='indigo' dark active-class hide-slider)
        v-tab(to='/admin/feedbacks').
          顧客回饋系統
        v-tab(to='/admin/products').
          商品管理
        v-tab(to='/admin/orders').
          訂單管理
    v-col(cols='12')
      router-view
</template>

<script>
export default {

}
</script>
