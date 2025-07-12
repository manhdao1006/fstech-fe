<template>
    <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand text-center" href="/">
                <img class="" src="" alt="logo" width="90px" height="90px" />
            </a>

            <ul class="sidebar-nav">
                <li class="sidebar-header">Quản lý</li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/admin/dashboard">
                        <i class="fas fa-tachometer-alt"></i>
                        <span class="align-middle">Dashboard</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="#">
                        <i class="fas fa-users"></i>
                        <span class="align-middle">Khách hàng</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="/giao-dich/danh-sach">
                        <i class="far fa-newspaper"></i>
                        <span class="align-middle">Giao dịch</span>
                    </a>
                </li>

                <li class="sidebar-header">Cài đặt</li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="#!">
                        <i class="fas fa-bell"></i>
                        <span class="align-middle">Thông báo</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="#!">
                        <i class="fas fa-globe"></i>
                        <span class="align-middle">Ngôn ngữ</span>
                        <i class="fas fa-chevron-down"></i>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'SideBar'
    })
</script>

<style>
    .sidebar,
    .sidebar-content {
        background: #222e3c;
        transition:
            margin-left 0.35s ease-in-out,
            left 0.35s ease-in-out,
            margin-right 0.35s ease-in-out,
            right 0.35s ease-in-out;
    }
    .sidebar {
        direction: ltr;
        max-width: 220px;
        min-width: 220px;
    }
    .sidebar-brand {
        color: #f8f9fa;
        display: block;
        font-size: 1.15rem;
        font-weight: 600;
        padding: 1.15rem 1.5rem;
    }
    .sidebar-nav {
        flex-grow: 1;
        list-style: none;
        margin-bottom: 0;
        padding-left: 0;
    }
    .sidebar-header {
        background: transparent;
        color: #ced4da;
        font-size: 0.75rem;
        padding: 1.5rem 1.5rem 0.375rem;
    }
    .sidebar-link,
    a.sidebar-link {
        background: #222e3c;
        border-left: 3px solid transparent;
        color: rgba(233, 236, 239, 0.5);
        cursor: pointer;
        display: block;
        font-weight: 400;
        padding: 0.625rem 1.625rem;
        position: relative;
        text-decoration: none;
        transition: #222e3c 0.1s ease-in-out;
    }
    .sidebar-link span {
        line-height: 30px;
        margin: 0px 40px 0px 10px;
    }
    .sidebar-link:hover,
    .sidebar-link:hover i {
        color: rgba(233, 236, 239, 0.75);
    }
</style>
