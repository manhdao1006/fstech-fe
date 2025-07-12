export const BASE_URL = 'http://localhost:8080'

export const API_ENDPOINTS = {
    GIAODICH: {
        GET_GIAODICHS: `${BASE_URL}/api/giao-dich/danh-sach`,
        CHECK_MA: ` ${BASE_URL}/api/giao-dich/check-ma`,
        ADD: `${BASE_URL}/api/giao-dich/them-moi`,
        UPDATE: (maGiaoDich: string) => `${BASE_URL}/api/giao-dich/cap-nhat/${maGiaoDich}`,
        DELETE: (maGiaoDich: string) => `${BASE_URL}/api/giao-dich/xoa/${maGiaoDich}`
    },
    KHACHHANG: {
        GET_KHACHHANGS: `${BASE_URL}/api/khach-hang/danh-sach`,
        GET_BY_MAKHACHHANG: (maKhachHang: number) => `${BASE_URL}/api/khach-hang/${maKhachHang}`
    },
    DICHVU: {
        GET_DICHVUS: `${BASE_URL}/api/dich-vu/danh-sach`,
        GET_BY_MADICHVU: (maDichVu: number) => `${BASE_URL}/api/dich-vu/${maDichVu}`
    }
}
