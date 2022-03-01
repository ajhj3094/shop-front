import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Swal from 'sweetalert2'
import store from '../store'
import router from '../router'

export const api = axios.create({
  baseURL: process.env.VUE_APP_API
})

// axios 攔截器
// axios 呼叫回應時 --> 攔截器 --> 呼叫的地方的 trycatch
api.interceptors.response.use(res => {
  return res
}, error => {
  // 如果 axios 有收到回傳的東西
  if (error.response) {
    // 如果錯誤是 401，JWT 可能過期了
    if (error.response.status === 401) {
      // 如果原始請求的位址不是延長登入，才延長登入
      if (error.config.url !== '/users/extend') {
        // 原始請求的設定
        const originalRequest = error.config
        // 傳送延長登入的請求
        return api.post('/users/extend', {}, {
          headers: {
            authorization: 'Bearer ' + store.state.user.token
          }
        }).then(({ data }) => {
          // 如果延長登入請求成功，更新 vuex 的 token
          store.commit('user/extend', data.result.token)
          // 更新原始請求的 token
          originalRequest.headers.authorization = 'Bearer ' + store.state.user.token
          // 重新傳送一次請求並回傳新請求
          return axios(originalRequest)
        }).catch(error => {
          // 如果延長登入請求失敗，登出
          store.commit('user/logout')
          router.push('/login')
          // 將延長請求的錯誤回傳
          return Promise.reject(error)
        })
      }
    }
  } else {
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      Swal.fire({
        icon: 'error',
        title: '錯誤',
        text: '請求逾時'
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: '錯誤',
        text: '網路不穩定'
      })
    }
  }
  return Promise.reject(error)
})

Vue.use(VueAxios, { axios, api })
