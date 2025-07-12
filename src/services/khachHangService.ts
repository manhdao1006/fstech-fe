import { API_ENDPOINTS } from '@/configs/apiConfig'
import axios from 'axios'

export const getKhachHangs = async () => {
    const response = await axios.get(API_ENDPOINTS.KHACHHANG.GET_KHACHHANGS)

    return response.data.result
}

export const getKhachHangByMaKhachHang = async (maKhachHang: number) => {
    const response = await axios.get(API_ENDPOINTS.KHACHHANG.GET_BY_MAKHACHHANG(maKhachHang))

    return response.data.result
}
