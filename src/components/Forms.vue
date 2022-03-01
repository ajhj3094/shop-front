<template lang="pug">
v-form#forms(
  v-model='valid'
  @submit.prevent='register'
)
  v-container
    v-row.flex-column.align-center.justify-center.mt-16
      v-col(cols='12' md='4')
        v-text-field(
          v-model='form.account'
          :rules='accountRules'
          :counter='20'
          label='Account'
          required
          outlined
        )
      v-col(cols='12' md='4')
        v-text-field.input-group--focused(
          v-model='form.password'
          :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules='[rules.required, rules.min]'
          :type="show3 ? 'text' : 'password'"
          name='input-10-2'
          label='Password'
          hint='At least 8 characters'
          value=''
          placeholder='請輸入密碼'
          @click:append='show3 = !show3'
          outlined
        )
      v-col(cols='12' md='4')
        v-text-field(
          v-model='form.email'
          :rules='emailRules'
          label='E-mail'
          value='456'
          required
          outlined
        )
      v-col(cols='6' md='4')
        v-btn(depressed color='primary' type='submit') 註冊
</template>

<script>
export default {
  data () {
    return {
      form: {
        account: '',
        password: '',
        email: ''
      },
      valid: false,
      lastname: '',
      accountRules: [
        v => !!v || 'Account is required',
        v => v.length <= 20 || 'Name must be less than 20 characters',
        v => v.length >= 4 || 'Name must be less than 4 characters'
      ],
      show3: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 4 || 'Min 4 characters',
        emailMatch: () => ("The email and password you entered don't match")
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    async register () {
      try {
        await this.api.post('/users', this.form)
        this.$swal({
          icon: 'success',
          title: '成功',
          text: '註冊成功'
        })
        this.$router.push('/')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  }
}
</script>
