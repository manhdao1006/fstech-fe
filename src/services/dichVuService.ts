import { API_ENDPOINTS } from '@/configs/apiConfig'
import axios from 'axios'

export const getDichVus = async () => {
    const response = await axios.get(API_ENDPOINTS.DICHVU.GET_DICHVUS)

    return response.data.result
}

export const getDichVuByMaDichVu = async (maDichVu: number) => {
    const response = await axios.get(API_ENDPOINTS.DICHVU.GET_BY_MADICHVU(maDichVu))

    return response.data.result
}
