<template>
    <table class="table table-hover my-0">
        <thead>
            <tr>
                <th v-for="col in columns" :key="col.key">
                    {{ col.label }}
                </th>
                <th v-if="$slots.actions">Hành động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-if="items.length === 0">
                <td
                    :colspan="columns.length + ($slots.actions ? 1 : 0)"
                    class="text-center text-muted fst-italic"
                >
                    {{ emptyText }}
                </td>
            </tr>
            <tr
                v-for="(item, index) in items"
                :key="keyField && item[keyField] ? item[keyField] : index"
            >
                <td v-for="col in columns" :key="col.key">
                    {{ item[col.key] }}
                </td>
                <td v-if="$slots.actions">
                    <slot name="actions" :item="item" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    interface Column {
        key: string
        label: string
    }

    defineProps<{
        columns: Column[]
        items: Record<string, any>[]
        keyField?: string
        emptyText?: string
    }>()
</script>
