import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

// config timeout
axios.defaults.timeout = 5 * 10000

// config cookie
// axios.defaults.withCredentials = true

// config request header
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'

// config base url
axios.defaults.baseURL = 'http://localhost:3002'

// config request interceptors
axios.interceptors.request.use(
  (req) => req,
  (err) => Promise.reject(err)
)

// config response interceptors
axios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
)

// GET
function GET<T, S>(url: string, params: T): Promise<S> {
  return new Promise((resolve, reject) => {
    axios
      .get(url, { params })
      .then((res: AxiosResponse<S>) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// POST
function POST<T, S>(
  url: string,
  params: { arg: T },
): Promise<S> {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params.arg)
      .then(
        (res: AxiosResponse<S>) => {
          resolve(res.data)
        },
        (err) => {
          reject(err)
        }
      )
      .catch((err) => {
        reject(err)
      })
  })
}

// PUT
function PUT<T, S>(url: string, params: T): Promise<S> {
  return new Promise((resolve, reject) => {
    axios
      .put(url, params)
      .then((res: AxiosResponse<S>) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

// DELETE
function DELETE<T, S>(url: string, params: T): Promise<S> {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, { data: params })
      .then((res: AxiosResponse<S>) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export { GET, POST, PUT, DELETE }
