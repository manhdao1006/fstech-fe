<template>
    <div class="block-heading">
        <div class="container pt-2 pb-2">
            <div class="row justify-content-between">
                <div class="col-xxl-7 col-xl-7 col-md-6 col-6 row hide-heading-mobile">
                    <div class="col-xl-4 col-md-4 d-flex">
                        <div class="align-content-center pe-1">
                            <PhoneCall class="text-white" />
                        </div>
                        <div class="heading-content heading-content-phone">(+84.236) 3.817.366</div>
                    </div>
                    <div class="col-xl-4 col-md-4 d-flex">
                        <div class="align-content-center pe-1">
                            <Locate class="text-white" />
                        </div>
                        <div class="heading-content heading-content-location">1006 ABC Avanue</div>
                    </div>
                    <div class="col-xl-4 col-md-4 d-flex">
                        <div class="align-content-center pe-1">
                            <Mail class="text-white" />
                        </div>
                        <div class="heading-content heading-content-email">idoc@bsr.com.vn</div>
                    </div>
                </div>

                <div class="col-xxl-4 col-xl-3 col-md-6 col-7 row">
                    <div
                        class="col-xxl-2 col-xl-3 col-md-2 col-4 align-content-center block-icon-signin"
                    >
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn dropdown-toggle text-white"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i class="fas fa-user"></i>
                            </button>
                            <ul class="dropdown-menu">
                                <li>
                                    <a class="dropdown-item" href="">Thông tin cá nhân</a>
                                </li>
                                <!-- <li><a class="dropdown-item" href="#">Bài viết của tôi</a></li> -->
                                <li><a class="dropdown-item" href="#">Thông báo</a></li>
                                <li><a class="dropdown-item" href="#">Cài đặt</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li>
                                    <a class="dropdown-item" href="">Đăng xuất</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        class="col-xxl-2 col-xl-2 col-md-2 col-4 align-content-center block-icon-signin"
                    >
                        <a href="/login">
                            <LogIn class="text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Locate, LogIn, Mail, PhoneCall, SignalIcon } from 'lucide-vue-next'
</script>

<style>
    .block-heading {
        background: #23689b;
    }
    .heading-content {
        align-content: center;
        color: #ffffff;
    }
    .heading-content-phone {
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 500;
        line-height: 22.1px;
    }
    .heading-content-location {
        font-family: 'UTM Aptima';
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
    }
    .heading-content-email {
        font-family: 'Montserrat';
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
    }
    .heading-content-language {
        align-content: center;
        color: #ffffff;
        font-family: 'Roboto';
        font-size: 14px;
        font-weight: 500;
        line-height: 18.2px;
        letter-spacing: 0.0125em;
        padding: 0px 5px;
    }
    .show-heading-mobile {
        display: none;
    }

    @media (max-width: 820px) {
        .show-heading-mobile {
            display: none;
        }
        .heading-content {
            font-size: 10px;
        }
    }

    @media (width: 540px) {
        .show-search-mobile {
            display: block;
            font-size: 10px;
        }
        .block-icon-flag {
            width: 35%;
        }
        .block-icon-signin {
            width: 15%;
        }
        .block-icon-social {
            width: 50%;
        }
    }

    @media (max-width: 480px) {
        .show-heading-mobile {
            display: block;
        }
        .hide-heading-mobile {
            display: none;
        }
        .bar-items a {
            font-size: 14px;
            color: #23689b;
        }
    }
</style>
