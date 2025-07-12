<template>
    <nav class="navbar navbar-expand navbar-light navbar-bg">
        <div class="navbar-collapse collapse">
            <ul class="navbar-nav navbar-align">
                <li class="nav-item dropdown pt-2">
                    <a class="nav-icon" href="#!">
                        <div class="">
                            <i class="far fa-comment-alt"></i>
                        </div>
                    </a>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle d-none d-sm-inline-block"
                        href="#"
                        data-bs-toggle="dropdown"
                    >
                        <img
                            :src="'https://res.cloudinary.com/springboot-cloud/image/upload/v1730541714/user_dxgl5w.png'"
                            class="avatar img-fluid rounded me-1"
                            alt=""
                        />
                        <span class="text-dark">name</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end">
                        <a class="dropdown-item" href="#!">Thông tin cá nhân</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#!">Cài đặt & Riêng tư</a>
                        <a class="dropdown-item" href="#!">Trợ giúp</a>
                        <div class="dropdown-divider"></div>
                        <!-- <a class="dropdown-item" href="" @click="handleLogout">Đăng xuất</a> -->
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'Header'
    })
</script>

<style>
    .navbar-bg {
        background: #fff;
    }
    .navbar {
        border-bottom: 0;
        box-shadow: 0 0 2rem 0 rgba(33, 37, 41, 0.1);
    }
    .navbar-nav {
        direction: ltr;
    }
    .navbar-align {
        margin-left: auto;
    }
    .nav-icon {
        color: #6c757d;
    }
    .navbar .avatar {
        margin-bottom: -15px;
        margin-top: -15px;
    }
    .avatar {
        height: 40px;
        width: 40px;
    }
</style>
