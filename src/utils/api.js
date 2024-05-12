import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://admin.finitrek.com'
})

export const get = (url)=> axiosInstance.get(url)

export const post = (url, body)=> axiosInstance.post(url, body)
