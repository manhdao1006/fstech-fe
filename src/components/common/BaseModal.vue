<template>
    <div class="modal fade" :id="modalId" tabindex="-1" aria-hidden="true" ref="modalRef">
        <div class="modal-dialog" :class="size">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">{{ title }}</h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        @click="$emit('close')"
                        aria-label="Đóng"
                    ></button>
                </div>

                <div class="modal-body">
                    <slot name="body"></slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { onMounted, ref } from 'vue'
    import * as bootstrap from 'bootstrap'

    const props = defineProps<{
        modalId: string
        title: string
        size?: string
    }>()

    defineEmits(['close'])

    const modalRef = ref<HTMLElement | null>(null)

    let modalInstance: bootstrap.Modal | null = null

    onMounted(() => {
        if (modalRef.value) {
            modalInstance = new bootstrap.Modal(modalRef.value)
        }
    })

    const show = () => {
        modalInstance?.show()
    }

    const hide = () => {
        modalInstance?.hide()
    }

    defineExpose({
        show,
        hide
    })
</script>
