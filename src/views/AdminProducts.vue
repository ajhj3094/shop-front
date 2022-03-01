<template lang="pug">
#adminproducts
  h1.text-center 商品管理
  .text-center
    v-dialog(v-model='dialog' width='500' persistent)
      template(v-slot:activator='{ on, attrs }')
        v-btn(color='red lighten-2' dark v-bind='attrs' v-on='on').
          新增商品
      v-card
        v-card-title.text-h5.grey.lighten-2.
          {{ isEdit }}
        v-form.mx-5.my-5(ref='form' v-model='valid' lazy-validation)
          v-text-field(v-model='form.name' outlined :counter='10' :rules='pnameRules' label='商品名稱' required)
          v-text-field.mt-2(type='number' hide-spin-buttons outlined v-model='form.price' :counter='10' :rules='priceRules' label='商品價格' required prefix='$')
          v-select.mt-5.test123(v-model='form.category' outlined :items='Pitems' :rules="[v => !!v || 'Item is required']" label='商品分類' required)
          v-select.mt-5.test123(v-model='form.gender' outlined :items='Gitems' :rules="[v => !!v || 'Gender is required']" label='使用者分類' required)
          v-textarea.mt-5(
            v-model='form.description'
            placeholder='請輸入商品描述'
            clearable
            clear-icon="mdi-close-circle"
            outlined
            name='input-7-4'
            label='商品描述'
            value=''
          )
          v-row
            v-col(cols='4')
              v-radio-group.pl-2.my-2(v-model='form.sell' mandatory)
                v-radio(label='上架' :value='true')
                v-radio(label='下架' :value='false')
            v-divider(vertical style="height: 100px")
            v-col(cols='4')
              v-radio-group.pl-2.my-2(v-model='form.size' mandatory)
                v-radio(label='多個尺寸' :value='true')
                v-radio(label='無' :value='false')
            v-divider(vertical style="height: 100px")
            v-col(cols='4')
              v-radio-group.pl-2.my-2(v-model='form.color' mandatory)
                v-radio(label='多款顏色' :value='true')
                v-radio(label='無' :value='false' @click='nocolor()')
            v-col(cols='12' v-if='form.color')
              v-card(flat)
                v-card-text
                  v-container(fluid)
                    v-row
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='紅' color='red' value='紅' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='粉紅' color='pink' value='粉紅' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='紫' color='purple' value='紫' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='藍' color='blue' value='藍' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='綠' color='green' value='綠' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='黃' color='yellow' value='黃' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='卡其' color='brown lighten-3' value='卡其' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='深卡其' color='brown darken-1' value='深卡其' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='深藍' color='indigo' value='深藍' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='淺藍' color='light-blue' value='淺藍' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='深綠' color='teal' value='深綠' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='淺綠' color='light-green' value='淺綠' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='橘' color='orange' value='橘' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='棕' color='brown' value='棕' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='藏青' color='blue-grey' value='藏青' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='灰' color='grey darken-2' value='灰' hide-details)
                      v-col(cols='12' sm='4' md='4')
                        v-checkbox(v-model='form.coloroptions' label='黑' color='black' value='黑' hide-details)
                        v-checkbox(v-model='form.coloroptions' label='白' color='grey' value='白' hide-details)
          VueFileAgent(
            ref="vueFileAgent"
            :theme="'list'"
            :multiple="true"
            :deletable="true"
            :meta="true"
            :accept="'image/*'"
            :maxSize="'1MB'"
            :maxFiles="14"
            :helpText="'選擇圖片檔案'"
            :errorText="{ type: '檔案類型錯誤，請上傳正確的圖片檔', size: '檔案不能超過 1MB' }"
            @select='filesSelected($event)'
            @beforedelete='onBeforeDelete($event)'
            @delete='fileDeleted($event)'
            v-model='fileRecords'
          )
        v-divider
        v-card-actions
          v-spacer
          v-btn.mr-1(:disabled='modalSubmitting' color='error' @click='resetForm()').
            取消
          v-btn.mr-1(:disabled='modalSubmitting' color='primary' dark @click='reset()').
            清空表單
          v-btn.mr-4(:disabled='!valid || modalSubmitting' color='success' @click='validate();submitModal()').
            完成送出
  v-card
    v-card-title
      v-text-field(
        v-model='search'
        append-icon='mdi-magnify'
        label="Search"
        single-line
        hide-details
      )
    v-data-table(
      :headers="headers"
      :items="products"
      :items-per-page="5"
      :search="search"
      class="elevation-1"
      show-group-by
      sort-by="sell"
      group-by="category"
      item-key="_id"
      no-data-text='沒有商品'
    )
      template(#item.image='{item}')
        v-img.mt-1.mx-auto(:src='item.image[0]' style='width: 70px;height: 50px' contain)
        p.mb-0 共 {{ item.image.length}} 張圖片
      template(#item.price='{item}')
        //- div.d-flex.justify-space-between(style="width:30%")
        p.mb-0 NT$
          span.ml-2 {{item.price}}
      template(#item.sell='{item}')
        h1 {{item.sell ? 'v' : ''}}
      template(#item.none='{item}')
        v-btn(color='success' @click='editProduct(item._id)') 編輯
</template>

<script>
export default {
  data () {
    return {
      // theads: ['圖片', '名稱', '價格', '分類', '說明', '上架', '操作'],
      headers: [
        { text: '圖片', align: 'center', sortable: false, value: 'image', groupable: false },
        { text: '名稱', align: 'center', value: 'name' },
        { text: '價格', align: 'center', value: 'price' },
        { text: '商品分類', align: 'center', value: 'category' },
        { text: '使用者分類', align: 'center', value: 'gender' },
        { text: '說明', align: 'center', value: 'description' },
        { text: '上架', align: 'center', value: 'sell' },
        { text: '操作', align: 'center', value: 'none' }
      ],
      products: [],
      modalSubmitting: false,
      dialog: false,
      form: {
        name: '',
        price: null,
        description: '',
        image: [],
        sell: false,
        color: false,
        coloroptions: [],
        size: false,
        category: null,
        gender: null,
        _id: '',
        index: -1
      },
      valid: true,
      pnameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      priceRules: [
        v => !!v || 'Price is required',
        v => v >= 0 || '價格不能小於 0'
      ],
      Pitems: [
        { text: '--請選擇商品分類--', value: null },
        '登山健行',
        '滑雪',
        '外套',
        '露營'
      ],
      Gitems: [
        { text: '--請選擇使用者分類--', value: null },
        '通用',
        '男生',
        '女生'
      ],
      fileRecords: [],
      uploadUrl: 'https://www.mocky.io/v2/5d4fb20b3000005c111099e3',
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
      fileRecordsForUpload: [], // maintain an upload queue
      search: ''
    }
  },
  computed: {
    isEdit () {
      return this.form._id ? '編輯商品' : '新增商品'
    },
    editDontNeedImg () {
      if (this.form._id.length === 0) {
        return ''
      } else {
        return this.form.image === []
      }
    },
    mapfile () {
      const arr = this.fileRecordsForUpload.map(item => {
        return item.file
      })
      return arr
    }
  },
  methods: {
    nocolor () {
      if (!this.form.color) {
        this.form.coloroptions = []
      }
    },
    clickoutside () {
      this.dialog = true
    },
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
      this.fileRecordsForUpload = []
      this.fileRecords = []
      this.form = {
        image: [],
        category: null,
        gender: null,
        _id: '',
        index: -1
      }
    },
    async submitModal () {
      this.modalSubmitting = true
      const fd = new FormData()
      for (const key in this.form) {
        if (key !== '_id') {
          if (key !== 'image') {
            if (key !== 'coloroptions') {
              fd.append(key, this.form[key])
            }
          }
        }
      }
      for (const file of this.form.image) {
        fd.append('image', file)
      }
      for (const option of this.form.coloroptions) {
        fd.append('coloroptions', option)
      }
      try {
        // 新增
        if (this.form._id.length === 0) {
          const { data } = await this.api.post('/products', fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          // console.log(data.result)
          this.products.push(data.result)
        } else {
          // 編輯
          const { data } = await this.api.patch('/products/' + this.form._id, fd, {
            headers: {
              authorization: 'Bearer ' + this.user.token
            }
          })
          // console.log(...this.form)
          // this.products[this.form.index] = { ...this.form, image: data.result.image }
          // 編輯後 table 不會更新，所有這裡編輯後整條刪除後再丟編輯後的進去那該位置
          this.products.splice(this.form.index, 1, data.result)
        }
        this.dialog = false
        this.reset()
      } catch (error) {
        if (this.form.name === '' || (this.form.price === null || '') || this.form.category === null) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '必填欄位不能為空'
          })
        } else if (this.form.image === []) {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: '圖片欄位不得為空'
          })
        } else {
          this.$swal({
            icon: 'error',
            title: '錯誤',
            text: error.response.data.message + 'hhihi'
          })
        }
      }
      this.modalSubmitting = false
    },
    resetForm (event) {
      // 上傳送出會有延遲，所以避免送出後使用者狂按送出上傳好幾次，要在送出後停掉
      // 但這裡 preventDefault 沒有作用 QQ
      if (this.modalSubmitting) {
        event.preventDefault()
        return
      }
      this.fileRecordsForUpload = []
      this.fileRecords = []
      this.dialog = false
      this.form = {
        name: '',
        price: null,
        description: '',
        image: [],
        sell: false,
        color: false,
        size: false,
        category: null,
        gender: null,
        index: -1
      }
    },
    editProduct (id) {
      const index = this.products.map(item => item._id).indexOf(id)
      this.form = { ...this.products[index], image: [], index }
      this.dialog = true
    },
    filesSelected (fileRecordsNewlySelected) {
      var validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error)
      this.fileRecordsForUpload = this.fileRecordsForUpload.concat(validFileRecords)
    },
    onBeforeDelete (fileRecord) {
      var i = this.fileRecordsForUpload.indexOf(fileRecord)
      if (i !== -1) {
      // queued file, not yet uploaded. Just remove from the arrays
        this.fileRecordsForUpload.splice(i, 1)
        var k = this.fileRecords.indexOf(fileRecord)
        if (k !== -1) this.fileRecords.splice(k, 1)
      } else {
        if (confirm('確定要刪除檔案嗎？')) {
          this.$refs.vueFileAgent.deleteFileRecord(fileRecord) // will trigger 'delete' event
        }
      }
    }
  },
  async created () {
    try {
      const { data } = await this.api.get('/products/all', {
        headers: {
          authorization: 'Bearer ' + this.user.token
        }
      })
      this.products = data.result
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得商品失敗'
      })
    }
  },
  watch: {
    fileRecordsForUpload: {
      deep: true,
      handler (value) {
        this.form.image = this.mapfile
      }
    }
  }
}
</script>
