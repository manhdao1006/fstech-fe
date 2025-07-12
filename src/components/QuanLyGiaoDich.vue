<template>
    <div class="container-fluid">
        <div class="row mt-2 mb-2">
            <div class="fs-3 fw-bolder text-center">Quản lý Giao dịch Nhà và Đất</div>
        </div>
        <div class="row mt-2 mb-2">
            <div class="col-5">
                <input
                    class="form-control"
                    v-model="searchTenKhachHang"
                    placeholder="Tìm Kiếm Theo Tên Khách Hàng"
                />
            </div>
            <div class="col-5">
                <select v-model="searchMaDichVu" class="form-select" aria-label="Loại dịch vụ">
                    <option value="">Tất cả loại dịch vụ</option>
                    <template v-for="dichVu in allDichVus" :key="dichVu.maDichVu">
                        <option :value="dichVu.maDichVu">
                            {{ dichVu.tenDichVu }}
                        </option>
                    </template>
                </select>
            </div>
            <div class="col-2">
                <button class="btn btn-success w-100" @click="handleSearch">
                    <Search :size="14" /> <span class="fs-6">Tìm kiếm</span>
                </button>
            </div>
        </div>
        <div class="row mt-2 mb-2">
            <div class="text-start">
                <button
                    class="btn btn-success"
                    data-bs-toggle="modal"
                    data-bs-target="#modalAdd"
                    @click="resetAdd"
                >
                    <Plus :size="14" /> <span class="fs-6">Thêm mới</span>
                </button>
            </div>
        </div>

        <BaseModal
            ref="modalAddRef"
            modalId="modalAdd"
            title="Thêm mới Giao dịch"
            size="modal-lg"
            @close="resetAdd"
        >
            <template #body>
                <div v-if="isError" class="alert alert-danger">
                    {{ messageError }}
                </div>
                <form @submit.prevent="handleAdd" class="text-start">
                    <div class="mb-3">
                        <label class="form-label">Mã Giao dịch</label>
                        <input
                            @input="giaoDich.maGiaoDich = giaoDich.maGiaoDich.toUpperCase()"
                            v-model="giaoDich.maGiaoDich"
                            class="form-control"
                            :class="{ 'is-invalid': isMaGiaoDichExists }"
                            required
                        />
                        <div class="text-danger" v-if="isMaGiaoDichExists">
                            Mã giao dịch đã tồn tại
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Loại dịch vụ</label>
                        <select
                            v-model="giaoDich.maDichVu"
                            class="form-select"
                            aria-label="Default select example"
                            required
                        >
                            <option selected disabled>Chọn dịch vụ</option>
                            <template v-for="dichVu in allDichVus" :key="dichVu.maDichVu">
                                <option :value="dichVu.maDichVu">
                                    {{ dichVu.tenDichVu }}
                                </option>
                            </template>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ngày Giao dịch</label>
                        <input
                            v-model="giaoDich.ngayGiaoDich"
                            class="form-control"
                            type="date"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Đơn giá</label>
                        <input v-model="giaoDich.donGia" class="form-control" required />
                        <div class="text-danger" v-if="isDirtyDonGia && checkDonGia">
                            {{ checkDonGia }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Diện tích (m2)</label>
                        <input v-model="giaoDich.dienTich" class="form-control" required />
                        <div class="text-danger" v-if="isDirtyDienTich && checkDienTich">
                            {{ checkDienTich }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tên Khách hàng</label>
                        <select
                            v-model="giaoDich.maKhachHang"
                            class="form-select"
                            aria-label="Default select example"
                            required
                        >
                            <option selected disabled>Chọn khách hàng</option>
                            <template
                                v-for="khachHang in allKhachHangs"
                                :key="khachHang.maKhachHang"
                            >
                                <option :value="khachHang.maKhachHang">
                                    {{ khachHang.tenKhachHang }}
                                </option>
                            </template>
                        </select>
                    </div>
                </form>
            </template>

            <template #footer>
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                    @click="resetAdd"
                >
                    Đóng
                </button>
                <button class="btn btn-primary" @click="handleAdd">Thêm mới</button>
            </template>
        </BaseModal>

        <!-- <table class="table table-hover my-0">
            <thead>
                <tr>
                    <th>Mã Giao dịch</th>
                    <th>Loại dịch vụ</th>
                    <th>Ngày Giao dịch</th>
                    <th>Đơn giá (VNĐ/m2)</th>
                    <th>Diện tích (m2)</th>
                    <th>Tên Khách hàng</th>
                    <th>Số điện thoại</th>
                    <th>Email</th>
                    <th>Chi tiết</th>
                    <th>Chỉnh sửa</th>
                    <th>Xóa</th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="filteredGiaoDichs.length === 0">
                    <td colspan="11" class="text-center text-muted fst-italic">Danh sách trống</td>
                </tr>
                <tr v-for="(item, index) in filteredGiaoDichs" :key="(item as any).maGiaoDich">
                    <td>
                        {{ (item as any).maGiaoDich }}
                    </td>
                    <td>
                        {{ dichVus[Number((item as any).maDichVu)] }}
                    </td>
                    <td>
                        {{ (item as any).ngayGiaoDich }}
                    </td>
                    <td>
                        {{ (item as any).donGia }}
                    </td>
                    <td>{{ (item as any).dienTich }}</td>
                    <td>
                        {{ tenKhachHangs[Number((item as any).maKhachHang)] }}
                    </td>
                    <td>
                        {{ soDienThoais[Number((item as any).maKhachHang)] }}
                    </td>
                    <td>
                        {{ emails[Number((item as any).maKhachHang)] }}
                    </td>
                    <td>
                        <button
                            class="btn btn-warning"
                            data-bs-toggle="modal"
                            data-bs-target="#modalView"
                            @click="fetchItem(item)"
                        >
                            <Eye :size="14" />
                        </button>
                    </td>
                    <td>
                        <button
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#modalUpdate"
                            @click="fetchItem(item)"
                        >
                            <Pencil :size="14" />
                        </button>
                    </td>
                    <td>
                        <button
                            class="btn btn-danger"
                            data-bs-toggle="modal"
                            data-bs-target="#modalDelete"
                            @click="fetchItem(item)"
                        >
                            <Trash2 :size="14" />
                        </button>
                    </td>
                </tr>
            </tbody>
        </table> -->

        <BaseTable
            :columns="[
                { key: 'maGiaoDich', label: 'Mã Giao dịch' },
                { key: 'tenDichVu', label: 'Loại dịch vụ' },
                { key: 'ngayGiaoDich', label: 'Ngày Giao dịch' },
                { key: 'donGia', label: 'Đơn giá (VNĐ/m2)' },
                { key: 'dienTich', label: 'Diện tích (m2)' },
                { key: 'tenKhachHang', label: 'Tên Khách hàng' },
                { key: 'soDienThoai', label: 'Số điện thoại' },
                { key: 'email', label: 'Email' }
            ]"
            :items="mappedGiaoDichs"
            keyField="maGiaoDich"
            emptyText="Danh sách trống"
        >
            <template #actions="{ item }">
                <button
                    class="btn btn-warning me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modalView"
                    @click="fetchItem(item)"
                >
                    <Eye :size="14" />
                </button>
                <button
                    class="btn btn-primary me-1"
                    data-bs-toggle="modal"
                    data-bs-target="#modalUpdate"
                    @click="fetchItem(item)"
                >
                    <Pencil :size="14" />
                </button>
                <button
                    class="btn btn-danger"
                    data-bs-toggle="modal"
                    data-bs-target="#modalDelete"
                    @click="fetchItem(item)"
                >
                    <Trash2 :size="14" />
                </button> </template
        ></BaseTable>

        <BaseModal
            ref="modalUpdateRef"
            modalId="modalUpdate"
            title="Cập nhật Giao dịch"
            size="modal-lg"
        >
            <template #body>
                <div v-if="isError" class="alert alert-danger">
                    {{ messageError }}
                </div>
                <form @submit.prevent="handleUpdate" class="text-start">
                    <div class="mb-3">
                        <label class="form-label">Mã Giao dịch</label>
                        <input
                            v-model="giaoDich.maGiaoDich"
                            class="form-control"
                            required
                            disabled
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Loại dịch vụ</label>
                        <select
                            v-model="giaoDich.maDichVu"
                            class="form-select"
                            aria-label="Default select example"
                            required
                        >
                            <option selected disabled>Chọn dịch vụ</option>
                            <template v-for="dichVu in allDichVus" :key="dichVu.maDichVu">
                                <option :value="dichVu.maDichVu">
                                    {{ dichVu.tenDichVu }}
                                </option>
                            </template>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ngày Giao dịch</label>
                        <input
                            v-model="giaoDich.ngayGiaoDich"
                            class="form-control"
                            type="date"
                            required
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Đơn giá</label>
                        <input v-model="giaoDich.donGia" class="form-control" required />
                        <div class="text-danger" v-if="isDirtyDonGia && checkDonGia">
                            {{ checkDonGia }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Diện tích (m2)</label>
                        <input v-model="giaoDich.dienTich" class="form-control" required />
                        <div class="text-danger" v-if="isDirtyDienTich && checkDienTich">
                            {{ checkDienTich }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tên Khách hàng</label>
                        <select
                            v-model="giaoDich.maKhachHang"
                            class="form-select"
                            aria-label="Default select example"
                            required
                        >
                            <option selected disabled>Chọn khách hàng</option>
                            <template
                                v-for="khachHang in allKhachHangs"
                                :key="khachHang.maKhachHang"
                            >
                                <option :value="khachHang.maKhachHang">
                                    {{ khachHang.tenKhachHang }}
                                </option>
                            </template>
                        </select>
                    </div>
                </form>
            </template>

            <template #footer>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Đóng
                </button>
                <button class="btn btn-primary" @click="handleUpdate">Cập nhật</button>
            </template>
        </BaseModal>

        <BaseModal modalId="modalView" title="Chi tiết Giao dịch" size="modal-lg">
            <template #body>
                <form class="text-start">
                    <div class="mb-3">
                        <label class="form-label">Mã Giao dịch</label>
                        <input v-model="giaoDich.maGiaoDich" class="form-control" disabled />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Loại dịch vụ</label>
                        <select
                            v-model="giaoDich.maDichVu"
                            class="form-select"
                            aria-label="Default select example"
                            disabled
                        >
                            <option selected disabled>Chọn dịch vụ</option>
                            <template v-for="dichVu in allDichVus" :key="dichVu.maDichVu">
                                <option :value="dichVu.maDichVu">
                                    {{ dichVu.tenDichVu }}
                                </option>
                            </template>
                        </select>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Ngày Giao dịch</label>
                        <input
                            v-model="giaoDich.ngayGiaoDich"
                            class="form-control"
                            type="date"
                            disabled
                        />
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Đơn giá</label>
                        <input v-model="giaoDich.donGia" class="form-control" disabled />
                        <div class="text-danger" v-if="isDirtyDonGia && checkDonGia">
                            {{ checkDonGia }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Diện tích (m2)</label>
                        <input v-model="giaoDich.dienTich" class="form-control" disabled />
                        <div class="text-danger" v-if="isDirtyDienTich && checkDienTich">
                            {{ checkDienTich }}
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Tên Khách hàng</label>
                        <select
                            v-model="giaoDich.maKhachHang"
                            class="form-select"
                            aria-label="Default select example"
                            disabled
                        >
                            <option selected disabled>Chọn khách hàng</option>
                            <template
                                v-for="khachHang in allKhachHangs"
                                :key="khachHang.maKhachHang"
                            >
                                <option :value="khachHang.maKhachHang">
                                    {{ khachHang.tenKhachHang }}
                                </option>
                            </template>
                        </select>
                    </div>
                </form>
            </template>

            <template #footer>
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Đóng
                </button>
            </template>
        </BaseModal>

        <BaseModal ref="modalDeleteRef" modalId="modalDelete" title="Xác nhận xóa">
            <template #body>
                <p>
                    Bạn có chắc muốn xóa giao dịch
                    <strong>{{ giaoDich.maGiaoDich }}</strong>
                    không?
                </p>
            </template>

            <template #footer>
                <button class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                <button class="btn btn-danger" @click="handleDelete(giaoDich.maGiaoDich)">
                    Xóa
                </button>
            </template>
        </BaseModal>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted, computed, watch } from 'vue'
    import BaseModal from '@/components/common/BaseModal.vue'
    import BaseTable from './common/BaseTable.vue'
    import {
        addGiaoDich,
        checkMaGiaoDichExists,
        deleteGiaoDich,
        getGiaoDichs,
        updateGiaoDich
    } from '@/services/giaoDichService'
    import { Eye, Pencil, Plus, Search, Trash2 } from 'lucide-vue-next'
    import { getDichVuByMaDichVu, getDichVus } from '@/services/dichVuService'
    import { getKhachHangByMaKhachHang, getKhachHangs } from '@/services/khachHangService'
    import { useToast } from 'vue-toast-notification'

    const toast = useToast()
    const giaoDichs = ref<Record<string, any>[]>([])
    const dichVus = ref<Record<number, string>>({})
    const tenKhachHangs = ref<Record<number, string>>({})
    const soDienThoais = ref<Record<string, any>[]>([])
    const emails = ref<Record<string, any>[]>([])
    const giaoDich = ref<Record<string, any>>({})
    const allDichVus = ref<Record<string, any>[]>([])
    const allKhachHangs = ref<Record<string, any>[]>([])
    const isError = ref(false)
    const messageError = ref<string>('')
    const isDirtyDienTich = ref(false)
    const isDirtyDonGia = ref(false)
    const filteredGiaoDichs = ref<Record<string, any>[]>([])
    const searchTenKhachHang = ref('')
    const searchMaDichVu = ref('')
    const isMaGiaoDichExists = ref(false)
    const isCheckingMaGiaoDich = ref(false)
    const modalAddRef = ref<{ hide: () => void } | null>(null)
    const modalUpdateRef = ref<{ hide: () => void } | null>(null)
    const modalDeleteRef = ref<{ hide: () => void } | null>(null)

    const mappedGiaoDichs = computed(() =>
        filteredGiaoDichs.value.map((item) => ({
            ...item,
            tenDichVu: dichVus.value[Number(item.maDichVu)],
            tenKhachHang: tenKhachHangs.value[Number(item.maKhachHang)],
            soDienThoai: soDienThoais.value[Number(item.maKhachHang)],
            email: emails.value[Number(item.maKhachHang)]
        }))
    )

    watch(
        () => giaoDich.value.maGiaoDich,
        async (newVal) => {
            const upperMa = newVal?.trim().toUpperCase()

            if (!upperMa) {
                isMaGiaoDichExists.value = false
                return
            }

            isCheckingMaGiaoDich.value = true
            try {
                const exists = await checkMaGiaoDichExists(upperMa)
                if (exists) {
                    isMaGiaoDichExists.value = true
                } else {
                    isMaGiaoDichExists.value = false
                }
            } catch (err) {
                console.error('Lỗi khi kiểm tra mã giao dịch', err)
            } finally {
                isCheckingMaGiaoDich.value = false
            }
        }
    )

    const handleSearch = () => {
        const ten = searchTenKhachHang.value.trim().toLowerCase()
        const maDV = searchMaDichVu.value

        filteredGiaoDichs.value = giaoDichs.value.filter((gd) => {
            const tenKhach = tenKhachHangs.value[Number(gd.maKhachHang)]?.toLowerCase() || ''
            const matchesTen = !ten || tenKhach.includes(ten)
            const matchesDichVu = !maDV || String(gd.maDichVu) === String(maDV)

            return matchesTen && matchesDichVu
        })
    }

    watch(
        () => giaoDich.value.dienTich,
        (newVal) => {
            if (newVal !== '') {
                isDirtyDienTich.value = true
            }
        }
    )

    watch(
        () => giaoDich.value.donGia,
        (newVal) => {
            if (newVal !== '') {
                isDirtyDonGia.value = true
            }
        }
    )

    const fetchItem = (item: any) => {
        giaoDich.value = { ...item }
    }

    const checkDienTich = computed(() => {
        const rawValue = giaoDich.value.dienTich
        const value = Number(rawValue)

        if (rawValue === '') return ''
        if (isNaN(value)) return 'Diện tích phải là số'
        if (value <= 20) return 'Diện tích phải lớn hơn 20'

        return ''
    })

    const checkDonGia = computed(() => {
        const rawValue = giaoDich.value.donGia
        const value = Number(rawValue)

        if (rawValue === '') return ''
        if (isNaN(value)) return 'Đơn giá phải là số'
        if (value < 500000) return 'Đơn giá phải lớn hơn hoặc bằng 500.000 VNĐ'

        return ''
    })

    const handleAdd = async () => {
        if (
            !giaoDich.value.maGiaoDich ||
            !giaoDich.value.maDichVu ||
            !giaoDich.value.ngayGiaoDich ||
            !giaoDich.value.donGia ||
            !giaoDich.value.dienTich ||
            !giaoDich.value.maKhachHang
        ) {
            isError.value = true
            messageError.value = 'Vui lòng nhập đầy đủ các trường dữ liệu!'
            setTimeout(() => {
                isError.value = false
                messageError.value = ''
            }, 3000)
            return
        }

        try {
            const formData = new FormData()
            Object.entries(giaoDich.value).forEach(([key, value]) => {
                formData.append(key, value || '')
            })

            const response = await addGiaoDich(formData)

            if (response.success) {
                toast.success('Thêm mới thành công')
                modalAddRef.value?.hide()
                await fetchGiaoDichs()
            }
        } catch (error) {
            console.error('Lỗi khi thêm mới: ', error)
        }
    }

    const resetAdd = () => {
        Object.keys(giaoDich.value).forEach((key) => {
            giaoDich.value[key] = ''
        })
    }

    const handleUpdate = async () => {
        if (
            !giaoDich.value.maGiaoDich ||
            !giaoDich.value.maDichVu ||
            !giaoDich.value.ngayGiaoDich ||
            !giaoDich.value.donGia ||
            !giaoDich.value.dienTich ||
            !giaoDich.value.maKhachHang
        ) {
            isError.value = true
            messageError.value = 'Vui lòng nhập đầy đủ các trường dữ liệu!'
            setTimeout(() => {
                isError.value = false
                messageError.value = ''
            }, 3000)
            return
        }

        try {
            const formData = new FormData()
            Object.entries(giaoDich.value).forEach(([key, value]) => {
                formData.append(key, value || '')
            })

            const response = await updateGiaoDich(giaoDich.value.maGiaoDich, formData)

            if (response.success) {
                toast.success('Cập nhật thành công')
                modalUpdateRef.value?.hide()
                await fetchGiaoDichs()
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật: ', error)
        }
    }

    const fetchDichVus = async () => {
        const response = await getDichVus()
        allDichVus.value = response
    }

    const fetchKhachHangs = async () => {
        const response = await getKhachHangs()
        allKhachHangs.value = response
    }

    const fetchGiaoDichs = async () => {
        const response = await getGiaoDichs()
        giaoDichs.value = response
        filteredGiaoDichs.value = response

        const promises: Promise<any>[] = []

        for (const item of response) {
            promises.push(getDichVu(Number(item.maDichVu)))
            promises.push(getTenKhachHang(Number(item.maKhachHang)))
            promises.push(getSoDienThoai(Number(item.maKhachHang)))
            promises.push(getEmail(Number(item.maKhachHang)))
        }

        await Promise.all(promises)
    }

    const getDichVu = async (maDichVu: number) => {
        if (!dichVus.value[maDichVu]) {
            const dichVu = await getDichVuByMaDichVu(maDichVu)
            dichVus.value[maDichVu] = dichVu ? dichVu.tenDichVu : 'Không xác định'
        }
        return dichVus.value[maDichVu]
    }
    const getTenKhachHang = async (maKhachHang: number) => {
        if (!tenKhachHangs.value[maKhachHang]) {
            const khachHang = await getKhachHangByMaKhachHang(maKhachHang)
            tenKhachHangs.value[maKhachHang] = khachHang ? khachHang.tenKhachHang : 'Không xác định'
        }
        return tenKhachHangs.value[maKhachHang]
    }
    const getSoDienThoai = async (maKhachHang: number) => {
        if (!soDienThoais.value[maKhachHang]) {
            const khachHang = await getKhachHangByMaKhachHang(maKhachHang)
            soDienThoais.value[maKhachHang] = khachHang ? khachHang.soDienThoai : 'Không xác định'
        }
        return soDienThoais.value[maKhachHang]
    }
    const getEmail = async (maKhachHang: number) => {
        if (!emails.value[maKhachHang]) {
            const khachHang = await getKhachHangByMaKhachHang(maKhachHang)
            emails.value[maKhachHang] = khachHang ? khachHang.email : 'Không xác định'
        }
        return emails.value[maKhachHang]
    }

    const handleDelete = async (maGiaoDich: string) => {
        try {
            const response = await deleteGiaoDich(maGiaoDich)

            if (response.success) {
                toast.success('Xóa thành công')
                modalDeleteRef.value?.hide()
                await fetchGiaoDichs()
            }
        } catch (error) {
            console.error('Lỗi khi xóa: ', error)
        }
    }

    onMounted(() => {
        fetchGiaoDichs()
        fetchDichVus()
        fetchKhachHangs()
    })
</script>
