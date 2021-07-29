import axios from 'axios'
// export const BASE_URL = 'http://localhost:5000'
export const client = axios.create({baseURL:process.env.REACT_APP_BASE_URL})

export const ENDPOINTS = {
    SIGNIN : '/api/auth/signin',
    SIGNUP : '/api/auth/signup ',
    USERS : '/api/user/find',
    USER: (id) => `/api/user/findById/${id}`,
    USER_UPDATE: (id) => `/api/user/updateById/${id}`
}