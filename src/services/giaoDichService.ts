import { API_ENDPOINTS } from '@/configs/apiConfig'
import axios from 'axios'

export const checkMaGiaoDichExists = async (ma: string) => {
    const res = await axios.get(API_ENDPOINTS.GIAODICH.CHECK_MA, {
        params: { maGiaoDich: ma }
    })
    return res.data
}

export const getGiaoDichs = async () => {
    const response = await axios.get(API_ENDPOINTS.GIAODICH.GET_GIAODICHS)

    return response.data.result
}

export const addGiaoDich = async (formData: FormData) => {
    try {
        const response = await axios.post(API_ENDPOINTS.GIAODICH.ADD, formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.data.code === 200) {
            return { success: true, message: 'Thêm mới thành công' }
        } else {
            return { success: false, message: 'Thêm mới thất bại' }
        }
    } catch (error) {
        return { success: false, message: 'Có lỗi khi thêm mới' }
    }
}

export const updateGiaoDich = async (maGiaoDich: string, formData: FormData) => {
    try {
        const response = await axios.put(API_ENDPOINTS.GIAODICH.UPDATE(maGiaoDich), formData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (response.data.code === 200) {
            return { success: true, message: 'Cập nhật thành công' }
        } else {
            return { success: false, message: 'Cập nhật thất bại' }
        }
    } catch (error) {
        return { success: false, message: 'Có lỗi khi cập nhật' }
    }
}

export const deleteGiaoDich = async (maGiaoDich: string) => {
    try {
        const response = await axios.put(API_ENDPOINTS.GIAODICH.DELETE(maGiaoDich))

        if (response.data.code === 200) {
            return { success: true, message: 'Xóa thành công' }
        } else {
            return { success: false, message: 'Xóa thất bại' }
        }
    } catch (error) {
        return { success: false, message: 'Có lỗi khi xóa' }
    }
}
