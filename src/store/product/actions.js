import { api } from '@/plugins/axios.js'

export const search = async ({ commit, state }, data) => {
  try {
    const { data: resData } = await api.post('/products/search', { keywords: data },
      { params: { keywords: data } })
    // const { data: resData } = await api.get('/products/search',
    //   { params: { keywords: data } })
    console.log(resData.result)
    commit('search', resData.result)
  } catch (error) {
    console.log(error)
  }
}
