import axios from 'axios'

const axiom = axios.create({
  baseURL: '/api/',
  timeout: 4000,
})

axiom.interceptors.response.use(
  (response) => {
    if (response.data.err) {
      window.alert(response.data.err.msg)
    }

    return response
  },
  (error) => {
    console.error(error)
    throw error
  }
)

export default axiom
